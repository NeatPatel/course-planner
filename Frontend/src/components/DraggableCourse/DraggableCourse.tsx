import styles from "./DraggableCourse.module.css";
import { useState, useRef } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from "@dnd-kit/utilities";

export default function DraggableCourse({ id, children }: any) {
    const { attributes, listeners, setNodeRef, transform }: any = useDraggable({
        id: id
    })

    const style = {
        transform: CSS.Translate.toString(transform),
    };

    return (
        <div ref={setNodeRef} className={styles.container} style={style} {...listeners} {...attributes}>
            {children}
        </div>

    )
}



