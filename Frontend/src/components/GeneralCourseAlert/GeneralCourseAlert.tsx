import styles from "./GeneralCourseAlert.module.css";
//import { useState, useRef } from 'react';


export default function GeneralCourseAlert({setVisible, options} : any) {
    

    let alertOptions = options.map((option : any) => {
        return <div key={option} className={styles.alertOption}>{option}</div>
    });    

    
    let alert = (
        <div id="alert" className={`${styles.container}`}>
            <div className={styles.alertHeader}>
                <p className={styles.alertTitle}>Alert</p>
                <p onClick={ () => handleClose()} className={styles.alertClose}>X</p>
            </div>
            
            <div className={styles.alertBody}>
                <p>lorem ipsum sit dolar amet shal gal triol folyh giokl fgsrt jsfd tythd dsgdf sfs asdf asfd asdf  rtgf vlkn  glfj;dfkg  ;kfj </p>
            </div>

            <div className={styles.alertOptions}>
                {alertOptions}
            </div>
            
        </div>
    );

    function handleClose() {
        let element = document.querySelector("#alert");
        setVisible(false);
        element?.classList.add(`${styles.hidden}`);
    }
    
    
    return alert;
    
}



