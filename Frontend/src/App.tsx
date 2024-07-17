import { useState, useEffect, useRef } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar.tsx";
import SchedulePlanner from "./components/SchedulePlanner/SchedulePlanner.tsx";
import DraggableCourse from "./components/DraggableCourse/DraggableCourse.tsx";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import CourseBagDroppable from "./CourseBagDroppable.tsx";
import raw from "./department-list.txt";
import { ChakraProvider } from "@chakra-ui/react";
import { Switch } from "@chakra-ui/react";
import SavePopOver from "./components/SavePopOver/SavePopOver.tsx";
import LoadPopOver from "./components/LoadPopOver/LoadPopOver.tsx";
import { Button } from "@chakra-ui/react";

export type courseInformation = {
    id: string,
    children: string
}

export type addedCourseType = {
    [key: string]: courseInformation[];
}

const SERVER = 'https://course-planner-dl32.onrender.com';

function App() {
    const currentYearRef = useRef<number>(0);
    const [addedCourses, setAddedCourses] = useState<addedCourseType>({});
    const [scheduleYears, setScheduleYears] = useState<number[]>([0, 1, 2, 3]);
    const [departmentList, setDepartmentList] = useState<string[]>([]);
    const [invalidCourses, setInvalidCourses] = useState<Set<string>>();
    const [baggedCourses, setBaggedCourses] = useState<courseInformation[]>([]);
    const [enforcingPrerequisites, setEnforcingPrerequisites] = useState<boolean>(true);

    const addedCourseCopy = { ...addedCourses };
    let initializedState = false;
    for (const year of scheduleYears) {
        for (let currentTermIndex = 0; currentTermIndex < 4; currentTermIndex++) {
            const id = `${year}-${currentTermIndex}`;
            if (!(id in addedCourseCopy)) {
                addedCourseCopy[id] = [];
                initializedState = true;
            }
        }
    }
    if (initializedState) setAddedCourses(addedCourseCopy);

    useEffect(() => {
        // Parse department list text file on initial render and set it as state.
        async function getDepartmentList() {
            const rawData = await fetch(raw);
            const text = await rawData.text();
            const separators = /,\r\n/;
            let departmentList = text.split(separators);
            departmentList = departmentList.map(departmentName => {
                return departmentName.replace(/'/g, "")
            })

            setDepartmentList(departmentList);
        }
        getDepartmentList();
    }, []);

    function handleDeleteTable(deleteYear: number) {
        setScheduleYears((prevScheduleYears: number[]) => [...prevScheduleYears].filter(currentYear => currentYear !== deleteYear));
        // update addedCourses state accordingly
        const addedCoursesCopy = { ...addedCourses };
        for (const quarterID in addedCoursesCopy) {
            const yearNumber = quarterID.split("-")[0];
            if (parseInt(yearNumber) === deleteYear) {
                delete addedCoursesCopy[quarterID];
            }
        }
        setAddedCourses(addedCoursesCopy)
    }

    function clearAllSchedules() {
        setAddedCourses({});
    }

    function addSchedule() {
        currentYearRef.current += 1
        setScheduleYears([...scheduleYears, currentYearRef.current])
    }

    useEffect(() => {
        // Parse prerequisites whenever addedCourses state changes
        if (!enforcingPrerequisites) return;

        const controller = new AbortController();

        async function checkPrerequisites(orderedCourses: string[][]) {
            // console.log('ordered courses: ', orderedCourses);
            const options = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    courseMatrix: orderedCourses
                }),
                signal: controller.signal
            }
            const promise = await fetch(`${SERVER}/validate-courses`, options);
            const data = await promise.json();
            console.log(data);

            const invalidCourses = data['missing_prereqs']
            const invalidCourseIDs: Set<string> = new Set();
            for (const course of invalidCourses) {
                const id = orderedCourses[course['q_loc']][course['c_loc']]
                invalidCourseIDs.add(id);
            }
            setInvalidCourses(invalidCourseIDs);
        }

        const orderedCourses: string[][] = [];
        for (let currentQuarter of Object.keys(addedCourses).sort()) {
            const courseList = [];
            for (let element of addedCourses[currentQuarter]) {
                courseList.push(element.id);
            }
            orderedCourses.push(courseList);
        }

        setTimeout(() => {
            checkPrerequisites(orderedCourses);
        }, 1000);

        return () => {
            controller.abort();
        }

    }, [addedCourses, enforcingPrerequisites])

    function handleDragEvent(dragEvent: DragEndEvent) {
        // console.log(dragEvent)
        const newAddedCourses: addedCourseType = { ...addedCourses };
        let newBaggedCourses: courseInformation[] = [...baggedCourses]
        if (dragEvent.over) {
            // Scenario 1: User drags course from table back into course bag 
            if (dragEvent.over.id === 'course-bag') {
                for (const courseList of Object.values(newAddedCourses)) {
                    for (const [index, currentCourse] of courseList.entries()) {
                        if (currentCourse.id === dragEvent.active.id) {
                            courseList.splice(index, 1); // remove the course from the addedCourses (courses in schedule planner)
                            newBaggedCourses.push(currentCourse);
                            break;
                        }
                    }
                }
            } else {
                // Scenario 2: User drags course from course bag into table for the first time
                let courseToAdd: any;
                // Search through the courses in the course bag to find the JSX DraggableCourse element that we want to 
                // update in the state variable 

                courseToAdd = baggedCourses.find((course: courseInformation) => {
                    return course.id === dragEvent.active.id
                });

                // if the draggable course is not in the course bag, then search through the courses in the schedule table

                // Scenario 3: User transfers course from one column in the table to another column in the table
                if (courseToAdd == undefined) { // courseToAdd == undefined means it wasn't in the course bag
                    for (const courseList of Object.values(addedCourses)) {
                        if (courseList.length === 0) continue;
                        for (const [index, currentCourse] of courseList.entries()) {
                            if (currentCourse.id === dragEvent.active.id) {
                                courseToAdd = currentCourse;
                                courseList.splice(index, 1);
                                break;
                            }
                        }
                    }
                }
                // remove the course we are adding/transferring in the table from the bagged courses list
                newBaggedCourses = newBaggedCourses.filter((course: courseInformation) => course !== courseToAdd);
                if (dragEvent.over.id in newAddedCourses)
                    newAddedCourses[dragEvent.over.id].push(courseToAdd);
                else
                    newAddedCourses[dragEvent.over.id] = [courseToAdd];

                // console.log('new courses: ')
                // console.log(newAddedCourses);
            }
        }

        setAddedCourses(newAddedCourses);
        setBaggedCourses(newBaggedCourses);
    }

    function toggleSwitch() {
        const newState = !enforcingPrerequisites;
        setEnforcingPrerequisites(newState);
        if (!newState) {
            console.log('removing invalid courses');
            setInvalidCourses(new Set());
        }
    }

    return (
        <ChakraProvider>

            <div className="root">
                <div className="header">
                    <div className="title">
                        <h1>Course Eater</h1>
                    </div>

                    <div className="sign-in">
                        {/* Sign-in */}
                    </div>
                </div>

                <div className="body">
                    <DndContext onDragEnd={handleDragEvent}>
                        <div className="planning-area">
                            <div className="searchArea">

                                <Button className='settingButton' onClick={() => addSchedule()}> Add Year </Button>

                                <SavePopOver addedCourses={addedCourses} />
                                <LoadPopOver addedCourses={addedCourses} setAddedCourses={setAddedCourses} />

                                <Button className='settingButton' onClick={() => clearAllSchedules()}> Clear </Button>

                                <div className="prereqs">
                                    <Switch id='switch' size={"md"} isChecked={enforcingPrerequisites}
                                        onChange={toggleSwitch} />
                                    {" "}{" "}Check Prerequisites
                                </div>

                            </div>

                            <div className="scheduleArea">

                                {
                                    scheduleYears.map((year: number) => {
                                        return <SchedulePlanner startYear={year} key={year}
                                            onDelete={handleDeleteTable} addedCourses={addedCourses}
                                            invalidCourses={invalidCourses} setAddedCourses={setAddedCourses} setBaggedCourses={setBaggedCourses} />
                                    })
                                }
                            </div>
                        </div>
                        <div className="course-selection">
                            <div className="major-selection">
                                <SearchBar departments={departmentList} setBaggedCourses={setBaggedCourses} />
                                <CourseBagDroppable id="course-bag">
                                    {baggedCourses.map((course: courseInformation) => {
                                        return <DraggableCourse key={course.id} id={course.id} invalidCourses={invalidCourses}
                                            addedCourses={addedCourses} setAddedCourses={setAddedCourses} setBaggedCourses={setBaggedCourses}>
                                            {course.children} {""}
                                        </DraggableCourse>
                                    })}
                                </CourseBagDroppable>
                            </div>
                        </div>
                    </DndContext>
                </div>
            </div>
        </ChakraProvider>
    );
}


export default App;