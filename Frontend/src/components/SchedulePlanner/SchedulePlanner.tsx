import styles from './SchedulePlanner.module.css';

interface props {
    startYear: number,
}

export default function SchedulePlanner({ startYear = 2024 }: props) {


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
                    </thead>

                    <tbody>
                        <tr>
                            <td>ICS 31</td>
                            <td>ICS 32</td>
                            <td>ICS 33</td>
                        </tr>
                        <tr>
                            <td>ICS 31</td>
                            <td>ICS 32</td>
                            <td>ICS 33</td>
                        </tr>

                    </tbody>


                </table>
            </div>

        </>
    );
}


