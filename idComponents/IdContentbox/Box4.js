import styles from '@/styles/Id.module.css';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MonetizationOnRoundedIcon from '@mui/icons-material/MonetizationOnRounded';
import { useState } from 'react';
import PageLoading from '../../Dashboard/PageLoading';
const Box4 = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
     setLoading(false);
   }, 1000);
  return ( 
    <div className={styles.box4parentcont}>
      <div className={styles.boxparentcnt}>
        <div className={styles.feescheduleicon}>
          <AccountBalanceWalletIcon 
            style={{
              fontSize: '1.7em',
              color: ' rgb(44, 44, 255)',
              marginLeft: '-2px'
            }}
          />
          <div>
            <p className={styles.disputetext}>Fee Schedule</p>
          </div>
        </div> 
        <hr style={{width: '49.3em'}} />
        <div>
          {loading ? (
        <PageLoading/>
       ) : (
        <div className={styles.fourthboxanimate}>
        <article className={styles.personalcontainer}>
          <div className={styles.monetizatext}>
            <MonetizationOnRoundedIcon 
              style={{
                fontSize: '1.8em',
                color: 'black',
                marginLeft: '-6px'
              }}
            />
            <p className={styles.personalacco}>Personal Account</p>
          </div>
          <div className={styles.secparent}>
          <div className={styles.feeandper}>
            <p className={styles.fee}>Fee</p>
            <p className={styles.fee}>Per month</p>
          </div>
          <div className={styles.personalaccfreqcont}>
            <div className={styles.personalaccfreq}>
              <p className={styles.minus}>-</p>
              <p>£1.98</p>
              <p className={styles.plus}>+</p>
            </div>
          </div>
          </div>

          <div className={styles.parentbox}>
            <div className={styles.firstbox}>
              <div className={styles.goldacc}>
                <MonetizationOnRoundedIcon 
                  style={{
                    fontSize: '2.7em',
                    color: 'gold'
                  }}
                />
                <p className={styles.goldacctext}>Gold Account</p>
              </div>
              <div className={styles.secfeeandper}>
              <p className={styles.fee}>Fee</p>
            <p className={styles.fee}>Per month</p>
          </div>
          <div className={styles.goldaccfreq}>
              <p>-</p>
              <p>£1.98</p>
              <p>+</p>
            </div>
            <p className={styles.fee}>Setup Fee</p>
            <div className={styles.goldaccfreq}>
              <p>-</p>
              <p>£36.90</p>
              <p>+</p>
            </div>
            </div>
            <div className={styles.secondbox}>
            <div className={styles.goldacc}>
                <MonetizationOnRoundedIcon 
                  style={{
                    fontSize: '2.7em',
                    color: ' rgb(44, 44, 255)',
                  }}
                />
                <p className={styles.goldacctext}>Business Account</p>
              </div>
              <div className={styles.secfeeandper}>
              <p className={styles.fee}>Fee</p>
            <p className={styles.fee}>Per month</p>
          </div>
          <div className={styles.goldaccfreq}>
              <p>-</p>
              <p>£1.98</p>
              <p>+</p>
            </div>
            <p className={styles.fee}>Setup Fee</p>
            <div className={styles.goldaccfreq}>
              <p>-</p>
              <p>£36.90</p>
              <p>+</p>
            </div>
            </div>
            
          </div>
        </article>
        </div>
        )}
        
        </div>
      </div>
    </div>
  );
}

export default Box4;
