import styles from '@/styles/Id.module.css';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import { useState } from 'react';
import PageLoading from '../../Dashboard/PageLoading';
const Box3 = () => {
   const [loading, setLoading] = useState(true);

   setTimeout(() => {
      setLoading(false);
    }, 1000);

   return ( 
        <div className={styles.boxparentcnt}>
            <div className={styles.disputeicontext}>
            <AccountBalanceWalletIcon style={{
            fontSize: '2em',
            color:  '#0D1CB3'
            }} />
            <div>
            <p className={styles.disputetext}>Disputes Progress</p></div>
     </div>
     <div >
      {loading ? (
         <PageLoading/>
      ) : (
      <div className={styles.thirdbox}>
     <div className={styles.graphicalcolor}>
    
     </div>

     <div className={styles.EST}>
        <p>Estimate Total Balance</p>
        <p>£ 60654,00</p>
     </div>
        </div>
        )}
        </div>
        </div>
     );
}
 
export default Box3;