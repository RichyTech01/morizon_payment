import styles from '@/styles/Payment.module.css'
import HeaderDash from "../../../PaymentComp/Header";
import LeftNavbar from '../../../Dashboard/LeftNavbar';
import FinicialSum from '../../../PaymentComp/FinicialSum';
const Payment = () => {
   

    return (
        <div>
         
        <div className={styles.Dashboardparent}>
            <header className={styles.headercontentp}>
            <HeaderDash/>
            </header>
            <div  className={styles.navbarcontent}>
                <nav>
                <LeftNavbar />
                </nav>
                <content>
                    <FinicialSum />
                </content>
            </div>
        </div>
        </div>
     );
}
 
export default Payment;