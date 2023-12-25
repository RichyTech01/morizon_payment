import AddRoundedIcon from '@material-ui/icons/AddRounded'
import styles from '@/styles/Payment.module.css'
import { Lists } from '../Data';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import ReceiptRoundedIcon from '@mui/icons-material/ReceiptRounded';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Link from 'next/link';
import { useState } from 'react';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import NotificationModal from './NotificationModal';
import SettingModal from './SettingModal';
import { CircularProgress } from '@material-ui/core';
const Content = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenSetting, setisOpenSetting] = useState(false);
    const [isOpenNotificate, setIsOpenNotificate] = useState(false);
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
       setLoading(false);
     }, 1000);
    const toggleModal = () => {
    
      setIsOpen(!isOpen);
    };
    const back = () => {
        setIsOpen(false);
      };
      const toggleModalSettings = () => {
        setisOpenSetting(!isOpenSetting);
      };
      const Sback = () => {
        setisOpenSetting(false);
        };
      const Nback = () => {
        setIsOpenNotificate(false);
      };
      const toggleModalNotificate = () => {
        setIsOpenNotificate(!isOpenNotificate);
      };
  
    return ( 
        <main className={styles.main}>
            <div className={styles.mainparent}>
            <article className={styles.contentheaderart}>
                <div className={styles.settingsStripeCont}>
                  <div onClick={toggleModalSettings} className={styles.setingsIconContainer}>
                    <SettingsRoundedIcon style={{
                        fontSize:'30px',
                        height:'27px',
                        width:'27px',
                        color:'#000000'
                    }}/>
                  </div>
                  <div>
                  <p className={styles.stripe}>Stripe™ Balance</p>
                  <p className={styles.stripeAmount}>$7,890.00</p>
                  </div>
                </div>
                <div className={styles.contentHeader}>
                    <div className={styles.buttons}>
                <button className={styles.addcompanyBtn}>
                    <span className={styles.addroundediconcont}>
                    <AddRoundedIcon className={styles.addroundedicon} />
                    </span>
                    Add Money
                </button>
                    <button onClick={toggleModal} className={styles.secbutton}>
                        <ReceiptRoundedIcon 
                        style={{
                            fontSize:'34px',
                            position:'relative',
                            left:'1em'
                        }}/>
                        Create Invoice
                    </button>
                    </div>
                    <div className={styles.MoneyinandOut}>
                      <div>
                        <p className={styles.moneyIn}>Money In</p>
                        <p className={styles.moneyInAmmount}>$ 1,269.78</p>
                    </div>
                    <div>
                        <p className={styles.moneyOut}>Money Out</p>
                        <p className={styles.moneyOutAmmount}>$70.89</p>
                     </div>
                    </div>
                </div>
            </article>
            <hr className={styles.hr}/>
                        {loading ? (
                <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '20vh',
                position:'relative',
                animation:'fadeIn 1s'
            }}>

            <CircularProgress />

       </div>
            ) : (
              <div>
            <article className={styles.secArticle}>
                <div className={styles.MoneyInOutButton}>
                    <button style={{
                        width: '222px',
                        height: '56px',
                        background: ' linear-gradient(to left, #3EB9E5 2%, #0D1CB3 70%)',
                        boxShadow: 'inset 0px 0px 10px #021697',
                        borderRadius: '8px',
                        font: 'normal normal 300 19px/23px Rubik',
                        letterSpacing: '0px',
                        color: '#F8F9FA',
                        border:'none',
                        cursor:'pointer'
                    }}>Money In</button>
                    <button style={{
                        width: '222px',
                        height: '56px',
                        background: ' transparent radial-gradient(closest-side at 87% 100%, #F8F9FA 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box',
                        boxShadow: 'inset 0px 0px 10px #B7B7B7',
                        borderRadius: '8px',
                        font: 'normal normal 300 19px/23px Rubik',
                        letterSpacing: '0px',
                        color: '#000000',
                        border:'none',
                        cursor:'pointer'
                    }}>Money Out</button>
                </div>
                <div className={styles.MoneyInOutButton}>
                    <Link href={'/Payment/FinicialSum'}>
                    <button style={{
                        width: '222px',
                        height: '56px',
                        background: ' transparent radial-gradient(closest-side at 87% 100%, #F8F9FA 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box',
                        boxShadow: 'inset 0px 0px 10px #B7B7B7',
                        borderRadius: '8px',
                        font: 'normal normal 300 19px/23px Rubik',
                        letterSpacing: '0px',
                        color: '#000000',
                        border:'none',
                        cursor:'pointer'
                    }}>Financial Summary</button>
                    </Link>
                    <button style={{
                        width: '222px',
                        height: '56px',
                        background: ' transparent radial-gradient(closest-side at 87% 100%, #F8F9FA 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box',
                        boxShadow: 'inset 0px 0px 10px #B7B7B7',
                        borderRadius: '8px',
                        font: 'normal normal 300 19px/23px Rubik',
                        letterSpacing: '0px',
                        color: '#000000',
                        border:'none',
                        cursor:'pointer'
                    }}>Transactions</button>
                </div>
                <div onClick={toggleModalNotificate} className={styles.Notification}>
                   <NotificationsRoundedIcon 
                   style={{
                    fontSize:'30px',
                    color:'white'
                   }}
                   /> 
                </div>
            </article>
            <div className={styles.todayArrow}>
                <p>Today</p>
                <ArrowDropDownIcon style={{
                    fontSize:'40px'
                }}/>
            </div>
            <table className={`${styles.table}`}>
  <thead className={`${styles.thead2} ${styles.thtr}`}>
    <tr>
      <th className={styles.th}>#</th>
      <th className={styles.th}>Date</th>
      <th className={styles.th}>Time</th>
      <th className={styles.th}>Merchant</th>
      <th className={styles.th}>Amount</th>
    </tr>
  </thead>
  
  <tbody className={`${styles.tbody}`}>
    {Lists.map((List) => (
      <tr key={List.id} className={styles.tr}>
        <td className={styles.td}>{List.paymentId}</td>
        <td className={styles.td}>{List.MoneyInDate}</td>
        <td className={styles.td}>{List.MoneyTime}</td>
        <td className={styles.td}>{List.Merchant}</td>
        <td className={styles.td}>{List.MoneyInAmount}</td>
      </tr>
    ))}
  </tbody>
</table>
</div>
            )}

{isOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2 className={styles.createInvoice}>Create Invoice</h2>
           <form className={styles.form}>
               <input 
                type='Email'
                placeholder='Customers Email'
                id={styles.input}
               />
                <input 
                type='text'
                placeholder='Item Name'
                id={styles.input}
               />
                <input 
                type='text'
                placeholder='Item Amount'
                id={styles.Amount}

               />
                
                 <input 
                type='text'
                placeholder='USD'
                id={styles.Usd}
               />
               <div className={styles.addbutton}>
               <p className={styles.addmore}>Add more details.</p>
               <button onClick={back} style={{
                    width: '242px',
                    height: '56px',
                    background: ' linear-gradient(to left, #3EB9E5 2%, #0D1CB3 70%)',
                    boxShadow: 'inset 0px 0px 10px #021697',
                   borderRadius: '8px',
                   font: 'normal normal 300 19px/23px Rubik',
                   letterSpacing: '0px',
                   color: '#F8F9FA',
                   border:'none',
                   cursor:'pointer'
               }}>Send</button>
               </div>

           </form>
          </div>
        </div>
      )}
{isOpenNotificate && ( 
    <div>
        <NotificationModal Nback={Nback}/>
    </div>
      )}
      {isOpenSetting && ( 
    <div>
        <SettingModal Sback={Sback} />
    </div>
      )}

            </div>
            
        </main>
     );
}
 
export default Content;