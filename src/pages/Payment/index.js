import styles from '@/styles/Payment.module.css'
import HeaderDash from "../../../PaymentComp/Header";
import LeftNavbar from '../../../Dashboard/LeftNavbar';
import Content from '../../../PaymentComp/Content';
const Payment = () => {
    return ( 
        <div className={styles.Dashboardparent}>
            <header className={styles.headercontentp}>
            <HeaderDash/>
            </header>
            <div className={styles.navbarcontent}>
                <nav className={styles.navcontainer}>
                <LeftNavbar />
                </nav>
                <content className={styles.contentparent}>
                    <Content/>
                </content>
            </div>
        </div>
     );
}
 
export default Payment;