import { useState, useRef } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar.tsx";
import CourseSearch from "./components/CourseSearch/CourseSearch.tsx";
import SchedulePlanner from "./components/SchedulePlanner/SchedulePlanner.tsx";
import DraggableCourse from "./components/DraggableCourse/DraggableCourse.tsx";

function App() {
  const currentYearRef = useRef<number>(2024);
  const [schedules, setSchedules] = useState<JSX.Element[]>([<SchedulePlanner onDelete={handleDeleteTable} startYear={currentYearRef.current} />]);

  function handleDeleteTable(year: number) {
    console.log(schedules);
    console.log(year);
    // setSchedules([...schedules].filter(schedule => schedule.startYear !== year))
  }

  function addSchedule() {
    currentYearRef.current += 1
    setSchedules([...schedules, <SchedulePlanner onDelete={handleDeleteTable} startYear={currentYearRef.current} />])
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


          </div>

          <div className="completed-courses">

          </div>


        </div>

      </div>

    </div>);
}



export default App;