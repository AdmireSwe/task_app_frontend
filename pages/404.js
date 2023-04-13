import style from '@/styles/Header.module.css'
import Link from 'next/link'

export default function FourOhFour() {
  return <div className={style.title}>
    <h1 className={style.title}>This is NOT the page you are looking 404</h1>
    <Link href="/">
        Go back home
    </Link>
  </div>
}