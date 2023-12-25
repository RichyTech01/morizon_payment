import Link from 'next/link';
import HomeIcon from '@material-ui/icons/Home';
import PaymentIcon from '@material-ui/icons/Payment';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import ReceiptRoundedIcon from '@material-ui/icons/ReceiptRounded';
import styles from '@/styles/Dashboard.module.css'

const leftNavbar = () => {
  
  return (
    <div className={styles.navbar}>
      <div
        className={styles.imgnav}
        style={{ backgroundImage: `url('/navbar.png')` }}
      >
        <nav>
          <ul className={styles.dashnavlinks}>
                  <li className={styles.navlists}>
                  <Link href='/Dashboard' className={styles.transa}>
        
                    <HomeIcon />
                      Dashboard
                  </Link>

                  </li>
            <li className={styles.navlists}>
              <Link href='/Transaction' className={styles.transa}>
                <PaymentIcon />
                Transaction
              </Link>
            </li>
            <li className={styles.navlists}>         
              <Link href='/Payment'  className={styles.transa}>
                <ReceiptRoundedIcon/>
                Payment
              </Link>
            </li>
            <li className={styles.navlists}>
              <Link href='/'  className={styles.transa}>
                <ExitToAppRoundedIcon />
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <style jsx>{`
        
          `}</style>
        </div>
     );
}
 
export default leftNavbar;