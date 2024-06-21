import styles from "./GeneralCourseAlert.module.css";
import { useState, useRef } from 'react';


export default function GeneralCourseAlert({setVisible}:any, progress : {[key:string]: number}) {
    

    // let alertOptions = options.map((option : any) => {
    //     return <div key={option} className={styles.alertOption}>{option}</div>
    // });    

    console.log(progress)
    console.log(progress["Ia"])
    // let Ia = progress["Ia"] / 2;
    // let Ib = progress["Ib"] / 1;
    // let II = progress["II"] / 3;
    // let III = progress["III"] / 3;
    // let IV = progress["IV"] / 3;
    // let Va = progress["Va"] / 1;
    // let Vb = progress["Vb"] / 2;
    // let VI = progress["VI"] / 2;
    // let VII = progress["VII"] / 1;
    // let VIII = progress["VIII"] / 1;

    
    
    let alert = (
        <div id="alert" className={`${styles.container}`}>
            <div className={styles.alertHeader}>
                <p className={styles.alertTitle}>Alert</p>
                <p onClick={ () => handleClose()} className={styles.alertClose}>X</p>
            </div>
            
            {/* <div className={styles.alertBody}>
                <p>lorem ipsum sit dolar amet shal gal triol folyh giokl fgsrt jsfd tythd dsgdf sfs asdf asfd asdf  rtgf vlkn  glfj;dfkg  ;kfj </p>
            </div> */}

            {/* <div className={styles.alertBody}>
                    <div className={styles.category}>
                        <div className={styles.progressBar} >
                            {/* {(Ia / 1) > 0 ? `${Ia}%` : "No Progress Yet"} }
                        </div> 
                        <div className={styles.categoryName}>Ia</div>
                    </div> */}

                    {/* <div className={styles.category}>
                        <div className={styles.progressBar} style={ (Ib / 1) > 0 ? {width: `${Ib}%`} : {border: "none"}}>
                            {/* {(Ib / 1) > 0 ? `${Ib}%` : "No Progress Yet"} }
                        </div> 
                        <div className={styles.categoryName}>Ib</div> 
                     </div> */}
            {/* </div> */}

            {/* <div className={styles.alertOptions}>
                {alertOptions}
            </div> */}
            
        </div>
    );

    function handleClose() {
        let element = document.querySelector("#alert");
        setVisible(false);
        element?.classList.add(`${styles.hidden}`);
    }
    
    
    return alert;
    
}



