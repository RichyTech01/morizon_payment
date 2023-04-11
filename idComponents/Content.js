import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import styles from '@/styles/Id.module.css';
import ToggleSwitch from './toggle switch/toggleSwitch';
import Box1 from './IdContentbox/box1';
import Box2 from './IdContentbox/Box2';
import Box3 from './IdContentbox/Box3';
import Box4 from './IdContentbox/Box4';
import Box5 from './IdContentbox/Box5';
import Link from 'next/link';
import { useRouter } from 'next/router';


const Content = () => {
    const router = useRouter()
    const {id} = router.query
const openTransaction = () => {
    // router.push(`/Dashboard/${id}/processingOff`)
};
const openDetails = () => {
    // router.push(`/Dashboard/${id}`)
}
return (
    <main className={styles.main}>
        <div className={styles.contentheader}>
            <Link href='/Dashboard'>
                <ArrowBackIosIcon style={{ 
                    fontSize: '40px',
                    width: '33px',
                    height: '34px',
                    color: '#757575'
                }} 
                />
            </Link>
            <button onClick={openDetails} className={styles.detailsbtn}>Detail</button>
            <button  onClick={openTransaction} className={styles.transactionbtn}>Transaction</button>
        
        </div>
        <div className={styles.turnoffaccount}>
        <p className={styles.turnoffaccount}>Turn Off Account for Processing</p>
            <div>
            <ToggleSwitch />
            </div>
        </div>
        <div className={styles.articlesparent}>
            <article className={styles.firstarticle}>
                <div className={styles.firstfirstchild}>
                    <Box1 />
                </div>
                <div className={styles.firstsecchild}>
                    <Box2/>
                </div>
            </article>

            <article  className={styles.secondarticle}>
                    <div className={styles.secfirstchild}>
                        <Box3 />
                    </div>
                    
                    <div className={styles.secsecchild}>
                        <Box4/>
                    </div>
                    <div className={styles.secthirdchild}>
                        <Box5 />
                </div>
            </article>
        </div>
    </main>
);
};

export default Content;