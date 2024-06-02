import styles from "./Quarter.module.css"

export default function Quarter({name, courses} : any) {

    return (
        <div className={styles.table}>
            <div>
                {name}
            </div>
            <div className={styles.courses}>
                {courses}
            </div>
        </div>
    );
}