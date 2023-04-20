import Header from '../../../../../idComponents/Header';
import styles from '@/styles/Id.module.css';
import Navbar from '../../../../../idComponents/Navbar';
import Content from '../../../../../processingOffComponent/Content';

const ProcessingOff = () => {
  
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
     );
}
 
export default ProcessingOff;