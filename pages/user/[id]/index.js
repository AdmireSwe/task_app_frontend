import style from '../../../styles/Header.module.css'
import { useRouter } from "next/router"
import Link from 'next/link'


const user = () => {
 const router = useRouter()
 const {id} = router.query

  return (
    <div className={style.title}> 
      <h3>No dynamic fetching and routing have been implemented yet, but this is is a page for a User with ID of {id}</h3>
      <Link href="/"> 
        Go back home
      </Link>
      </div>
  )
}

export default user



