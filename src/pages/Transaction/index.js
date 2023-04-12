import HeaderDash from "../../../TransactionCom/Header";
import LeftNavbar from "../../../Dashboard/LeftNavbar";
import styles from '@/styles/Transaction.module.css'
import Content from "../../../TransactionCom/Content";
const Transaction = () => {
    return ( 
        <div  className={styles.Dashboardparent}>
        <div className={styles.headercontentp}>
           <HeaderDash/>
        </div>

    <div className={styles.navbarcontent}>
       <div className={styles.navcontainer}>
        <LeftNavbar/>  
      </div>

      <div className={styles.contentparent}>
       <Content/>
      </div>
  </div>
</div>
     );
}
 
export default Transaction;