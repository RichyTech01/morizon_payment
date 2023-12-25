import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import styles from '@/styles/Id.module.css';
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded';
import { useState } from 'react';
import PageLoading from '../../Dashboard/PageLoading';
const Box2 = () => {
  const [loading, setLoading] = useState(true);

   setTimeout(() => {
      setLoading(false);
    }, 1000);

    return ( 
        <div>
            <div className={styles.documenticon}>
            <ArticleRoundedIcon 
             style={{
                    fontSize: '1.7em',
                color: ' #0D1CB3',
                marginLeft: '0.8em'
              }}
            />
            <p>
            Document KYB
            </p>
            </div>
            <hr/>
            <div>
              {loading ? (
                <PageLoading/>
              ): (
                <div className={styles.box2id}>
            <div className={styles.legalattatchfile}>
                <p className={styles.legaltext}>Legal Document.PDF</p>
                <AttachFileRoundedIcon 
                 style={{
                    height:'25px',
                    fontSize: '26px',
                    transform:'skew(-30deg)',
                    color:'#757575 '
                  }}
                />
            </div>
          
            <div className={styles.legaldocument}>
                <p className={styles.legaltext}>Document 1 .pdf</p>
                <AttachFileRoundedIcon 
                 style={{
                    height:'25px',
                    fontSize: '26px',
                    transform:'skew(-30deg)',
                    color:'#757575 '
                  }}
                />
            </div>
            <div className={styles.legaldocument}>
                <p className={styles.legaltext}>Document 2 .pdf</p>
                <AttachFileRoundedIcon 
                 style={{
                    fontSize: '26px',
                    height:'25px',
                    transform:'skew(-30deg)',
                    color:'#757575 '
                  }}
                />
            </div>
            <div className={styles.legaldocument}>
                <p className={styles.legaltext}>Document 2 .pdf</p>
                <AttachFileRoundedIcon 
                 style={{
                    fontSize: '26px',
                    height:'25px',
                    transform:'skew(-30deg)',
                    color:'#757575 '
                  }}
                />
            </div>
            <div className={styles.legaldocument}>
                <p className={styles.legaltext}>Document 2 .pdf</p>
                <AttachFileRoundedIcon 
                 style={{
                    height:'25px',
                    fontSize: '26px',
                    transform:'skew(-30deg)',
                    color:'#757575 '
                  }}
                />
            </div>
            </div>
            )}

            </div>
            
        </div>
     );
}
 
export default Box2;