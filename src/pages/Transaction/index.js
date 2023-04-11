import HeaderDash from "../../../TransactionCom/Header";
import LeftNavbar from "../../../Dashboard/LeftNavbar";
import styles from '@/styles/Transaction.module.css'
import Content from "../../../TransactionCom/Content";
const Transaction = () => {
    return ( 
        <div>
            <header>
            <HeaderDash/>
            </header>
            <div className={styles.navbarcontent}>
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
 
export default Transaction;