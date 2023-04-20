import HeaderDash from "../../../TransactionCom/Header";
import LeftNavbar from "../../../Dashboard/LeftNavbar";
import styles from '@/styles/Transaction.module.css'
import Content from "../../../TransactionCom/Content";
import {motion} from 'framer-motion'
const Transaction = () => {
 

    return ( 
      <div>
       
        <div  className={styles.Dashboardparent}>
        <div className={styles.headercontentp}>
           <HeaderDash/>
        </div>

    <div className={styles.navbarcontent}>
       <div className={styles.navcontainer}>
        <LeftNavbar/>  
      </div>
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
 
export default Transaction;