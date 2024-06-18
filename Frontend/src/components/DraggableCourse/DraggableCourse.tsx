import styles from "./DraggableCourse.module.css";
import { useState } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from "@dnd-kit/utilities";
import DeleteIcon from '../../icons/courseDelete.svg';
import InfoIcon from '../../icons/info.svg'

export default function DraggableCourse({ id, children, invalidCourses }: any) {
    const [isRemoved, setIsRemoved] = useState<boolean>(false);
    const [courseData, setCourseData] = useState<any>(null);
    const [displayingCourseInfo, setDisplayingCourseInfo] = useState<boolean>(false);

    const { attributes, listeners, setNodeRef, transform }: any = useDraggable({
        id: id
    })

    const style = {
        transform: CSS.Translate.toString(transform),
    };

    async function getCourseInfo() {
        // console.log('children: ', children)
        // const courseName = children.join("")
        if (courseData != null) {
            setDisplayingCourseInfo(true);
            return;
        }
        let courseName = children.join("").replace(/\s+/g, '').replace("&", "%26");
        // console.log('course name: ', courseName)

        const promise = await fetch(`http://localhost:8000/course?courseId=${courseName}`)
        const data = await promise.json();
        console.log(data);
        if (!data.data.course) return;
        setCourseData(data.data.course);
        setDisplayingCourseInfo(true);
        // const courseDescription = data.data.course.description;
        // const GEcategory = data.data.course.ge_text;
        // const restriction = data.data.course.restriction;
        // const school = data.data.course.school;
        // const units = data.data.course.units[0];
        // const prereqs = data.data.course.prerequisite_text;
        // const coreqs = data.data.course.corequisite;
    }

    let containerClass;
    // console.log(invalidCourses);

    if (invalidCourses != undefined && invalidCourses.has(id)) {
        containerClass = `${styles.container} ${styles.invalidCourse}`;
    } else {
        containerClass = `${styles.container}`
    }


    return (
        <>
            {
                isRemoved == false && (
                    <>
                        <div className={containerClass} style={style} onMouseLeave={() => setDisplayingCourseInfo(false)} >
                            <div className={styles.name} ref={setNodeRef} {...listeners} {...attributes} >
                                {children}
                            </div>

                            <div className={styles.icon}>
                                <img src={InfoIcon} alt="info" className={styles.info}
                                    onClick={getCourseInfo} />
                                <img className={styles.delete} src={DeleteIcon} alt=""
                                    onClick={() => {
                                        setIsRemoved(prevState => !prevState)
                                    }} />
                            </div>
                            {
                                displayingCourseInfo && (
                                    <div className={styles.tooltip}>
                                        <p>
                                            {courseData.description.slice(0, 150)}...

                                        </p>


                                    </div>
                                )
                            }

                        </div>

                        {/* {
                            displayingCourseInfo && (
                                <div className={styles.tooltip}>
                                    <p>
                                        {courseData.description.slice(0, 150)}...

                                    </p>


                                </div>
                            )
                        } */}
                    </>

                )
            }
        </>
    )
}



