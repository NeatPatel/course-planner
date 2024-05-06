import styles from './SchedulePlanner.module.css';
import DropdownIcon from '../../icons/dropdown.svg';
import DeleteIcon from '../../icons/delete.svg';

import { useState, useRef, useEffect } from 'react';

interface courseTerms {
    [key: string]: string[]
}

interface props {
    courses?: courseTerms
    startYear: number,
    onDelete: Function
    containerRef: any
}

// const testCourses: courseTerms = {
//     'Fall': ['ICS 31', 'STATS 67', 'MATH 3A'],
//     'Winter': ['ICS 32', 'ICS 6B', 'MATH 2A'],
//     'Spring': ['ICS 33', 'ICS 6D', 'INF 43'],
//     'Summer': ['CS 161', 'CS 120A', 'Writing 60']
// }

const testCourses: courseTerms = {
    'Fall': ['', '', ''],
    'Winter': ['', '', ''],
    'Spring': ['', '', ''],
    'Summer': ['', '', ''],
}

export default function SchedulePlanner({ courses = testCourses, onDelete, startYear = 2024, containerRef }: props) {
    // For dropdown

    const [toggle, setDropdown] = useState("visible");
    let columnList = useRef<any>([]);
    let colsGroupedByTerm: any = useRef({});

    const dropdownRef = useRef<any>();
    const delRef = useRef<any>();

    function handleDropDown() {

        let year = dropdownRef?.current?.classList[1];
        let table = document.querySelector(`.table${year}`);
        // console.log(table?.childNodes)
        setDropdown(toggle == "hidden" ? "visible" : "hidden");
        if (toggle == "hidden") {
            table?.classList.remove(styles.visible);
            table?.classList.add(styles.hidden);
        }
        else {

            table?.classList.remove(styles.hidden);
            table?.classList.add(styles.visible);

        }
        // console.log(table?.classList)

    }

    function handleDelete() {
        onDelete(startYear);
    }


    function isColliding(elem1: any, elem2: any) {
        var rect1 = elem1.getBoundingClientRect();
        var rect2 = elem2.getBoundingClientRect();

        return !(rect1.right < rect2.left ||
            rect1.left > rect2.right ||
            rect1.bottom < rect2.top ||
            rect1.top > rect2.bottom);
    }

    useEffect(() => {
        const mouseMoveFunction = () => {
            console.log(columnList.current)
            for (let column of columnList.current) {
                if (isColliding(containerRef.current, column.current)) {
                    console.log('Collision detected!');
                    const currentTerm = column.current.getAttribute('data-term');
                    console.log('current term ', currentTerm)
                    console.log('cols grouped by term: ', colsGroupedByTerm.current)
                    for (let col of colsGroupedByTerm.current[currentTerm]) {
                        col.current.style.backgroundColor = '#CDCDCD';
                    }
                } else {
                    const currentTerm = column.current.getAttribute('data-term');
                    for (let col of colsGroupedByTerm.current[currentTerm]) {
                        col.current.style.backgroundColor = '';
                    }
                }
            }
        }

        const mouseUpFunction = () => {
            for (let column of columnList.current) {
                if (isColliding(containerRef.current, column.current)) {
                    console.log('Collision detected! (mouse up)', containerRef);
                    column.current.innerText = containerRef.current.innerText
                    containerRef.current.remove();
                }
            }
        }

        document.addEventListener('mousemove', mouseMoveFunction);
        document.addEventListener('mouseup', mouseUpFunction);

        return () => {
            document.removeEventListener('mousemove', mouseMoveFunction)
            document.removeEventListener('mouseup', mouseUpFunction)
        }
    }, [])

    let numRows = 0;
    for (let term in courses) {
        if (courses[term].length > numRows)
            numRows = courses[term].length;
    }


    let tableData = [];

    for (let currentRow = 0; currentRow < numRows; currentRow++) {
        let newRowData = <div className={styles.row} key={currentRow}>
            {
                Object.keys(courses).map(currentTerm => {
                    let colRef = useRef<any>();
                    let colDiv = <div className={styles.col} key={`${currentRow}-${currentTerm}`} ref={colRef} data-term={currentTerm}> {courses[currentTerm][currentRow]} </div>
                    if (!(currentTerm in colsGroupedByTerm.current)) {
                        colsGroupedByTerm.current[currentTerm] = [colRef];
                    } else {
                        colsGroupedByTerm.current[currentTerm].push(colRef);
                    }
                    columnList.current.push(colRef);
                    return colDiv;
                })
            }
        </div>

        tableData.push(newRowData);
    }

    return (
        <>

            <div id={`${startYear}`} className={styles.container}>

                <div className={styles.yearLabel}>
                    <div>
                        <img ref={dropdownRef} className={"dropdown" + " " + startYear + " " + styles.dropdown} onClick={handleDropDown} src={DropdownIcon} alt="" />
                    </div>

                    <div>
                        {startYear} - {startYear + 1}
                    </div>

                    <div>
                        <img ref={delRef} className={"delete" + " " + startYear + " " + styles.delete} onClick={handleDelete} src={DeleteIcon} alt="" />
                    </div>
                </div>

                <div className={`${styles.table} table${startYear} ${styles.hidden}`}>
                    <div className={styles.header}>
                        <div className={styles.col}>Fall</div>
                        <div className={styles.col}>Winter</div>
                        <div className={styles.col}>Spring</div>
                        <div className={styles.col}>Summer</div>
                    </div>

                    {
                        tableData
                    }

                </div>
            </div>

        </>
    );
}


