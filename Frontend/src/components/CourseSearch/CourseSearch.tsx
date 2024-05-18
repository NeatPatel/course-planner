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

    const searchResults = currentInput?.toLowerCase() ? departments.map(department => {
        if (currentInput.toLowerCase() && department.includes(currentInput.toLowerCase())) {
            return <li className={searchStyles.departmentItem} key={department}>{department}</li>
        }
    }) : null;


    const handleChange = (e: any) => {
        console.log('new change', e.target.value)
        setCurrentInput(e.target.value);

    }

    return (
        <div className={searchStyles.container}>

            <div className={searchStyles.label}>
                Search Course
            </div>

            <div className={searchStyles.searchBar}>
                <input type="text" placeholder="Course name..."
                    onChange={(e) => handleChange(e)}
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


