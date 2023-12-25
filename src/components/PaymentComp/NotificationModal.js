import styles from '@/styles/Payment.module.css'
import DescriptionIcon from '@mui/icons-material/Description';
const NotificationModal = ({Nback}) => {

    return ( 
        <div>
             <div className={styles.modal}>
          <div className={styles.modalContentNotification}>
            <h2 className={styles.createInvoice}>Notification</h2>
            <div className={styles.notificateContainer}>
                <div style={{display:'flex', gap:'2em'}}>
                 <div className={styles.notificateBg}>
                   <DescriptionIcon
                    style={{
                        color:'#FFFFFF',
                        opacity:'1'
                    }}
                    />
                    </div>
                    <p style={{position:'relative',left:'1.2em', font:'normal normal normal 14px/17px Rubik', color:'#191919'}}>Tax Document and other report.</p>
                 </div>
                    <p onClick={Nback} style={{position:'relative', left:'15em',display:'flex',alignItems:'center',color:'#F52F2F',gap:'4px', font:'normal normal normal 14px/17px Rubik',cursor:'pointer'}}><span style={{
                        width:'7px',
                        height:'7px',
                        borderRadius:'50px',
                        backgroundColor:'#F52F2F'
                    }}/>Unread</p>
              </div>


              <div className={styles.notificateContainerR}>
                <div style={{display:'flex', gap:'2em'}}>
                 <div className={styles.notificateBg}>
                   <DescriptionIcon
                    style={{
                        color:'#FFFFFF',
                        opacity:'1'
                    }}
                    /> 
                    </div>
                    <p style={{position:'relative',left:'1.2em', font:'normal normal normal 14px/17px Rubik', color:'#191919'}}>Tax Document and other report.</p>
                 </div>
                   <p style={{position:'relative',left:'12.5em', font:' normal normal normal 14px/17px Rubik',color:'#272727'}}>Today, 7:21 AM</p>
              </div>
              <div className={styles.notificateContainerR}>
                <div style={{display:'flex', gap:'2em'}}>
                 <div className={styles.notificateBg}>
                   <DescriptionIcon
                    style={{
                        color:'#FFFFFF',
                        opacity:'1'
                    }}
                    /> 
                    </div>
                    <p style={{position:'relative',left:'1.2em', font:'normal normal normal 14px/17px Rubik', color:'#191919'}}>Tax Document and other report.</p>
                 </div>
                   <p style={{position:'relative',left:'12.5em', font:' normal normal normal 14px/17px Rubik',color:'#272727'}}>Today, 7:21 AM</p>
              </div>
              <div className={styles.notificateContainerR}>
                <div style={{display:'flex', gap:'2em'}}>
                 <div className={styles.notificateBg}>
                   <DescriptionIcon
                    style={{
                        color:'#FFFFFF',
                        opacity:'1'
                    }}
                    /> 
                    </div>
                    <p style={{position:'relative',left:'1.2em', font:'normal normal normal 14px/17px Rubik', color:'#191919'}}>Tax Document and other report.</p>
                 </div>
                   <p style={{position:'relative',left:'12.5em', font:' normal normal normal 14px/17px Rubik',color:'#272727'}}>Today, 7:21 AM</p>
              </div>
              
          </div>
        </div>
        </div>
     );
}
 
export default NotificationModal;