import { useDroppable } from "@dnd-kit/core";
import React from 'react';
import styles from "./SchedulePlanner.module.css";

export function Droppable({ id, children }: any) {
    const { isOver, setNodeRef } = useDroppable({
        id: id,
    });
    const style = {
        opacity: isOver ? 1 : 0.5
    };
    return (

        <div ref={setNodeRef} className={styles.col} style={style} key={id}
            id={id}>
            {children}
        </div>


    )
}

