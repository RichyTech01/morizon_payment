import Header from '../../../../idComponents/Header';
import Navbar from '../../../../idComponents/Navbar';
import Content from '../../../../idComponents/Content';
import styles from '@/styles/Id.module.css';

const HeaderDashdetail = () => {
   
    return (
        <div className={styles.Dashboardparent}>
                <header className={styles.headercontentp}>
                    <Header/>
                </header>
            <div className={styles.navbarcontent}>
                <nav className={styles.navcontainer}>
                    <Navbar/>
                </nav>
                <content className={styles.contentparent}>
                    <Content />
            </content>
     </div>
        </div>
    )
 }
export default HeaderDashdetail;