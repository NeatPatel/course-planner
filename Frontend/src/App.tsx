import { useState, useEffect, useRef } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar.tsx";
import SchedulePlanner from "./components/SchedulePlanner/SchedulePlanner.tsx";
import DraggableCourse from "./components/DraggableCourse/DraggableCourse.tsx";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import CourseBagDroppable from "./CourseBagDroppable.tsx";
import GeneralCourseAlert from "./components/GeneralCourseAlert/GeneralCourseAlert.tsx";
import raw from "./department-list.txt";

export type addedCourseType = {
    [key: string]: any
}

export type geProgressType = {
    [key:string] : number
}
let checked_courses : [string]= [""];
const SERVER = 'http://localhost:8000';

function App() {
    const currentYearRef = useRef<number>(0);
    const [alertState, setAlertState] = useState<boolean>(false);
    const [addedCourses, setAddedCourses] = useState<addedCourseType>({});
    const [scheduleYears, setScheduleYears] = useState<number[]>([0]);
    const [departmentList, setDepartmentList] = useState<string[]>([]);
    const [invalidCourses, setInvalidCourses] = useState<Set<string>>();
    const [GE_PROGRESS, setGEProgress] = useState<geProgressType>({
            "Ia": 0, 
            "Ib": 0,
            "II": 0,
            "III": 0,
            "IV": 0,
            "Va": 0,
            "Vb": 0,
            "VI": 0,
            "VII": 0,
            "VIII": 0
    });


     

    

    const [baggedCourses, setBaggedCourses] = useState<any>([
        { id: 'MATH1A', children: 'MATH 1A' },
        { id: 'MATH1B', children: 'MATH 1B' },
        { id: 'MATH2A', children: 'MATH 2A' },
        { id: 'MATH2B', children: 'MATH 2B' },
        { id: 'I&CSCI31', children: 'I&CSCI 31' },
        { id: 'I&CSCI32', children: 'I&CSCI 32' },
        { id: 'I&CSCI33', children: 'I&CSCI 33' },
    ]);

    useEffect(() => {
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
        console.log(addedCourses);
        // update addedCourses state accordingly
        const addedCoursesCopy = { ...addedCourses };
        for (const quarterID in addedCoursesCopy) {
            const yearNumber = quarterID.split("-")[0];
            if (parseInt(yearNumber) === deleteYear) {
                // for (let i in addedCoursesCopy[quarterID]) {
                //     // checked_courses = checked_courses.filter(course => course != addedCoursesCopy[quarterID][i])
                // }
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
        console.log('running updater: ')
        const controller = new AbortController();

        async function checkPrerequisites(orderedCourses: string[][]) {
            console.log('ordered courses: ', orderedCourses);
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
            const promise = await fetch(`http://localhost:8000/validate-courses`, options);
            const data = await promise.json();
            console.log(data);

            const invalidCourses = data['invalid_courses']
            const invalidCourseIDs: Set<string> = new Set();
            for (const course of invalidCourses) {
                const id = orderedCourses[course['q_loc']][course['c_loc']]
                invalidCourseIDs.add(id);
            }
            setInvalidCourses(invalidCourseIDs);
            console.log(invalidCourseIDs);
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
        }, 1000)


        // updateGEProgress();
        return () => {
            controller.abort();
        }
        

        

    }, [addedCourses])

    function handleDragEvent(dragEvent: DragEndEvent) {
        console.log(dragEvent)
        const newAddedCourses: addedCourseType = { ...addedCourses };
        let newBaggedCourses: any = [...baggedCourses]
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

                courseToAdd = baggedCourses.find((course: any) => {
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
                newBaggedCourses = newBaggedCourses.filter((course: any) => course !== courseToAdd);
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

    async function updateGEProgress () {
        let completed_courses : any = [];
        for (let num in addedCourses) {
            for (let course in addedCourses[num]) {
                completed_courses.push(addedCourses[num][course].id.replace(/\s+/g, '').replace("&", "%26"));
                console.log(completed_courses)
            }
        }

        async function getGEforCourse(course:string) {

            const req = await fetch(`http://localhost:8000/course?courseId=${course}`)
            let data = await req.json()
            let ge_string = data.data.course.ge_text;
            ge_string = ge_string.split(" ")
            let temp_progress = GE_PROGRESS;
            for (let i in ge_string) {
                let ge = ge_string[i].replace(/[()]/g, '');
                
                if (ge in temp_progress) {
                    temp_progress[ge] += 1;
                }

                
            }
            await setGEProgress(temp_progress)
            console.log(GE_PROGRESS)
        }
        console.log("COMPLETED", completed_courses)
        for (let course in completed_courses) {
            if (!(course in addedCourses)) {
                if (!(course in checked_courses)) {
                    console.log (course, course in checked_courses)
                    await getGEforCourse(completed_courses[course])
                    checked_courses.push(completed_courses[course]);
                }
                
            }
        }
        
    }

    async function showAlert() {
        await updateGEProgress();
        await setAlertState(true);
        // console.log("ALERT", GE_PROGRESS)
    }
    console.log(GE_PROGRESS)
    return (

        <div className="root">
            <div className="header">
                <div className="title">
                    Course Eater
                </div>

                <div className="sign-in">
                    Sign-in
                </div>
            </div>

            <div className="body">
                {alertState && <GeneralCourseAlert setVisible={setAlertState} progress={GE_PROGRESS}/>}

                <DndContext onDragEnd={handleDragEvent}>
                    <div className="planning-area">
                        <div className="searchArea">
                            {/* <CourseSearch /> */}
                            <button className="settingButton"
                                onClick={() => {
                                    addSchedule();
                                }}> Add Year</button>

                            <button className="settingButton"
                                onClick={() => {
                                    // addSchedule();
                                }}> Save </button>

                            <button className="settingButton"
                                onClick={() => {
                                    // addSchedule();
                                }}> Load </button>

                            <button className="settingButton"
                                onClick={() => {
                                    clearAllSchedules();
                                }}> Clear </button>



                            <button className="settingButton"
                                onClick={() => {
                                    showAlert();
                                }}
                            >
                                GE Progress
                            </button>

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
                                {baggedCourses.map((course: any) => {
                                    return <DraggableCourse key={course.id} id={course.id} invalidCourses={invalidCourses} setAddedCourses={setAddedCourses} setBaggedCourses={setBaggedCourses}> {course.children} </DraggableCourse>

                                })}
                            </CourseBagDroppable>
                        </div>
                    </div>
                </DndContext>
            </div>
        </div>
    );
}


export default App;