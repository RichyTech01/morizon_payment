import AddBusinessRoundedIcon from '@mui/icons-material/AddBusinessRounded';
import styles from '@/styles/Id.module.css';
import { useState } from 'react';
import PageLoading from '../../Dashboard/PageLoading';

const Box5 = () => {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
       setLoading(false);
     }, 1000);

    return ( 
        <div>
            <div className={styles.addicontext}>
                <AddBusinessRoundedIcon 
                style={{
                    color:' #0D1CB3 ',
                    fontSize:'50px'
                }}
                />
                <p className={styles.coupontext}>Coupon Code</p>
            </div>
            <hr/>
            <div>
                {loading ? (
                    <PageLoading/>
                ) : (
            <form className={styles.form}>
                <div  className={styles.forminputparent} >
                <div className={styles.firstinput}>
                    <label className={styles.title}>Title</label>
                    <input 
                    id={styles.noc}
                    type='text'
                    placeholder='name of coupon'
                />
                </div>
                <div className={styles.secinput}>
                    <label className={styles.Amount}>Amount</label>
                    <input 
                    id={styles.percent}
                    type='text'
                    placeholder='%'
                />
                </div>
                </div>
                <div className={styles.thirdinput}>
                    <label className={styles.code}>Code</label>
                    <input 
                    id={styles.etc}
                    type='text'
                    placeholder='enter the code'
                />
                </div>
                <div className={styles.buttoncont}>
                <button className={styles.button}>Add</button>
                </div>
            </form>
            )}
            </div>
        </div>
     );
}
 
export default Box5;