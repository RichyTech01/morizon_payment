import styles from '@/styles/login.module.css'
import Link from "next/link";
import Formheader from "./Formheader";
import { useState } from 'react';
import Router from 'next/router';

export default function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('/api/Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userName, password })
    });

    if (response.status === 200) {
      Router.push('/Dashboard')
      // Handle successful login
    } else {
      const data = await response.json();
      setError(data.error);
    }
  };
    return ( 
      <form onSubmit={handleSubmit}>
        
        <article className={styles.formparent}>
        <div>
          <Formheader/> 
         <div className={styles.formchild}>
         
        
         <div className={styles.loginform}>
            <h1 className={styles.loginadmin}>Login Admin</h1>
            <div className={styles.inputsflex}>
            <input 
            id={styles.user}
            type='text'
            placeholder='user'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            />
            <br/>
            <input
            id={styles.password}
            type={styles.password}
            placeholder='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <Link href={'/ResetPassword'} className={styles.link}>
            <p className={styles.forgetpassword}>forgot password</p>
            </Link>
            <button type='submit' className={styles.loginbutton}>Login</button>
            {error && <p style={{ color: 'red',font:'normal normal normal 20px/24px Rubik' }}>{error}</p>}
            </div>
            </div>
         </div>
         </div>
         </article>

       </form>
     );
}