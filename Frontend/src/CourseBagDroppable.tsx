import { useDroppable } from "@dnd-kit/core";

export default function Droppable({ id, children }: any) {
    const { setNodeRef } = useDroppable({
        id: id,
    });

    return (
        <div ref={setNodeRef} className="course-bag" key={id}
            id={id}>
            <div className="bagged-course-list">
                {children}
            </div>
        </div>
    )
}

