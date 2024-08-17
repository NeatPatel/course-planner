import styles from './SchedulePlanner.module.css';
import DropdownIcon from '../../icons/dropdown.svg';
import { Droppable } from './Droppable.tsx';
import { useState } from 'react';
import { addedCourseType, courseInformation } from '../../App.tsx';
import DraggableCourse from '../DraggableCourse/DraggableCourse.tsx';

interface props {
    yearNumber: number,
    addedCourses: addedCourseType,
    invalidCourses: Set<string> | undefined,
    setAddedCourses: React.Dispatch<React.SetStateAction<addedCourseType>>,
    setBaggedCourses: React.Dispatch<React.SetStateAction<courseInformation[]>>
}

export default function SchedulePlanner({ yearNumber = 0, addedCourses, invalidCourses, setAddedCourses, setBaggedCourses }: props) {
    const [showTable, setShowTable] = useState<boolean>(false);
    const [yearInput, setYearInput] = useState<string>(`Year ${yearNumber + 1}`);

    // function handleDelete() {
    //     onDelete(yearNumber);
    // }

    function handleYearEdit(e: React.ChangeEvent<HTMLInputElement>) {
        setYearInput(e.target.value);
    }

    let tableData = [];
    const termNames = ['Fall', 'Winter', 'Spring', 'Summer']

    for (let currentTermIndex = 0; currentTermIndex < 4; currentTermIndex++) {
        const id = `${yearNumber}-${currentTermIndex}`
        console.log(addedCourses[id]);
        let newTermData = <Droppable termName={termNames[currentTermIndex]} key={id} id={id}>

            {
                (
                    id in addedCourses && addedCourses[id].map((course: courseInformation) => {
                        return <DraggableCourse key={course.id} id={course.id} invalidCourses={invalidCourses}
                            addedCourses={addedCourses} setAddedCourses={setAddedCourses} setBaggedCourses={setBaggedCourses}>

                            {course.children} </DraggableCourse>
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
            <div id={`${yearNumber}`} className={`${styles.container} ${showTable ? styles.expanded : null}`}>
                <div className={styles.yearLabel}>
                    <div>
                        <img className={"dropdown" + " " + yearNumber + " " + styles.dropdown}
                            onClick={handleDropDown} src={DropdownIcon} alt="" />
                    </div>

                    <input value={yearInput} className={styles.date} type="text" onChange={handleYearEdit} >
                    </input>

                    <div>
                        {/* <img className={"delete" + " " + yearNumber + " " + styles.delete}
                            src={DeleteIcon} alt="" /> */}
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


