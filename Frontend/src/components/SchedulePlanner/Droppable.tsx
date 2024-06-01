import { useDroppable } from "@dnd-kit/core";
import styles from "./SchedulePlanner.module.css";

export function Droppable({ id, children }: any) {
    const { isOver, setNodeRef } = useDroppable({
        id: id,
    });
    const style = {
        backgroundColor: isOver ? '#c4c4c4' : '#EDEDED'
    };

    return (
        <div ref={setNodeRef} className={styles.col} style={style} key={id}
            id={id}>
            {children}
        </div>


    )
}

