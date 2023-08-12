import React from 'react'
import {FaPlayCircle} from "react-icons/fa";
import Link from 'next/link';
import styles from './styles.module.css'
 
function Header() {
  return (
    <header className={`${styles.header} container fluid`}>
    <div className={styles.headerWrapper}>
    <Link href='#' className={styles.logo}>
    <FaPlayCircle/> KozmossFilm
    </Link>
    <nav className={styles.navigationMenu}>
        Movies
        Series
        Kids
    </nav>
    </div>
    </header>
  )
}

export default Header