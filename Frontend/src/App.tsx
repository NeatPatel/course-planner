import { useState, useRef } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar.tsx";
import CourseSearch from "./components/CourseSearch/CourseSearch.tsx";
import SchedulePlanner from "./components/SchedulePlanner/SchedulePlanner.tsx";
import DraggableCourse from "./components/DraggableCourse/DraggableCourse.tsx";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import CourseBagDroppable from "./CourseBagDroppable.tsx";

export type addedCourseType = {
  [key: string]: JSX.Element[]
}

function App() {
  const currentYearRef = useRef<number>(2024);

  const [baggedCourses, setBaggedCourses] = useState<JSX.Element[]>([
    <DraggableCourse id={'ICS 6D'} key={'ICS 6D'}> ICS 6D </DraggableCourse>,
    <DraggableCourse id={'ICS 6B'} key={'ICS 6B'}> ICS 6B </DraggableCourse>,
    <DraggableCourse id={'MATH 3A'} key={'MATH 3A'}> MATH 3A </DraggableCourse>,
    <DraggableCourse id={'ICS 33'} key={'ICS 33'}> ICS 33 </DraggableCourse>,
    <DraggableCourse id={'ICS 32A'} key={'ICS 32A'}> ICS 32A </DraggableCourse>
  ]);


  const [addedCourses, setAddedCourses] = useState<addedCourseType>({});
  const [scheduleYears, setScheduleYears] = useState<number[]>([2024]);

  function handleDeleteTable(deleteYear: number) {
    setScheduleYears((prevScheduleYears: any) => [...prevScheduleYears].filter(currentYear => currentYear !== deleteYear))
  }

  function addSchedule() {
    currentYearRef.current += 1
    setScheduleYears([...scheduleYears, currentYearRef.current])
  }

  function handleDragEvent(dragEvent: DragEndEvent) {
    console.log(dragEvent)
    const newAddedCourses: addedCourseType = { ...addedCourses };
    let newBaggedCourses: JSX.Element[] = [...baggedCourses];
    if (dragEvent.over) {
      // Scenario 1: User drags course from table back into course bag 
      if (dragEvent.over.id === 'course-bag') {
        for (const courseList of Object.values(newAddedCourses)) {
          for (const [index, currentCourse] of courseList.entries()) {
            if (currentCourse.props.id === dragEvent.active.id) {
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

        courseToAdd = baggedCourses.find((course: JSX.Element) => {
          return course.props.id === dragEvent.active.id
        });

        // if the draggable course is not in the course bag, then search through the courses in the schedule table

        // Scenario 3: User transfers course from one column in the table to another column in the table
        if (courseToAdd == undefined) { // courseToAdd == undefined means it wasn't in the course bag
          for (const courseList of Object.values(addedCourses)) {
            if (courseList.length === 0) continue;
            for (const [index, currentCourse] of courseList.entries()) {
              if (currentCourse.props.id === dragEvent.active.id) {
                courseToAdd = currentCourse;
                courseList.splice(index, 1);
                break;
              }
            }
          }
        }
        // remove the course we are adding/transferring in the table from the bagged courses list
        newBaggedCourses = newBaggedCourses.filter((course: JSX.Element) => course !== courseToAdd);
        if (dragEvent.over.id in newAddedCourses)
          newAddedCourses[dragEvent.over.id].push(courseToAdd);
        else
          newAddedCourses[dragEvent.over.id] = [courseToAdd];

        console.log('new courses: ')
        console.log(newAddedCourses);
      }
    }

    setAddedCourses(newAddedCourses);
    setBaggedCourses(newBaggedCourses);
  }

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
        <DndContext onDragEnd={handleDragEvent}>
          <div className="planning-area">
            <div className="searchArea">
              <CourseSearch />

            </div>

            <div className="scheduleArea">

              <button className="label"
                onClick={() => {
                  addSchedule();
                }}>Add Year</button>

              {
                scheduleYears.map((year: number) => {
                  return <SchedulePlanner startYear={year} key={year}
                    onDelete={handleDeleteTable} addedCourses={addedCourses} />
                })
              }
            </div>

          </div>

          <div className="course-selection">
            <div className="major-selection">
              <SearchBar />
              <CourseBagDroppable id="course-bag">
                {baggedCourses}
              </CourseBagDroppable>
            </div>

            <div className="completed-courses">


            </div>


          </div>
        </DndContext>
      </div>

    </div>);
}



export default App;