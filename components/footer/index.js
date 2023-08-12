import React from 'react'
import styles from './styles.module.css'
import Link from 'next/link'

function Footer() {
  return (
    <footer className={styles.footer}> 
        Made with ...
        <Link href={'https://www.linkedin.com/in/sametbuzcu/'} target='_blank'></Link>
    </footer>
  
  )
}

export default Footer