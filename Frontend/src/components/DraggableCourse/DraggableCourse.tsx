import styles from "./DraggableCourse.module.css";
import { useState, useRef } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from "@dnd-kit/utilities";
import DeleteIcon from '../../icons/delete.svg';

export default function DraggableCourse({ id, children }: any) {
    const [isHovering, setIsHovering] = useState<boolean>(false);
    const [isRemoved, setIsRemoved] = useState<boolean>(false);

    const { attributes, listeners, setNodeRef, transform }: any = useDraggable({
        id: id
    })

    const style = {
        transform: CSS.Translate.toString(transform),
    };

    return (
        <>
            {
                isRemoved == false && (
                    <div ref={setNodeRef} className={styles.container} style={style} {...listeners} {...attributes}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}>
                        {children}
                        {
                            isHovering && <img className={styles.delete} src={DeleteIcon} alt=""
                                onClick={() => {
                                    setIsRemoved(prevState => !prevState)
                                }} />
                        }
                    </div>
                )
            }



        </>

    )
}



