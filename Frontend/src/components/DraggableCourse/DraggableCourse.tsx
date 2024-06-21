import styles from "./DraggableCourse.module.css";
import { useState, useRef } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from "@dnd-kit/utilities";
import DeleteIcon from '../../icons/courseDelete.svg';
import InfoIcon from '../../icons/info.svg'

export default function DraggableCourse({ id, children, invalidCourses, addedCourses, setAddedCourses, setBaggedCourses }: any) {
    const [courseData, setCourseData] = useState<any>(null);
    const modalRef = useRef<any>(null);

    const { attributes, listeners, setNodeRef, transform }: any = useDraggable({
        id: id
    })

    const style = {
        transform: CSS.Translate.toString(transform),
    };

    async function getCourseInfo() {
        if (courseData != null) {
            modalRef.current.showModal();
            return;
        }
        let courseName = children.join("").replace(/\s+/g, '').replace("&", "%26");
        const promise = await fetch(`http://localhost:8000/course?courseId=${courseName}`)
        const data = await promise.json();
        console.log(data);
        if (!data.data.course) return;
        setCourseData(data.data.course);
        console.log('set course data to: ', data.data.course);
        modalRef.current.showModal();
    }

    let containerClass;
    if (invalidCourses != undefined && invalidCourses.has(id)) {
        containerClass = `${styles.container} ${styles.invalidCourse}`;
    } else {
        containerClass = `${styles.container}`
    }

    function deleteCourse() {
        console.log(addedCourses);
        setAddedCourses((prevAddedCourses: any) => {
            const addedCoursesCopy = { ...prevAddedCourses };
            for (const quarterIDKey in addedCoursesCopy) {
                const courseList = addedCoursesCopy[quarterIDKey];

                addedCoursesCopy[quarterIDKey] = courseList.filter((course: any) => {
                    return course.id !== id
                });

            }

            console.log(addedCoursesCopy);
            return addedCoursesCopy;
        });


        setBaggedCourses((prevBaggedCourses: any) => {
            const baggedCoursesCopy = [...prevBaggedCourses];
            const output = baggedCoursesCopy.filter((course: any) => {
                return course.id !== id
            });
            return output;
        });
    }


    return (
        <>
            {
                (
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
                                        // setIsRemoved(prevState => !prevState)
                                        deleteCourse();
                                    }} />
                            </div>

                        </div>

                        <dialog data-modal ref={modalRef} className={styles.modal}>
                            <div>
                                <button onClick={() => {
                                    modalRef.current.close();
                                }}> Close </button>
                            </div>
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

                            

                        </dialog>
                    </>

                )
            }
        </>
    )
}



