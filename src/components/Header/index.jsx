import styles from './style.module.css'
import { SiBurgerking } from 'react-icons/si'
import { useState } from 'react'

export default function Header() {
   const [show, setShow] = useState()

   return (
      <>
         <header className={styles.header}>
            <p className={styles.companyName}>sky<span>scanner</span></p>
         </header>
         <div className={styles.navbar}>
            <span onClick={() => setShow(old => !old)}><SiBurgerking />
               <div className={`${styles.popup} ${show ? styles.show : ''}`}>popup</div>
            </span>
         </div>
      </>
   )
}

