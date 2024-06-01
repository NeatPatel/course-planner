import styles from './SchedulePlanner.module.css';
import DropdownIcon from '../../icons/dropdown.svg';
import DeleteIcon from '../../icons/delete.svg';
import { Droppable } from './Droppable.tsx';
import { useState, useRef } from 'react';
import { addedCourseType } from '../../App.tsx';
import Quarter from "../Quarter/Quarter.tsx"
interface props {
    startYear: number,
    onDelete: Function
    addedCourses: addedCourseType
}

export default function SchedulePlanner({ onDelete, startYear = 0, addedCourses }: props) {
    const [showTable, setShowTable] = useState(false);
    const [yearInput, setYearInput] = useState(`Year ${startYear + 1}`);

    const dropdownRef = useRef<any>();
    const delRef = useRef<any>();

    function handleDelete() {
        onDelete(startYear);
    }

    function handleYearEdit(e: any) {
        setYearInput(e.target.value);
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
                <div>
                {
                    showTable && (
                        // <div className={styles.table}>
                        //     <div className={styles.header}>
                        //         <div className={styles.col}>Fall</div>
                        //         <div className={styles.col}>Winter</div>
                        //         <div className={styles.col}>Spring</div>
                        //         <div className={styles.col}>Summer</div>
                        //     </div>

                        //     <div className={styles.termContainer}>
                        //         {
                        //             tableData
                        //         }
                        //     </div>
                        // </div>
                        
                        <div className={styles.tables}>

                        <Quarter name="Fall" />
                        <Quarter name="Winter"/>
                        <Quarter name="Spring" />
                        <Quarter name="Summer"/>
                        </div>
                        
                    )
                    
                }
                </div>
            </div>
        </>
    );
}


