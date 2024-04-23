import styles from "./DraggableCourse.module.css";
import { useRef } from 'react';

export default function DraggableCourse() {
    let containerRef = useRef(null);

    function move(e: any) {
        console.log('containerRef', containerRef)
        console.log('e target event', e)

    }


    return (
        <div draggable ref={containerRef} className={styles.container}
            onClick={(e) => move(e)}>

        </div>

    )
}



