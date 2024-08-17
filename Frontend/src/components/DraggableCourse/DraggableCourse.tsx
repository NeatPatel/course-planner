import styles from "./DraggableCourse.module.css";
import { useState, useRef } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from "@dnd-kit/utilities";
import DeleteIcon from '../../icons/courseDelete.svg';
import InfoIcon from '../../icons/info.svg'
import { addedCourseType } from "../../App";
import { courseInformation } from "../../App";

interface props {
    id: string,
    children: string[],
    invalidCourses: Set<string> | undefined,
    addedCourses: addedCourseType,
    setAddedCourses: React.Dispatch<React.SetStateAction<addedCourseType>>,
    setBaggedCourses: React.Dispatch<React.SetStateAction<courseInformation[]>>
}

interface courseDataSchema {
    school: string,
    description: string,
    restriction: string,
    prerequisite_text: string,
    ge_text: string,
    units: string[]
}

const SERVER = 'https://course-planner-dl32.onrender.com';

export default function DraggableCourse({ id, children, invalidCourses, addedCourses, setAddedCourses, setBaggedCourses }: props) {
    const [courseData, setCourseData] = useState<courseDataSchema | null>(null);
    const modalRef = useRef<HTMLDialogElement>(null);

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: id
    })

    const style = {
        transform: CSS.Translate.toString(transform),
    };

    async function getCourseInfo() {
        if (courseData != null) {
            modalRef.current?.showModal();
            return;
        }
        let courseName = children.join("").replace(/\s+/g, '').replace("&", "%26");
        const promise = await fetch(`${SERVER}/course?courseId=${courseName}`)
        const data = await promise.json();
        console.log(data);
        if (!data.data.course) return;
        setCourseData(data.data.course);
        console.log('set course data to: ', data.data.course);
        modalRef.current?.showModal();
    }

    let containerClass;
    if (invalidCourses != undefined && invalidCourses.has(id)) {
        containerClass = `${styles.container} ${styles.invalidCourse}`;
    } else {
        containerClass = `${styles.container}`
    }

    function deleteCourse() {
        console.log(addedCourses);
        setAddedCourses((prevAddedCourses: addedCourseType) => {
            const addedCoursesCopy = { ...prevAddedCourses };
            for (const quarterIDKey in addedCoursesCopy) {
                const courseList = addedCoursesCopy[quarterIDKey];

                addedCoursesCopy[quarterIDKey] = courseList.filter((course: courseInformation) => {
                    return course.id !== id
                });

            }
            console.log(addedCoursesCopy);
            return addedCoursesCopy;
        });


        setBaggedCourses((prevBaggedCourses: courseInformation[]) => {
            const baggedCoursesCopy = [...prevBaggedCourses];
            const output = baggedCoursesCopy.filter((course: courseInformation) => {
                return course.id !== id
            });
            return output;
        });
    }


    return (
        <>
            <div className={containerClass} style={style} >
                <div className={styles.name} ref={setNodeRef} {...listeners} {...attributes} >
                    {children}
                </div>

                <div className={styles.icon}>
                    <img src={InfoIcon} alt="info" className={styles.info}
                        onClick={getCourseInfo} />
                    <img className={styles.delete} src={DeleteIcon} alt=""
                        onClick={() => {
                            deleteCourse();
                        }} />
                </div>

            </div>

            <dialog data-modal ref={modalRef} className={styles.modal}>
                {
                    courseData && `${children.slice(1, children.length - 1)} - ${courseData.school}`
                }

                <br />
                {
                    courseData && `(${courseData.units[0]} units)`
                }
                <br /><br />
                {
                    courseData && courseData.description
                }
                <br /><br />

                {
                    courseData && <span> Restriction: {courseData.restriction}</span>
                }
                <br /><br />

                {
                    courseData && <span> Prerequisite: {courseData.prerequisite_text}</span>
                }

                <br /><br />
                {
                    courseData && <span> <b>{courseData.ge_text}</b></span>
                }

                <div>
                    <button onClick={() => {
                        modalRef.current?.close();
                    }}> Close </button>
                </div>

            </dialog>
        </>
    )
}



