import styles from './SchedulePlanner.module.css';
import DropdownIcon from '../../icons/dropdown.svg';

import { useState, useEffect, useRef } from 'react';

interface courseTerms {
    [key: string]: string[]
}

interface props {
    courses?: courseTerms
    startYear: number,
}

const testCourses: courseTerms = {
    'Fall': ['ICS 31', 'STATS 67', 'MATH 3A'],
    'Winter': ['ICS 32', 'ICS 6B', 'MATH 2A'],
    'Spring': ['ICS 33', 'ICS 6D', 'INF 43'],
    'Summer': ['CS 161', 'CS 120A', 'Writing 60']
}

export default function SchedulePlanner({ courses = testCourses, startYear = 2024 }: props) {
    // For dropdown

    const [toggle, setDropdown] = useState("visible");
    
    const dropdownRef = useRef();
    function handleDropDown () {

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


    
    let numRows = 0;
    for (let term in courses) {
        if (courses[term].length > numRows)
            numRows = courses[term].length;
    }


    let tableData = [];

    for (let currentRow = 0; currentRow < numRows; currentRow++) {
        let newRowData = <div className={styles.row}>
            {
                Object.keys(courses).map(currentTerm => {
                    return <div className={styles.col}> {courses[currentTerm][currentRow]} </div>
                })
            }
        </div>

        tableData.push(newRowData);
    }

    return (
        <>
            
            <div className={styles.container}>
            <img ref={dropdownRef} className={"dropdown" + " " + startYear} onClick={handleDropDown}src={DropdownIcon} alt="" />
            
                <div className={styles.yearLabel}>
                    
                    {startYear} - {startYear + 1}
                    
                    
                    
                </div>
                

                <div className={`${styles.table} table${startYear} ${styles.hidden}`}>
                    <div className={styles.header}>
                        <div className={styles.col}>Fall</div>
                        <div className={styles.col}>Winter</div>
                        <div className={styles.col}>Spring</div>
                        <div className={styles.col}>Summer</div>
                    </div>

                    {/* <div> */}
                    {
                        tableData

                    }


                    {/* </div> */}


                </div>
            </div>

        </>
    );
}


