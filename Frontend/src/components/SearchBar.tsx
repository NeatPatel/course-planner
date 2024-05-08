import React, { useEffect } from 'react';

function SearchBar() {
    function showAllMajors () {
        let options = document.querySelector("#majors");
        // Gets a list of all child elements
        // aka each induvidual major
        let majors = options?.childNodes
        let search = document.querySelector(".majorSearch");
        

        if (search?.value.length == 0) {
            options?.classList.add("majorsOpened");
        }

        console.log (search?.value.length)
    }

     // Function to handle their display
     function displayMajors() {
        let search = document.querySelector(".majorSearch");
        let options = document.querySelector("#majors");    
        // Checks if there is any input in form
        if (search?.value != "") {
            // Adds and removes certain CSS classes to display the majors
            options?.classList.remove("majorsClosed");
            options?.classList.add("majorsOpened");

        }
        else if (search?.value == "") {
            // Adds and removes certain CSS classes to hide the majors
            options?.classList.remove("majorsOpened");
            options?.classList.add("majorsClosed");
        }

        // Gets a list of all child elements
        // aka each induvidual major
        let majors = options?.childNodes

        // Loop that filters the options depending
        // On  the user searchbar input
        for (let i = 0; i < majors?.length; i++) {
            // If search bar matches major
            if (majors[i]?.innerHTML.toLowerCase().includes(search?.value.toLowerCase())) {
                majors[i]?.classList.remove("hiddenMajor");
                majors[i]?.classList.add("visibleMajor");
            }
            // If search bar doesn't
            else {
                majors[i]?.classList.remove("visibleMajor");
                majors[i]?.classList.add("hiddenMajor")
            }
        }

    }
    // useEffect(() => {
    //     // Gets the search bar and the container cintaining all the majors
        // let search = document.querySelector(".majorSearch");
        // let options = document.querySelector("#majors");      

    //     // Adds an event listener and listens for "input" (change in an input)
    //     window.addEventListener("input", displayMajors);

    // }, []);


    return (
        <div className="majorSearchContainer">
            <input onClick={showAllMajors} onChange={displayMajors} className="majorSearch" type="text" list="majors" placeholder="Import By Major" />
            <div id="majors" className="majorsClosed">
                {/* Dummy vals */}
                <div className="major">Computer Science</div>
                <div className="major">Computer Engineering</div>
                <div className="major">Computer Science and Engineering</div>
                <div className="major">Biology</div>
                <div className="major">Physics</div>
                <div className="major">Chemistry</div>
                <div className="major">Eelectrical Engineering</div>
                <div className="major">Art</div>
            </div>
        </div>
    );
}

export default SearchBar;