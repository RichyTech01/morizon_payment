import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import styles from '@/styles/Id.module.css';
import ToggleSwitch from './ToggleSwitch';
import Link from 'next/link';
import { Lists } from '../Data';
import { useRouter } from 'next/router';
import { CircularProgress } from '@material-ui/core';
import { useState, useEffect } from 'react';


const Content = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  })

  const router = useRouter()
  const {id} = router.query
  const handleWithdraw =()=>{
    router.push(`/Dashboard/${id}/processingOff/Withdraw`)
  }
  const handleTransfer = () => {
    router.push(`/Dashboard/${id}/processingOff/Transfer`)
  }

return (
    <main className={styles.main}>
        <div className={styles.contentheader}>
            <Link href={'/Dashboard'}>
                <ArrowBackIosIcon style={{ 
                    fontSize: '40px',
                    width: '33px',
                    height: '34px',
                    color: '#757575'
                }} 
                />
            </Link>
            <button className={styles.detailsbtn2}>Detail</button>
            <button className={styles.transactionbtn2}>Transaction</button>
        
        </div>
        <div className={styles.turnoffaccount}>
        <p className={styles.turnoffaccount}>Turn On Account for Processing</p>
            <div>
            <ToggleSwitch />
            </div>
        </div>

      <div className={styles.contentbox}>
        <div className={styles.buttons}>
            <button className={styles.depositbtn}>Deposit</button>
            <button onClick={handleWithdraw} className={styles.withdrawbtn}>Withdraw</button>
            <button onClick={handleTransfer} className={styles.withdrawbtn}>Transfer</button>
            <input 
              type='search'
              placeholder='Search'
              id={styles.search}
            />
        </div>
        <hr style={{
            opacity:'0.2'
        }}/>
        {loading ? (
          <div style={{ display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '20vh',
          position:'relative',
          animation:'fadeIn 1s',
          // left:'3em'
     }}>

  <CircularProgress />
  
</div>
        ) : (
        <div className={styles.tablecont}>
        <table className={`${styles.table}`}>
  <thead className={`${styles.thead2} ${styles.thtr}`}>
    <tr>
      <th className={styles.th}>Transaction ID</th>
      <th className={styles.th}>Today</th>
      <th className={styles.th}>Method</th>
      <th className={styles.th}>Amount</th>
      <th className={styles.th}>Status</th>
      <th className={styles.th}>Invoice</th>
    </tr>
  </thead>
  <tbody className={`${styles.tbody}`}>
    {Lists.map((List) => (
      <tr key={List.id} className={styles.tr}>
        <td className={styles.td}>{List.TransactionId}</td>
        <td className={styles.td}>{List.Today}</td>
        <td className={styles.td}>{List.Method}</td>
        <td className={styles.td}>{List.Amount}</td>
        <td className={styles.td}>{List.Status}</td>
        <td className={styles.td}>{List.Invoice}</td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
    )}
      </div>
    </main>
);
};

export default Content;