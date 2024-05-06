import styles from "./DraggableCourse.module.css";
import { useState, useRef } from 'react';

export default function DraggableCourse({ containerRef }: any) {
    const [isDragging, setIsDragging] = useState<boolean>(false);
    // let containerRef = useRef<any>(null);
    let divX = useRef<any>();
    let divY = useRef<any>();

    function down(e: any) {
        setIsDragging(true);
        divX.current = e.clientX - containerRef.current.getBoundingClientRect().left;
        divY.current = e.clientY - containerRef.current.getBoundingClientRect().top
    }

    function move(e: any) {
        if (isDragging && containerRef.current) {
            containerRef.current.style.left = (e.clientX - divX.current) + "px";
            containerRef.current.style.top = (e.clientY - divY.current) + "px";
        }

    }

    return (
        <div ref={containerRef} className={styles.container}
            // onClick={(e) => move(e)}
            onMouseDown={(e) => down(e)}
            onMouseUp={() => setIsDragging(false)}
            onMouseMove={(e) => move(e)}
        // onMouseMoveCapture={(e) => move(e)}

        >
            ICS 6B

        </div>

    )
}



