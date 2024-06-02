import searchStyles from "./CourseSearch.module.css"
import { useState } from 'react';

export default function DepartmentSearch() {
    const [currentInput, setCurrentInput] = useState<string | null>(null);
    const [focused, setFocused] = useState<boolean>(false)
    const departments = [
        'ICS',
        'Writing',
        'Physics',
        'History',
        'English',
        'Mathematics'
    ]
    let searchResults;
    let handleCourseClick = (e : any) => {
        console.log("RUN")
        console.log(e.target.innerHTML);
        setCurrentInput(e.target.innerHTML);
    }
    if (focused && !currentInput) {
        searchResults = departments.map(department => {
            return  <li onMouseDown={handleCourseClick} className={searchStyles.departmentItem} key={department}>{department}</li>
        });
    }
    else {
        searchResults = currentInput?.toLowerCase() ? departments.map(department => {
            if (currentInput.toLowerCase() && department.toLowerCase().includes(currentInput.toLowerCase())) {
                return <li onMouseDown={handleCourseClick} className={searchStyles.departmentItem} key={department}>{department}</li>
            }
        }) : null;
    }
    

    const handleChange = (e: any) => {
        console.log('new change', e.target.value)
        setCurrentInput(e.target.value);
        setFocused(true)
    }

    return (
        <div className={searchStyles.container}>

            {/* <div className={searchStyles.label}>
                Search Course
            </div> */}

            <div className={searchStyles.searchBar}>
                <input value={currentInput ? currentInput: ""} id="searchCourse" type="text" placeholder="Search Course"
                    onChange={(e) => handleChange(e)}
                    onClick={(e) => {
                        handleChange(e); 
                        setFocused(true);
                    }}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)} />
            </div>
            <br />
            {
                searchResults && focused && <div className={searchStyles.searchResults}>
                    <ul>
                        {searchResults}
                    </ul>
                </div>
            }


        </div>

    )
}


