import styles from '@/styles/Dashboard.module.css'
import Content from '../../../Dashboard/Content';
import LeftNavbar from '../../../Dashboard/LeftNavbar';
import HeaderDash from '../../../Dashboard/HeaderDash';
import { motion } from 'framer-motion';

const Dashboard = () => {
 
  
    return (

 <div>
    <motion.div className={styles.Dashboardparent}>
    
             <div className={styles.headercontentp}>
                <HeaderDash/>
             </div>
           
         <div className={styles.navbarcontent}>
            <div style={{position:'absolute', zIndex:'1', left:'0em',}}
 className={styles.navcontainer}>
             <LeftNavbar/>  
           </div>
         
           <motion.div 
             initial={{ opacity: 0, x: "-100vw" }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.5, ease: "easeInOut" }}
               className={styles.contentparent}
               style={{position:'relative', left:'6em'}}
           >
            <Content/>
           </motion.div>

       </div>

    </motion.div>
</div>
    
     );
}
 
export default Dashboard;