import styles from '@/styles/Transaction.module.css';
import Link from 'next/link';
import { Lists } from '../Data';
import { useState } from 'react';
import { CircularProgress } from '@mui/material';

const Content = () => {

  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 1000)

return (
    <main className={styles.main}>
        <div className={styles.contentheader}>
            <button style={{
                background:'linear-gradient(to left, #3EB9E5 0%, #0D1CB3 60%)',
                height:'56px',
                width:' 230px',
                cursor:'pointer',
                border:'none',
                color:'#F8F9FA',
                borderRadius:'8px',
                font:' normal normal 300 19px/23px Rubik',
                boxShadow: 'inset 0px 0px 10px #021697'
            }}>Exchange</button>
            <Link href={'/Transaction/Transaction'}>
            <button className={styles.transactionbtn2}>Transaction</button>
            </Link>
          <div>
           
          </div>
        </div>
        <div className={styles.turnoffaccount}>
            <div className={styles.transactioncostcontainer}>
        <p className={styles.transactioncost}>Transaction Cost</p>
        <div className={styles.countrypercent}>
            <p className={styles.uscountry}>U.S Country</p>
            <p className={styles.uscountrypercent}>.01%</p>
        </div>
        <div className={styles.noncountrypercent}>
            <p className={styles.nonuscountry}>Non U.S Country</p>
            <p className={styles.nonuscountrypercent}>.02%</p>
        </div>
            </div>
            <div className={styles.processingvolumecontainer}>
            <div className={styles.processingvolume}>
                <p className={styles.pv}>Processing Volume</p>
                <p className={styles.amount}>£ 2456,00</p>
            </div>
            <div className={styles.secvolume}>
                <p className={styles.pv}>24H Volume</p>
                <p className={styles.amount}>£ 8,524,250</p>
             </div>
            </div>
        </div>

      <div className={styles.contentbox}>
        <div className={styles.buttons}>
          <p className={styles.Exchangelist}>Exchange List</p>
            <input 
              type='search'
              placeholder='Search'
              id={styles.search}
            />
        </div>
        <hr style={{
            opacity:'0.2'
        }}/>

        <div className={styles.tablecont}>
        <table className={`${styles.table}`}>
  <thead className={`${styles.thead2} ${styles.thtr}`}>
    <tr>
      <th className={styles.th}>Transaction ID</th>
      <th className={styles.th}>Today</th>
      <th className={styles.th}>Pair</th>
      <th className={styles.th}>Amount 1</th>
      <th className={styles.th}>Amount 2</th>
      <th className={styles.th}>Status</th>
      <th className={styles.th}>Invoice</th>
    </tr>
  </thead>
  {loading ? (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '20vh',
        position:'relative',
        left:'37em',
        position:'relative',
        animation:'fadeIn 1s'
    }}>

    <CircularProgress />

    </div>
  ): (
  <tbody className={`${styles.tbody}`}>
    {Lists.map((List) => (
      <tr key={List.id} className={styles.tr}>
        <td className={styles.td}>{List.TransactionId}</td>
        <td className={styles.td}>{List.Today}</td>
        <td className={styles.td}>{List.pair}</td>
        <td className={styles.td}>{List.Amount1}</td>
        <td className={styles.td}>{List.Amount2}</td>
        <td className={styles.td}>{List.Status}</td>
        <td className={styles.td}>{List.Invoice}</td>
      </tr>
    ))}
  </tbody>
  )}
</table>

    </div>
      </div>
    </main>
);
};

export default Content;