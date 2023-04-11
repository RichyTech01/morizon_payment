import styles from '@/styles/Id.module.css';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';const Box3 = () => {
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
     <div className={styles.graphicalcolor}>
    
     </div>

     <div className={styles.EST}>
        <p>Estimate Total Balance</p>
        <p>£ 60654,00</p>
     </div>
        </div>
     );
}
 
export default Box3;