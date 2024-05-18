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

// Below is the default prop for dummy data, uncomment if you want the schedule planner 
// to be loaded with course names on mount

// const testCourses: courseTerms = {
//     'Fall': ['ICS 31', 'STATS 67', 'MATH 3A'],
//     'Winter': ['ICS 32', 'ICS 6B', 'MATH 2A'],
//     'Spring': ['ICS 33', 'ICS 6D', 'INF 43'],
//     'Summer': ['CS 161', 'CS 120A', 'Writing 60']
// }

// Below is the prop that causes schedule planner table to be blank on page load so 
// drag-drop functionality can be experimented with.

const testCourses: courseTerms = {
    'Fall': ['', '', ''],
    'Winter': ['', '', ''],
    'Spring': ['', '', ''],
    'Summer': ['', '', ''],
}

export default function SchedulePlanner({ courses = testCourses, onDelete, startYear = 2024, containerRef }: props) {
    const [toggle, setDropdown] = useState("visible");
    const [yearInput, setYearInput] = useState(`${startYear} - ${startYear + 1}`);
    let columnList = useRef<any>([]);
    let colsGroupedByTerm: any = useRef({});

    const dropdownRef = useRef<any>();
    const delRef = useRef<any>();


    function handleDropDown() {

        let year = dropdownRef?.current?.classList[1];
        let table = document.querySelector(`.table${year}`);
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

    function handleYearEdit (e) {
        setYearInput(e.target.value);
        
    }


    function isColliding(elem1: any, elem2: any) {
        const rect1 = elem1.getBoundingClientRect();
        const rect2 = elem2.getBoundingClientRect();

        return !(rect1.right < rect2.left ||
            rect1.left > rect2.right ||
            rect1.bottom < rect2.top ||
            rect1.top > rect2.bottom);
    }

    useEffect(() => {
        const mouseMoveFunction = () => {
            for (let column of columnList.current) {
                if (isColliding(containerRef.current, column.current)) {
                    const currentTerm = column.current.getAttribute('data-term');
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
                    let colDivRef = useRef<any>();
                    let colDiv = <div className={styles.col} ref={colDivRef} key={`${currentRow}-${currentTerm}`} id={`${currentRow}-${currentTerm}`} data-term={currentTerm}> {courses[currentTerm][currentRow]} </div>
                    if (!(currentTerm in colsGroupedByTerm.current)) {
                        colsGroupedByTerm.current[currentTerm] = [colDivRef];
                    } else {
                        colsGroupedByTerm.current[currentTerm].push(colDivRef);
                    }

                    columnList.current.push(colDivRef);
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

                    {/* <div>
                        {startYear} - {startYear + 1}
                    </div> */}

                    <input value={yearInput} className={styles.date} type="text" onChange={handleYearEdit} > 
                        
                    </input>

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


