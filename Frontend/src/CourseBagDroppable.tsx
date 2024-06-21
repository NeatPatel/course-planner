import { useDroppable } from "@dnd-kit/core";

interface props {
    id: string,
    children: JSX.Element[]
}


export default function Droppable({ id, children }: props) {
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

