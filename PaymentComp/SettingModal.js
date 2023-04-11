import styles from '@/styles/Payment.module.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddRoundedIcon from '@material-ui/icons/AddRounded';

const SettingModal = ({Sback}) => {
    return ( 
        <div className={styles.modal}>
            <div onClick={Sback} className={styles.ModalSetting}>
                <div className={styles.smallParent}>
                <div className={styles.settingModalbutton}>
                    <button style={{
                        width: '237px',
                        height: '56px',
                        background: ' linear-gradient(to left, #3EB9E5 2%, #0D1CB3 70%)',
                        boxShadow: 'inset 0px 0px 10px #021697',
                        borderRadius: '8px',
                        font: 'normal normal 300 19px/23px Rubik',
                        letterSpacing: '0px',
                        color: '#F8F9FA',
                        border:'none',
                        cursor:'pointer'
                    }}>Money</button>
                    <button style={{
                            width: '237px',
                            height: '56px',
                           background: ' transparent radial-gradient(closest-side at 87% 100%, #F8F9FA 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box',
                           boxShadow: 'inset 0px 0px 10px #B7B7B7',
                           borderRadius: '8px',
                           font: 'normal normal 300 19px/23px Rubik',
                           letterSpacing: '0px',
                           color: '#000000',
                           border:'none',
                           cursor:'pointer'
                    }}>Merchant Fees</button>
                    <button style={{
                        width: '237px',
                        height: '56px',
                       background: ' transparent radial-gradient(closest-side at 87% 100%, #F8F9FA 0%, #FFFFFF 100%) 0% 0% no-repeat padding-box',
                       boxShadow: 'inset 0px 0px 10px #B7B7B7',
                       borderRadius: '8px',
                       font: 'normal normal 300 19px/23px Rubik',
                       letterSpacing: '0px',
                       color: '#000000',
                       border:'none',
                       cursor:'pointer'
                    }}>Payment Preference</button>
                </div>
                <div style={{display:'flex',}}>
                <div style={{position:'relative',top:'5.6em',}}>
                  <p className={styles.stripe}>Stripe™ Balance</p>
                  <p className={styles.stripeAmount}>$7,890.00</p>
                  </div>
                        <div>

                        </div>
                     <button className={styles.addBtn}>
                    <span>
                    <AddRoundedIcon style={{
                        fontSize:'18px',
                        border:'1px solid #FFFFFF',
                        borderRadius:'8px',
                        opacity:'1'
                    }}/>
                    </span>
                </button>
                  </div>
                <p style={{color:'#1843BE',fontSize:'19px',fontFamily:'Rubik',position:'relative',top:'0.5em',marginBottom:'3em', fontWeight:'600',opacity:'1'}}>Turn on automatic transfers</p>
                  <hr />

                  <div> 
                    <p style={{font:'normal normal 300 18px/22px Rubik'}}>Currencies</p>
                    <div className={styles.UsdContainer}>
                        <p style={{width:'57px',height:'57px', borderRadius:'50px',border:'2px solid #318FD8',position:'relative',left:'2em'}}></p>
                        <div style={{position:'relative',left:'3em'}}>
                        <h3 style={{position:'relative',font:'18px',fontFamily:'Rubik',fontWeight:'600',top:'9px'}}>US Dollar (USD)</h3>
                        <p style={{position:'relative',color:' #1843BE',font:'18px',fontFamily:'Rubik',top:'-10px'}}>Primary</p>
                        </div>
                        <div style={{display:'flex',gap:'25.5em', position:'relative',top:'1em'}}>
                        <h3  style={{position:'relative',font:'21px',fontFamily:'Rubik',fontWeight:'600',top:'-15px',left:'21em',}}>$7,890.00</h3>
                        <MoreVertIcon/>
                        </div>
                       
                    </div>
                    <div style={{display:'flex',position:'relative',top:'3em',gap:'2em'}}>
                    <button style={{
                         width: '122px',
                         height: '39px',
                         background: ' linear-gradient(to left, #3EB9E5 2%, #0D1CB3 70%)',
                         boxShadow: 'inset 0px 0px 10px #021697',
                         borderRadius: '8px',
                         font: 'normal normal normal 14px/17px Rubik',
                         letterSpacing: '0px',
                         color: '#F8F9FA',
                         border:'none',
                         cursor:'pointer'
                    }}>Add Currency</button>
                        <button style={{
                             width: '164px',
                             height: '39px',
                             background: ' linear-gradient(to left, #3EB9E5 2%, #0D1CB3 70%)',
                             boxShadow: 'inset 0px 0px 10px #021697',
                             borderRadius: '8px',
                             font: 'normal normal normal 14px/17px Rubik',
                             letterSpacing: '0px',
                             color: '#F8F9FA',
                             border:'none',
                             cursor:'pointer'
                        }}>Currency Calculator</button>
                        </div>
                  </div>

                  </div>
            </div>
        </div>
     );
}
 
export default SettingModal;