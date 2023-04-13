import styles from '../styles/Layout.module.css'
import Link from 'next/link';

const users = ({users}) => {
   const { data } = users
   // data.forEach(data => {
     //  for (let key in data) {
      //console.log(`${key}: ${data[key]}`)
        //}
     //})

  return (
      <div className={styles.grid}>
          {data.map((user) => (
            <h2 className={styles.card} key={user.id}><p>{user.id}</p><br />{user.name}<br />
           <p> {user.email}</p><br />
            <Link href="/user/[id]" as={`/user/${user.id}`}>Get in Touch</Link>
            </h2>
          ))}
    </div>
        

    )
    };
  
  export default users

    
  export const getStaticProps = async () => {
    const res = await fetch("http://127.0.0.1:8000/api/v1/users");
    const users = await res.json();
  
    return {
      props:{
        users
      },
    }
  }
 