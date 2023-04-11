import styles from '@/styles/Dashboard.module.css'
import Content from '../../../Dashboard/Content';
import LeftNavbar from '../../../Dashboard/LeftNavbar';
import HeaderDash from '../../../Dashboard/HeaderDash';

const Dashboard = () => {
    return (           

    <div  className={styles.Dashboardparent}>
             <div className={styles.headercontentp}>
                <HeaderDash/>
             </div>
   
         <div className={styles.navbarcontent}>
            <div className={styles.navcontainer}>
             <LeftNavbar/>  
           </div>

           <div className={styles.contentparent}>
            <Content/>
           </div>
       </div>
    </div>
    
     );
}
 
export default Dashboard;