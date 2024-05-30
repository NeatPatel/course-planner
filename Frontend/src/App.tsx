import { useState, useRef } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar.tsx";
import CourseSearch from "./components/CourseSearch/CourseSearch.tsx";
import SchedulePlanner from "./components/SchedulePlanner/SchedulePlanner.tsx";
import DraggableCourse from "./components/DraggableCourse/DraggableCourse.tsx";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import CourseBagDroppable from "./CourseBagDroppable.tsx";

type addedCourseType = {
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
    setAddedCourses((prevCourses: addedCourseType) => {
      const newCourses = { ...prevCourses };
      if (dragEvent.over) {
        if (dragEvent.over.id === 'course-bag') {
          let courseToAdd;
          let keyToRemove;
          for (const [key, courses] of Object.entries(addedCourses)) {
            for (let course of courses) {
              if (course.props.id == dragEvent.active.id) {
                courseToAdd = course;
                keyToRemove = key;
                break;
              }
            }
          }
          if (courseToAdd)
            setBaggedCourses([...baggedCourses, courseToAdd])

          if (keyToRemove)
            delete newCourses[keyToRemove]

          return newCourses;
        }
        let courseToAdd: any;
        // first search through the courses in the course bag to find the 
        // DraggableCourse element that we want to update in the state variable 

        courseToAdd = baggedCourses.find((course: JSX.Element) => {
          return course.props.id === dragEvent.active.id
        });
        // if the draggable course is not in the course bag, then search through the 
        // added courses in the schedule table
        if (courseToAdd == undefined) {
          for (let currentDroppableSection of Object.keys(addedCourses)) {
            for (let i = 0; i < addedCourses[currentDroppableSection].length; i++) {
              if (addedCourses[currentDroppableSection][i].props.id === dragEvent.active.id) {
                courseToAdd = addedCourses[currentDroppableSection];
                delete newCourses[currentDroppableSection];
                break;
              }
            }
          }
        }

        setBaggedCourses((prevBaggedCourses: JSX.Element[]) => {
          const newBaggedCourses = prevBaggedCourses.filter((course: JSX.Element) => course !== courseToAdd);
          return newBaggedCourses;
        })
        if (dragEvent.over.id in newCourses)
          newCourses[dragEvent.over.id].push(courseToAdd);
        else
          newCourses[dragEvent.over.id] = [courseToAdd];

        console.log('new courses: ')
        console.log(newCourses);

        return newCourses
      } else {
        return prevCourses
      }
    })
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