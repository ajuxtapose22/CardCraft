'use client'

// src/app/components/Navbar.js
import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>CardCraft</div>

        <div className={`${styles.hamburger} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>

        <nav className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
          <a href="#" className={styles.navLink}>Home</a>
          {/* <a href="#" className={styles.navLink}>About</a> */}
          {/* <a href="#" className={styles.navLink}>Services</a> */}
          {/* <a href="#" className={styles.navLink}>Contact</a> */}
        </nav>
      </div>
    </header>
  );
}
