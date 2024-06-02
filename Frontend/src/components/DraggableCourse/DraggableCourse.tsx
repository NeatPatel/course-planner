import styles from "./DraggableCourse.module.css";
import { useState, useRef } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from "@dnd-kit/utilities";
import DeleteIcon from '../../icons/courseDelete.svg';
import InfoIcon from '../../icons/info.svg'
export default function DraggableCourse({ id, children }: any) {
    const [isRemoved, setIsRemoved] = useState<boolean>(false);

    const { attributes, listeners, setNodeRef, transform }: any = useDraggable({
        id: id
    })

    const style = {
        transform: CSS.Translate.toString(transform),
    };

    async function getCourseInfo() {
        const courseName = children.replace(/\s+/g, '');

        const promise = await fetch(`http://localhost:8000/course?courseId=${courseName}`)
        const data = await promise.json();
        console.log(data);
    }

    return (
        <>
            {
                isRemoved == false && (
                    <div className={styles.container} style={style}  >
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

                    </div>

                )
            }
        </>

    )
}



