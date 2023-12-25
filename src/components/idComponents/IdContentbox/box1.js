import styles from '@/styles/Id.module.css';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import { useRouter } from "next/router";
import { Lists } from '../../Data'
import Image from 'next/image';
import { useState } from 'react';
import PageLoading from '../../Dashboard/PageLoading';
const Box1 = () => {
  const [loading, setLoading] = useState(true);

   setTimeout(() => {
      setLoading(false);
    }, 1000);
  const router = useRouter();
  const { id } = router.query;

  const post = Lists.find(list => list.name === id);

  if (!post) {
    return <div>Post not found</div>;
  }
  return ( 
    <div className={styles.box1}>
    
      <div className={styles.box1header}>
        <InfoRoundedIcon style={{fontSize:'38px', color:' #0D1CB3 ',marginTop:'1.1em'}} />
        <p  className={styles.box1headertext}>
          Business Info
        </p>
        <p className={styles.imageid}>
        <Image src={post.image} alt={post.image} width={80} height={60} />
        </p>
      </div>
      <hr/>
      <div>
      {loading ? (
        <PageLoading/>
      ) : (
      <div className={styles.first1boxdeatils}>
      <div className={styles.parentdiv}>
      <div className={styles.parentcont}>
       <p className={styles.parenttext}>{post.name}</p> 
        <p className={styles.childcont}>
          Company Name
        </p>
      </div>
      </div>
      <div className={styles.parentcont}>
       <p className={styles.parenttext}>{post.Nameholder}</p> 
        <p className={styles.childcont}>
          Name holder
        </p>
      </div>
      <div className={styles.parentcont}>
       <p className={styles.parenttext}>{post.password}</p> 
        <p className={styles.childcont}>
        Password
        </p>
      </div>
      <div className={styles.parentcont}>
       <p className={styles.parenttext}>{post.Email}</p> 
        <p className={styles.childcont}>
          Email
        </p>
      </div>
      <div className={styles.parentcont}>
       <p className={styles.parenttext}>{post.PhoneNumber}</p> 
        <p className={styles.childcont}>
        Phone Number
        </p>
      </div>
      <div className={styles.parentcont}>
       <p className={styles.parenttext}>{post.IDStorage}</p> 
        <p className={styles.childcont}>
        ID Storage
        </p>
      </div>
      <div className={styles.parentcont}>
       <p className={styles.parenttext}>{post.Registered}</p> 
        <p className={styles.childcont}>
        Register Date
        </p>
      </div>
      <div className={styles.parentcont}>
       <p className={styles.parenttext}>{post.CompanyAddress}</p> 
        <p className={styles.childcont}>
        Company Address
        </p>
      </div>
      <div className={styles.parentcont}>
       <p className={styles.Lparenttext}>{post.address}</p> 
      </div>
      </div>
      )}
      </div>
    </div>
  );
}

export default Box1;
