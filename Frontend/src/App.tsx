import { useState, useRef } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar.tsx";
import CourseSearch from "./components/CourseSearch/CourseSearch.tsx";
import SchedulePlanner from "./components/SchedulePlanner/SchedulePlanner.tsx";
import DraggableCourse from "./components/DraggableCourse/DraggableCourse.tsx";
import { DndContext } from "@dnd-kit/core";

function App() {
  const currentYearRef = useRef<number>(2024);
  const [schedules, setSchedules] = useState<JSX.Element[]>([<SchedulePlanner onDelete={handleDeleteTable} startYear={currentYearRef.current} key={currentYearRef.current} />]);
  const [parent, setParent] = useState<any>(null);

  function handleDeleteTable(year: number) {
    setSchedules(prevSchedules => [...prevSchedules].filter(schedule => schedule.props.startYear !== year))
  }

  function addSchedule() {
    currentYearRef.current += 1
    setSchedules([...schedules, <SchedulePlanner parent={parent} onDelete={handleDeleteTable} startYear={currentYearRef.current} key={currentYearRef.current} />])
    // let dates = document.querySelectorAll(".date");


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
        <DndContext onDragEnd={({ over }) => {
          console.log(over);
          setParent(over ? over.id : null)

        }}>
          <div className="planning-area">
            <div className="searchArea">
              <CourseSearch />

            </div>

            <div className="scheduleArea">

              <button className="label"
                onClick={() => addSchedule()}>Add Year</button>

              {
                schedules
              }


            </div>

          </div>

          <div className="course-selection">
            <div className="major-selection">
              <SearchBar />
              {!parent ? <DraggableCourse id={'ICS 6D'}> ICS 6D </DraggableCourse> : null}

              {/* Uncomment above to play with the draggable course component-- still in progress */}



            </div>

            <div className="completed-courses">


            </div>


          </div>
        </DndContext>
      </div>

    </div>);
}



export default App;