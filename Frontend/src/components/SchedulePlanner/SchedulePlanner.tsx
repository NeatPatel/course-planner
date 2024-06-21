import styles from './SchedulePlanner.module.css';
import DropdownIcon from '../../icons/dropdown.svg';
import DeleteIcon from '../../icons/delete.svg';
import { Droppable } from './Droppable.tsx';
import { useState, useRef } from 'react';
import { addedCourseType } from '../../App.tsx';
import DraggableCourse from '../DraggableCourse/DraggableCourse.tsx';

interface props {
    startYear: number,
    onDelete: Function
    addedCourses: addedCourseType,
    invalidCourses: any,
    setAddedCourses: any,
    setBaggedCourses: any
}

export default function SchedulePlanner({ onDelete, startYear = 0, addedCourses, invalidCourses, setAddedCourses, setBaggedCourses }: props) {
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
    const termNames = ['Fall', 'Winter', 'Spring', 'Summer']

    for (let currentTermIndex = 0; currentTermIndex < 4; currentTermIndex++) {
        const id = `${startYear}-${currentTermIndex}`
        console.log(addedCourses[id]);
        let newTermData = <Droppable termName={termNames[currentTermIndex]} key={id} id={id}>

            {
                (
                    id in addedCourses && addedCourses[id].map((course: any) => {

                        return <DraggableCourse key={course.id} id={course.id} invalidCourses={invalidCourses} addedCourses={addedCourses} setAddedCourses={setAddedCourses} setBaggedCourses={setBaggedCourses}> {course.children} </DraggableCourse>
                    })
                )
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
                            <div className={styles.tables}>
                                {
                                    tableData
                                }
                            </div>

                        )
                    }
                </div>
            </div>
        </>
    );
}


