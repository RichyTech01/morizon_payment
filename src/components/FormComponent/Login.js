import styles from '@/styles/login.module.css'
import Link from "next/link";
import Formheader from "./Formheader";
import { useState } from 'react';
import Router from 'next/router';
import { API_ENDPOINT } from '../../../config/config';
import ApiLogin from '../../app/Authentication/Login'

export default function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [succes, setSuccess] = useState('');

  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoggingIn(true);
    try {
      await ApiLogin({ userName, password })
      Router.push('/Dashboard');
    } catch (error) {
      console.error(error.stack)
      setError(error.message);
    }
    setIsLoggingIn(false);
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
                <hr />
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
