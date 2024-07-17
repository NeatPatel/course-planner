import searchStyles from "./SearchBar.module.css"
import { useState } from 'react';
import searchGlass from "../../../public/search-glass.png"
import { courseInformation } from "../../App";
import { Input, Button } from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";

interface props {
    departments: string[],
    setBaggedCourses: React.Dispatch<React.SetStateAction<courseInformation[]>>
}


export default function DepartmentSearch({ departments, setBaggedCourses }: props) {
    const [currentDepartment, setCurrentDepartment] = useState<string | null>(null);
    const [currentInput, setCurrentInput] = useState<string | null>(null);
    const [currentCourseNumber, setCurrentCourseNumber] = useState<string | null>(null);
    const [focused, setFocused] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

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


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentInput(e.target.value);
        setFocused(true)
    }

    async function addCourse() {
        setIsLoading(true);
        console.log('adding course: ')
        let courseID = currentDepartment?.includes("&") ? `${currentDepartment.replace("&", "%26")}${currentCourseNumber}` : `${currentDepartment}${currentCourseNumber}`
        courseID = courseID.replace(/\s/g, ""); // remove all whitespace 
        const promise = await fetch(`https://course-planner-dl32.onrender.com/course?courseId=${courseID}`);
        const data = await promise.json();
        console.log('course data: ', data);

        if (data.data.course) {
            const courseID = data.data.course.id;

            setBaggedCourses((prevCourses: any) => {
                return [...prevCourses, { id: courseID, children: courseID }]
            })

        }

        setIsLoading(false);
    }



    return (
        <>
            <div className={searchStyles.searchBarsContainer}>

                <HStack spacing="1em" marginLeft="1em" marginRight="1em" marginTop="1em" height="2.5em">
                    <div className={searchStyles.container}>
                        <div className={searchStyles.searchBar}>
                            <Input value={currentInput ? currentInput : ""} className={searchStyles.searchBarInput} id="searchCourse" type="text" placeholder="Department"
                                onChange={(e) => handleChange(e)}
                                onClick={(e: any) => {
                                    handleChange(e);
                                    setFocused(true);
                                }}
                                onFocus={() => setFocused(true)}
                                onBlur={() => setFocused(false)} />
                        </div>
                        {
                            searchResults && searchResults.length > 0 && focused && <div className={searchStyles.searchResults}>
                                <ul>
                                    {searchResults}
                                </ul>
                            </div>
                        }
                    </div>

                    <Input value={currentCourseNumber ? currentCourseNumber : ""} className={searchStyles.courseNumberInput} id="searchCourse" type="text" placeholder="Course #"
                        onChange={(e: any) => setCurrentCourseNumber(e.target.value)} />
                    <Button className={searchStyles.searchGlass} onClick={addCourse} marginTop="0" borderRadius={50}
                        isLoading={isLoading}>
                        <img src={searchGlass} />
                    </Button>
                </HStack>
            </div >
        </>

    )
}


