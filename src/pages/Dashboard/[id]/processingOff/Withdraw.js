import Header from '../../../../../idComponents/Header';
import styles from '@/styles/Id.module.css';
import Navbar from '../../../../../idComponents/Navbar';
import WithdrawContent from '../../../../../processingOffComponent/WithdrawContent'
const Withdraw = () => {
    return ( 
        <div>
              <div className={styles.Dashboardparent}>
        <header className={styles.headercontentp}>
            <Header/>
        </header>
    <div className={styles.navbarcontent}>
        <nav className={styles.navcontainer}>
            <Navbar/>
        </nav>
        <content className={styles.contentparent}>
            <WithdrawContent/>
    </content>
</div>
</div>
        </div>
     );
}
 
export default Withdraw;