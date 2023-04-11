import styles from '@/styles/login.module.css'
import Image from 'next/image';
const Formheader = () => {
    return ( 
        <div className={styles.formheaderlogo}>
        <div className={styles.center}> 

        <Image
          src='/morizon-gate-logo.png' 
          height={68}
          width={306}
          priority
          alt='formHeader'
        />

        </div>
        </div>
     );
}
 
export default Formheader;