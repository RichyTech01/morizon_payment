import styles from '@/styles/Dashboard.module.css'
import Image from 'next/image';
import DeleteIcon from '@material-ui/icons/Delete';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import PersonSharp from '@material-ui/icons/PersonSharp';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { useRouter } from 'next/router';
import { Lists } from '../Data';

const Content = () => {
  const router = useRouter();

  const handleclick = (id) => {
    router.push(`/Dashboard/${id}`);
  }

    return ( 
      <div className={styles.dashcontainer}>
        <button className={styles.addcompanyBtn}>
        <span className={styles.addroundediconcont}>
          <AddRoundedIcon className={styles.addroundedicon} />
        </span>
        Add Company  
      </button>
      <div className={styles.contentboxlist}>
        <div className={styles.companylistsearch}>
          <div className={styles.companylistcontainer}>
            <div className={styles.personsharpiconcont}>
            <PersonSharp style={{ 
                fontSize: '20px',
                width: '70px',
                height: '37px',
                color: '#757575',
                marginTop: '1em',
                marginLeft: '1em',
                color: '#0D1CB3',
               }} />
            </div>
            
            <p className={styles.companylist}>Company List</p>
          </div>
          <div className={styles.search}>
            <input id={styles.search2} type='search' placeholder='Search'/>
          </div>
        </div> 
        <hr className={styles.hr}/>
        <div className={styles.dataparent}>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th className={styles.th}>#</th>
                <th className={styles.th}>Image</th>
                <th className={styles.th}>Name</th>
                <th className={styles.th}>Registered</th>
                <th className={styles.th}>Est. Balance</th>
                <th className={styles.th}>ID Storage</th>
                <th className={styles.th}>Action</th>        
              </tr>
            </thead>
            <tbody>
              {Lists.map((List) => (
                <tr key={List.id} className={`${styles.tdata} hover-row`}>                  
                  <td className={styles.td}>{List.id}</td>
                  <td className={styles.td}>
                    <div className={styles.companyLogo}>
                      <Image src={List.image} alt={List.image} width={80} height={60} />
                    </div>
                  </td>
                  <td className={styles.td}>{List.name}</td>
                  <td className={styles.td}>{List.Registered}</td>
                  <td className={styles.td}>{List.EStbalance}</td>
                  <td className={styles.td}>{List.IDStorage}</td>
                  <td className={styles.powerDeleteIcons}>
                  <button onClick={() => handleclick(List.name)} className={styles.psticoncontainer}>
                       <PowerSettingsNewIcon className={styles.psticon}/>
                    </button>
                  <button className={styles.psticoncontainer}> 
                       <DeleteIcon className={styles.delicon}/>
                     </button>
                  </td>
                </tr>

               ))}
          </tbody>
      </table>
      </div>
      </div>
      </div>
     );
}
 
export default Content;