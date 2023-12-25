import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import styles from '@/styles/Id.module.css';
import ToggleSwitch from '../idComponents/toggle switch/toggleSwitch';
import Link from 'next/link';
import { Lists } from '../Data';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';

const Content = () => {
  const router = useRouter()
  const {id} = router.query
  const handleWithdraw =()=>{
    router.push(`/Dashboard/${id}/processingOff/Withdraw`)
  }
  const handleDeposit =()=>{
    router.push(`/Dashboard/${id}/processingOff`)
  }
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  })

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
            <button onClick={handleDeposit} style={{
               cursor:'pointer',
               width:'230px',
               height:'56px',
               borderRadius:'8px',
               border:'none',
               font:' normal normal 300 19px/23px Rubik',
               background:' transparent radial-gradient(closest-side at 87% 100%, #F8F9FA 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box',
               boxShadow:'inset 0px 0px 10px #B7B7B7'
            }}>Deposit</button>
            <button onClick={handleWithdraw} style={{
                   cursor:'pointer',
                   width:'230px',
                   height:'56px',
                   borderRadius:'8px',
                   border:'none',
                   font:' normal normal 300 19px/23px Rubik',
                   background:' transparent radial-gradient(closest-side at 87% 100%, #F8F9FA 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box',
                   boxShadow:'inset 0px 0px 10px #B7B7B7'
            }} >Withdraw</button>

            <button style={{
                cursor:'pointer',
                width:'230px',
                  height:'56px',
                  color:'#F8F9FA',
                  borderRadius:'8px',
                  border:'none',
                  font:' normal normal 300 19px/23px Rubik',
                  background:' linear-gradient(to left, #3EB9E5 0%, #0D1CB3 60%)',
                  boxShadow:'inset 0px 0px 10px #021697'
            }}>Transfer</button>

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
      <th className={styles.th}>Transfer</th>
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
        <td className={styles.td}>{List.transfer}</td>
        <td className={styles.td}>{List.AmountTransferd}</td>
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