import styles from '@/styles/Dashboard.module.css'
import Image from "next/image";
import { useRouter } from 'next/router';

const HeaderDash = () => {
    const router = useRouter()
    const {id} = router.query
    return ( 
        <div>
            <div>
            <header className={styles.headertext}>
                <div className={styles.logodash}>
                <Image
                  src='/morizon-dash.png'
                  width={264}
                  height={59}
                  alt='logo'
                  required
                />
                 <p className={styles.dashboardtext}>{id}</p>
                </div>
                <div>
                   
                    <input 
                    id={styles.dashboardsearch1}
                    type='search'
                    placeholder='Search Company name / Email'
                    />
                </div>
                <ul className={styles.datetimeadminlist}>
                    <li>
                        <p className={styles.datetime}>Date:</p>
                        <p className={styles.abovedatetime}>March 28, 2022</p>
                    </li>
                    <li>
                        <p className={styles.datetime}>Time:</p>
                        <p className={styles.abovedatetime}>09:22 PM</p>
                    </li>
                    <li>
                        <p className={styles.datetime}>Online time:</p>
                        <p className={styles.abovedatetime}>00:26:08</p>
                    </li>
                    <li className={styles.jimmymorg}>
                        <h2 className={styles.jimmytext}>jimmy Morgan</h2>
                        <p className={styles.datetimeadmin}>Administrator</p>
                    </li>
                    <p className={styles.circlepics}></p>
                </ul>
            </header>

            </div>
            
        </div>
    );
}
export default HeaderDash;