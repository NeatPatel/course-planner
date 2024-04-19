// import { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar.tsx";
import DepartmentSearch from "./components/DepartmentSearch/DepartmentSearch.tsx";




function App() {




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
            <DepartmentSearch />

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
