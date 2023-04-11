import AddRoundedIcon from '@material-ui/icons/AddRounded';
import styles from '@/styles/Payment.module.css'
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import ReceiptRoundedIcon from '@mui/icons-material/ReceiptRounded';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Link from 'next/link';
import ErrorIcon from '@mui/icons-material/Error';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useState } from 'react';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import NotificationModal from './NotificationModal';
const Content = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenNotificate, setIsOpenNotificate] = useState(false);
      
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
            <article className={styles.secArticle}>
                <div className={styles.MoneyInOutButton}>
                    <Link href={'/Payment'}>
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
                    }}>Money In</button>
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
                    }}>Money Out</button>
                </div>
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
                    }}>Financial Summary</button>
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
            <h2 className={styles.Fsr}>Financial summary report</h2>
            <p className={styles.Fsrtext}>You can get a monthly summary of sales activity, fees, dispute activity, transfers with beginning and ending balances.</p>
          <div className={styles.largerContainer}>
            <div className={styles.ErrorIconContent}>
             <ErrorIcon style={{
                color:'#0D1CB3 ',
                fontSize:'33px'
             }} />
             <p style={{
                font: 'normal normal normal 20px/24px Rubik',
                letterSpacing: '0px',
                color: '#000000',
             }}>Data is updated as of 3/15/23, 7:21 AM. Any transactions after this update …… …….</p>
             </div>
             <div className={styles.bothBox}>
             <div className={styles.firstCont}>
                <div className={styles.dateR}>
                <p className={styles.RangeText}>Date Range</p>
                <p className={styles.March}>March (Month to date)</p>
                </div>
                <CalendarMonthIcon style={{
                    fontSize:'45px',
                    color:'#3D3D3D',
                    opacity:'1'
                }}
                />
             </div>
             <div className={styles.secCont}>
             <div className={styles.dateR}>
                <p className={styles.RangeText}>Currency</p>
                <p className={styles.March}>USD</p>
                </div>
                <ArrowDropDownIcon style={{
                    fontSize:'50px',
                    color:'#CECECE',
                    opacity:'1'
                }}
                />
            </div>
            <Link href={''}>
            <button className={styles.boxesButton}>Generate</button>
            </Link>
            </div>
          </div>
          <p style={{
            font: 'normal normal normal 20px/24px Rubik',
            letterSpacing: '0px',
            color: '#8A8A8A',
            opacity: '1',
            marginTop:'9em'
          }}>When the time period exceeds 31 days, the report will be limited to a summary and …..</p>
          <div className={styles.Footer}>
          <ErrorIcon style={{
                color:'#0D1CB3 ',
                fontSize:'42px'
             }} />
            <p>No report generated.</p>
            <p style={{
                position:'relative',
                top:'-24px'
            }}>Select a time period and currency to create a report.</p>
          </div>
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
            </div>
            
        </main>
     );
}
 
export default Content;
