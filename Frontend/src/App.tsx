import { useState, useRef } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar.tsx";
import CourseSearch from "./components/CourseSearch/CourseSearch.tsx";
import SchedulePlanner from "./components/SchedulePlanner/SchedulePlanner.tsx";
import DraggableCourse from "./components/DraggableCourse/DraggableCourse.tsx";
import GeneralCourseAlert from "./components/GeneralCourseAlert/GeneralCourseAlert.tsx";

function App() {
  const currentYearRef = useRef<number>(2024);
  let containerRef = useRef<any>(null);
  let [alertState, setAlertState] = useState(false);
  // let containerRef2 = useRef<any>(null);
  // let containerRef3 = useRef<any>(null);
  const [schedules, setSchedules] = useState<JSX.Element[]>([<SchedulePlanner onDelete={handleDeleteTable} startYear={currentYearRef.current} key={currentYearRef.current} containerRef={containerRef} />]);

  function handleDeleteTable(year: number) {
    setSchedules(prevSchedules => [...prevSchedules].filter(schedule => schedule.props.startYear !== year))
  }



  function addSchedule() {
    currentYearRef.current += 1
    setSchedules([...schedules, <SchedulePlanner onDelete={handleDeleteTable} startYear={currentYearRef.current} key={currentYearRef.current} containerRef={containerRef} />])
    let dates = document.querySelectorAll(".date");
    

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
        <GeneralCourseAlert setVisible={setAlertState} options={["GE 3", "GE 8"]}/> 
        <div className="planning-area">
        


          <div className="searchArea">
            <CourseSearch />

          </div>
          
          <div className="scheduleArea">

            <button className="addYearBtn"
              onClick={() => addSchedule()}>Add Year</button>

            {
              schedules
            }


          </div>

        </div>

        <div className="course-selection">
          <div className="major-selection">
            <SearchBar />
            <DraggableCourse courseName={'ICS 6B'} containerRef={containerRef} />
            {/* <DraggableCourse courseName={'ICS 6D'} containerRef={containerRef2} />
            <DraggableCourse courseName={'ICS 32a'} containerRef={containerRef3} /> */}
            {/* Uncomment above to play with the draggable course component-- still in progress */}



          </div>

          <div className="completed-courses">


          </div>


        </div>

      </div>

    </div>);
}



export default App;