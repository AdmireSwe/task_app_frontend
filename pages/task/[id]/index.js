import style from '../../../styles/Header.module.css'

import Link from 'next/link'
import { useRouter } from "next/router"


const task= () => {
  const router = useRouter()
  const {id} = router.query

  return (
    <div className={style.title}>No dynamic routing and fetching have been implemented yet, 
      but this is i page for a task with the ID of {id}<div>
      <Link href="/"> 
        Go back home
      </Link>  
      </div></div>
  )
}

export default task