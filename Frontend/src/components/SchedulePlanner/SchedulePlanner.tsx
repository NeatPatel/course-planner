import styles from './SchedulePlanner.module.css';
import DropdownIcon from '../../icons/dropdown.svg';
import DeleteIcon from '../../icons/delete.svg';
import { Droppable } from './Droppable.tsx';

import { useState, useRef, useEffect } from 'react';
import DraggableCourse from '../DraggableCourse/DraggableCourse.tsx';

interface courseTerms {
    [key: string]: string[]
}


interface props {
    courses?: courseTerms
    startYear: number,
    onDelete: Function
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

export default function SchedulePlanner({ parent, courses = testCourses, onDelete, startYear = 2024 }: any) {
    const [toggle, setDropdown] = useState("visible");
    const [yearInput, setYearInput] = useState(`${startYear} - ${startYear + 1}`);

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

    function handleYearEdit(e: any) {
        setYearInput(e.target.value);

    }



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
                    const id = `ICS 6D Container`
                    return <Droppable id={id}>{parent === 'ICS 6D Container' ? <DraggableCourse id={'ICS 6D'}> ICS 6D </DraggableCourse> : 'Drop here'} </Droppable>;
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


