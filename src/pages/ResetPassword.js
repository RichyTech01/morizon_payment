import styles from '@/styles/Forgot.module.css';
import Formheader from "../../FormComponent/Formheader";
import { useState } from 'react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('/api/ForgotPassword', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    });

    if (response.status === 200) {
      setSuccess(true);
    }
  }
  
    return ( 
        <form onSubmit={handleSubmit}>
        <article className={styles.formparent}>
         <div>
          <div style={{}}>
            <Formheader/>
            </div>
         <div className={styles.loginform}>
            <h1 className={styles.forgotpassword}>Forgot Password</h1>
            <div className={styles.inputsflex}>
                <p className={styles.enterrecoverytext}>Enter recovery email</p>
            <input
            id={styles.recoveryemail}
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='email'
            />
            <button className={styles.loginbutton} type='submit'>Recovery Password</button>
            </div>
         </div>
         </div>
         <br/>
          {success && <p style={{font:'normal normal normal 20px/24px Rubik',width:'380px',height:'-1px',position:'relative',}}>A reset password email has been sent to your email address.</p>}
         </article>
              
       </form>
     );
}
 