import styles from './SchedulePlanner.module.css';
import DropdownIcon from '../../icons/dropdown.svg';
import DeleteIcon from '../../icons/delete.svg';
import { Droppable } from './Droppable.tsx';
import { useDroppable } from "@dnd-kit/core";

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

export default function SchedulePlanner({ courses = testCourses, onDelete, startYear = 2024, addedCourses }: any) {
    // const [toggle, setDropdown] = useState("visible");
    const [showTable, setShowTable] = useState(false);
    const [yearInput, setYearInput] = useState(`${startYear} - ${startYear + 1}`);

    const dropdownRef = useRef<any>();
    const delRef = useRef<any>();

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

    for (let currentTermIndex = 0; currentTermIndex < 4; currentTermIndex++) {
        const id = `${startYear}-${currentTermIndex}`
        let newTermData = <Droppable key={id} id={id}>
            {
                id in addedCourses && addedCourses[id]
            }
        </Droppable>

        tableData.push(newTermData);

    }

    // for (let currentRow = 0; currentRow < numRows; currentRow++) {
    // let newRowData = <div className={styles.row} key={currentRow}>
    //     {
    //         Object.keys(courses).map(currentTerm => {
    //             const id = `${currentTerm}-${currentRow}-${startYear}`;
    //             return <Droppable key={id} id={id}>
    //                 {
    //                     id in addedCourses && addedCourses[id]
    //                 }

    //             </Droppable>;
    //         })
    //     }
    // </div>

    // tableData.push(newRowData);

    // }

    function handleDropDown() {
        setShowTable(prevState => !prevState);
    }

    return (
        <>

            <div id={`${startYear}`} className={`${styles.container} ${showTable ? styles.expanded : null}`}>

                <div className={styles.yearLabel}>
                    <div>
                        <img ref={dropdownRef} className={"dropdown" + " " + startYear + " " + styles.dropdown} onClick={handleDropDown} src={DropdownIcon} alt="" />
                    </div>

                    <input value={yearInput} className={styles.date} type="text" onChange={handleYearEdit} >

                    </input>

                    <div>
                        <img ref={delRef} className={"delete" + " " + startYear + " " + styles.delete} onClick={handleDelete} src={DeleteIcon} alt="" />
                    </div>
                </div>

                {

                    showTable && (
                        // <div className={`table${startYear}`}>
                        <div className={styles.table}>
                            <div className={styles.header}>
                                <div className={styles.col}>Fall</div>
                                <div className={styles.col}>Winter</div>
                                <div className={styles.col}>Spring</div>
                                <div className={styles.col}>Summer</div>
                            </div>

                            <div className={styles.termContainer}>
                                {
                                    tableData
                                }
                            </div>

                        </div>

                    )
                }


            </div>

        </>
    );
}


