import styles from '@/styles/Payment.module.css'
import HeaderDash from "../../../PaymentComp/Header";
import LeftNavbar from '../../../Dashboard/LeftNavbar';
import Content from '../../../PaymentComp/Content';
import {motion} from 'framer-motion'

const Payment = () => {
   
 
    return ( 
        <div>
         
        <div className={styles.Dashboardparent}>
            <header className={styles.headercontentp}>
            <HeaderDash/>
            </header>
            <div className={styles.navbarcontent}>
                <nav className={styles.navcontainer}>
                <LeftNavbar />
                </nav>
                <motion.div 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
               className={styles.contentparent}
           >
            <Content/>
           </motion.div>
            </div>
        </div>
        </div>

     );
}
 
export default Payment;