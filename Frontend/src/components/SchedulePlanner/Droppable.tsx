import { useDroppable } from "@dnd-kit/core";
import styles from "./SchedulePlanner.module.css";

export function Droppable({ termName, id, children }: any) {
    const { isOver, setNodeRef } = useDroppable({
        id: id,
    });
    const style = {
        backgroundColor: isOver ? '#c4c4c4' : '#EDEDED'
    };

    return (
        <div ref={setNodeRef} className={styles.table} style={style} key={id}
            id={id}>
            <div className={styles.termName}>
                {termName}
            </div>
            <div className={styles.courses}>
                {children}
            </div>
        </div>
    )
}

