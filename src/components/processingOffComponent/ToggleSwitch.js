import { useState } from 'react';
import styles from '@/styles/toggle.module.css';
import { useRouter } from 'next/router';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';


const ToggleSwitch = () => {
    const router = useRouter()
    const {id} = router.query
    const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked(router.push(`/Dashboard/${id}`))
  };
  
  return (
        <div className={styles.toggleswitch}>
          <input
            type="checkbox"
            className={styles.toggleswitchcheckbox}
            checked={isChecked}
            onChange={toggleSwitch}
            id='toggle-switch'
          />
          <label className={styles.toggleswitchlabel} htmlFor="toggle-switch">
            <span className={styles.toggleswitchinner} />
            <span className={styles.toggleswitchswitch2} >
              <p>
              <PowerSettingsNewIcon
               style={{ 
                fontSize: '2px',
                width: '14px',
                height: '15px',
                color: '#F8F9FA',
                marginLeft: '7.4em',
                marginLeft: '7.9em',
                position:'relative',
                top:'-3.4em'
               }}
              />
              </p>
            </span>
          </label>
        </div>
        
      );
  
};

export default ToggleSwitch;
