import styles from '@/styles/Payment.module.css'
import HeaderDash from "../../../PaymentComp/Header";
import LeftNavbar from '../../../Dashboard/LeftNavbar';
import Content from '../../../PaymentComp/Content';
const Payment = () => {
    return ( 
        <div>
            <header>
            <HeaderDash/>
            </header>
            <div  className={styles.navbarcontent}>
                <nav>
                <LeftNavbar />
                </nav>
                <content>
                    <Content/>
                </content>
            </div>
        </div>
     );
}
 
export default Payment;