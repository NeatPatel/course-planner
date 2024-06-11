import searchStyles from "./SearchBar.module.css"
import { useState } from 'react';
import searchGlass from "../../../public/search-glass.png"

export default function DepartmentSearch({ departments, setBaggedCourses }: { departments: any, setBaggedCourses: any }) {
    const [currentDepartment, setCurrentDepartment] = useState<string | null>(null);
    const [currentInput, setCurrentInput] = useState<string | null>(null);
    const [currentCourseNumber, setCurrentCourseNumber] = useState<string | null>(null);
    const [focused, setFocused] = useState<boolean>(false);

    let searchResults;
    let handleCourseClick = (e: any) => {
        console.log('course click event: ', e.target.innerText)
        setCurrentDepartment(e.target.innerText);
        setCurrentInput(e.target.innerText);
    }
    if (focused && !currentInput) {
        searchResults = departments.map((department: any) => {
            return <li onMouseDown={handleCourseClick} className={searchStyles.departmentItem} key={department}>{department}</li>
        });
    }
    else {
        searchResults = currentInput?.toLowerCase() ? departments.map((department: string) => {
            if (currentInput.toLowerCase() && department.toLowerCase().includes(currentInput.toLowerCase())) {
                return <li onMouseDown={handleCourseClick} className={searchStyles.departmentItem} key={department}>{department}</li>
            }
        }) : null;
    }


    const handleChange = (e: any) => {
        setCurrentInput(e.target.value);
        // console.log('setting to: ', e.target.value)
        setFocused(true)
    }

    async function addCourse() {
        console.log('adding course: ')
        let courseID = currentDepartment?.includes("&") ? `${currentDepartment.replace("&", "%26")}${currentCourseNumber}` : `${currentDepartment}${currentCourseNumber}`
        courseID = courseID.replace(/\s/g, ""); // remove all whitespace 
        const promise = await fetch(`http://localhost:8000/course?courseId=${courseID}`);
        const data = await promise.json();
        console.log('course data: ', data);

        if (data.data.course) {
            const courseID = data.data.course.id;

            setBaggedCourses((prevCourses: any) => {
                return [...prevCourses, { id: courseID, children: courseID }]
            })

        }
    }



    return (
        <>
            <div className={searchStyles.container}>
                <div className={searchStyles.searchBar}>
                    <input value={currentInput ? currentInput : ""} id="searchCourse" type="text" placeholder="Department"
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
                <div className={searchStyles.searchGlass} onClick={addCourse}>
                    <img src={searchGlass} />
                </div>
            </div>
        </>

    )
}


