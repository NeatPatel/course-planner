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

    const [toggle, setDropdown] = useState("hidden");
    
    const dropdownRef = useRef();
    function handleDropDown () {

        let year = dropdownRef?.current?.classList[1];
        let table = document.querySelector(`.table${year}`);
        // console.log(table?.childNodes)
        
        if (toggle == "hidden") {
            table?.classList.remove(styles.visible);
            table?.classList.add(styles.hidden);
        }
        else {
            
            table?.classList.remove(styles.hidden);
            table?.classList.add(styles.visible);
            
        }
        setDropdown(toggle == "hidden" ? "visible" : "hidden");
    }


    
    let numRows = 0;
    for (let term in courses) {
        if (courses[term].length > numRows)
            numRows = courses[term].length;
    }


    let tableData = [];

    for (let currentRow = 0; currentRow < numRows; currentRow++) {
        let newRowData = <tr>
            {
                Object.keys(courses).map(currentTerm => {
                    return <td> {courses[currentTerm][currentRow]} </td>
                })
            }
        </tr>

        tableData.push(newRowData);
    }

    return (
        <>
            
            <div className={styles.container}>
            <img ref={dropdownRef} className={"dropdown" + " " + startYear} onClick={handleDropDown}src={DropdownIcon} alt="" />
            
                <div className={styles.yearLabel}>
                    
                    {startYear} - {startYear + 1}
                    
                    
                    
                </div>
                

                <table className={`table${startYear} ${styles.hidden}`}>
                    <thead className={styles.header}>
                        <th className={styles.header}>Fall</th>
                        <th>Winter</th>
                        <th>Spring</th>
                        <th>Summer</th>
                    </thead>

                    <tbody>
                        {
                            tableData

                        }


                    </tbody>


                </table>
            </div>

        </>
    );
}


