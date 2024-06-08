import searchStyles from "./SearchBar.module.css"
import { useState } from 'react';
import searchGlass from "../../../public/search-glass.png"

export default function DepartmentSearch({ departments }: { departments: any }) {
    const [currentDepartment, setCurrentDepartment] = useState<string | null>(null);
    const [currentCourseNumber, setCurrentCourseNumber] = useState<string | null>(null);
    const [focused, setFocused] = useState<boolean>(false);

    let searchResults;
    let handleCourseClick = (e: any) => {
        setCurrentDepartment(e.target.innerHTML);
    }
    if (focused && !currentDepartment) {
        searchResults = departments.map((department: any) => {
            return <li onMouseDown={handleCourseClick} className={searchStyles.departmentItem} key={department}>{department}</li>
        });
    }
    else {
        searchResults = currentDepartment?.toLowerCase() ? departments.map((department: any) => {
            if (currentDepartment.toLowerCase() && department.toLowerCase().includes(currentDepartment.toLowerCase())) {
                return <li onMouseDown={handleCourseClick} className={searchStyles.departmentItem} key={department}>{department}</li>
            }
        }) : null;
    }


    const handleChange = (e: any) => {
        setCurrentDepartment(e.target.value);
        setFocused(true)
    }


    return (
        <>
            <div className={searchStyles.container}>
                <div className={searchStyles.searchBar}>
                    <input value={currentDepartment ? currentDepartment : ""} id="searchCourse" type="text" placeholder="Department"
                        onChange={(e) => handleChange(e)}
                        onClick={(e) => {
                            handleChange(e);
                            setFocused(true);
                        }}
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)} />
                </div>
                {/* <br /> */}
                {
                    searchResults && searchResults.length > 0 && focused && <div className={searchStyles.searchResults}>
                        <ul>
                            {searchResults}
                        </ul>
                    </div>
                }
            </div>
            <div className={searchStyles.courseNumberContainer}>
                <div className={searchStyles.searchBar}>
                    <input value={currentCourseNumber ? currentCourseNumber : ""} id="searchCourse" type="text" placeholder="Course #"
                        onChange={(e: any) => setCurrentCourseNumber(e.target.value)} />
                </div>
            </div>
            <div className={searchStyles.searchBarContainer}>
                <div className={searchStyles.searchGlass}>
                    <img src={searchGlass} />
                </div>
            </div>
        </>

    )
}


