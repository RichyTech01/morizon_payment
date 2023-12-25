import styles from '@/styles/Payment.module.css'
import HeaderDash from "../../components/PaymentComp/Header";
import LeftNavbar from '../../components/Dashboard/LeftNavbar';
import FinicialSum from '../../components/PaymentComp/FinicialSum';
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