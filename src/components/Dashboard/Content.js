import styles from '@/styles/Dashboard.module.css'
import Image from 'next/image';
import DeleteIcon from '@material-ui/icons/Delete';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import PersonSharp from '@material-ui/icons/PersonSharp';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { useRouter } from 'next/router';
import { Lists } from '../Data';
import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import Company from '@/app/Dashboard/Company';

const Content = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [comapnies, setCompanies] = useState([])

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  const handleclick = (id) => {
    router.push(`/Dashboard/${id}`);
  }

  const fetchCompanies = async () => {
    setLoading(true);
    setCompanies(await Company.list())
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  const turnOffEventHandler = async (id) => {
    await Company.turnOf(id)
    await fetchCompanies()
  }
  const deleteCompanyEventHandler = async (id) => {
    await Company.delete(id)
    await fetchCompanies()
  }

  useEffect(() => {
    fetchCompanies().then(c => c)
    console.log(comapnies)
  }, [])

  return (
    <div
      // initial={{ opacity: 0, x: -100 }}
      // animate={{ opacity: 1, x: 0 }}
      // transition={{ delay: 0.5, duration: 1.5,  ease: 'easeInOut'   }}
      className={styles.dashcontainer} key='Dashboard'>
      {/* <Transition in={true} timeout={300} classNames="page-enter" unmountOnExit> */}
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
            <input id={styles.search2} type='search' placeholder='Search' />
          </div>
        </div>
        <hr className={styles.hr} />
        <div className={styles.dataparent}>

          {comapnies.length == 0 ? 'No Data' : <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th className={styles.th}>#</th>
                <th className={styles.th}>Image</th>
                <th className={styles.th}>Name</th>
                <th className={styles.th}>Registered</th>
                <th className={styles.th}>Est. Balance</th>
                <th className={styles.th}>ID Storage</th>
                <th className={styles.th}>Status</th>
                <th className={styles.th}>Action</th>
              </tr>
            </thead>
            {loading ? (


              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '30vh',
                position: 'relative',
                left: '25em',
                animation: 'fadeIn 1s'
              }}>

                <CircularProgress />

              </div>
            ) : comapnies.length > 0 ? (
              <tbody>
                {comapnies.map((List) => (
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
                    <td className={styles.td}>{List.status ? 'Active' : 'Turned Off'}</td>
                    <td className={styles.powerDeleteIcons}>
                      <button onClick={() => turnOffEventHandler(List.id)} className={styles.psticoncontainer}>
                        <PowerSettingsNewIcon className={styles.psticon} />
                      </button>
                      <button className={styles.psticoncontainer}>
                        <DeleteIcon className={styles.delicon} onClick={() => deleteCompanyEventHandler(List.id)} />
                      </button>
                    </td>
                  </tr>

                ))}
              </tbody>
            ) : 'No Data'}
          </table>}
        </div>
      </div>

      {/* </Transition> */}
    </div>
  );
}

export default Content;