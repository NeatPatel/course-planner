import styles from './SchedulePlanner.module.css';

interface courseTerms {
    [key: string]: string[]
}

interface props {
    courses?: courseTerms
    startYear: number,
}

const testCourses: courseTerms = {
    'Fall': ['ICS 31', 'STATS 67', 'MATH 3A'],
    'Winter': ['ICS 32', 'ICS 6B', 'MATH 2A'],
    'Spring': ['ICS 33', 'ICS 6D', 'INF 43'],
    'Summer': ['CS 161', 'CS 120A', 'Writing 60']
}

export default function SchedulePlanner({ courses = testCourses, startYear = 2024 }: props) {
    let numRows = 0;
    for (let term in courses) {
        if (courses[term].length > numRows)
            numRows = courses[term].length;
    }
    console.log(numRows);

    let tableData = [];

    for (let currentRow = 0; currentRow < numRows; currentRow++) {
        let newRowData = <tr>
            {
                Object.keys(courses).map(currentTerm => {
                    return <td> {courses[currentTerm][currentRow]} </td>
                })
            }
        </tr>

        tableData.push(newRowData);
    }

    return (
        <>
            <div className={styles.container}>

                <div className={styles.yearLabel}>
                    {startYear} - {startYear + 1}
                </div>

                <table>
                    <thead className={styles.header}>
                        <th className={styles.header}>Fall</th>
                        <th>Winter</th>
                        <th>Spring</th>
                        <th>Summer</th>
                    </thead>

                    <tbody>
                        {
                            tableData

                        }


                    </tbody>


                </table>
            </div>

        </>
    );
}


