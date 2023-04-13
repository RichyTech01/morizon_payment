import styles from '@/styles/login.module.css'
import Link from "next/link";
import Formheader from "./Formheader";
import { useState } from 'react';
import Router from 'next/router';

export default function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [succes, setSuccess] = useState('');

  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoggingIn(true);
  
    const response = await fetch('/api/Login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userName, password })
    });
  
    if (response.status === 200) {
      setSuccess('Logging in...');
      setTimeout(() => {
        Router.push('/Dashboard');
        setIsLoggingIn(false);
        setError(false);
      }, 2000);
    } else {
      const data = await response.json();
      setTimeout(() => {
        setError(data.error);
        setIsLoggingIn(false);
      }, 2000);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <article className={styles.formparent}>
        <div>
          <Formheader />
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
                  required
                />
                <br />
                <input
                  id={styles.password}
                  type={styles.password}
                  placeholder='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Link href={'/ResetPassword'} className={styles.link}>
                  <p className={styles.forgetpassword}>forgot password</p>
                </Link>
                <button type='submit' className={styles.loginbutton} disabled={isLoggingIn}>
                  {isLoggingIn ? 'Logging in...' : 'Login'}
                </button>
                {error && !isLoggingIn && (
                  <p style={{ color: 'red', font: 'normal normal normal 20px/24px Rubik' }}>{error}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    </form>
  );
}
