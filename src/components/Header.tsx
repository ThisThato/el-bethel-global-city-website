'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import styles from './Header.module.scss';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logo} onClick={closeMobileMenu}>
            <Image
              src="/logo.jpg"
              alt="EL-BETHEL GLOBAL CITY Logo"
              width={60}
              height={60}
              className={styles.logoImage}
            />
            <div className={styles.logoText}>
              <h1 className={styles.churchName}>EL-BETHEL GLOBAL CITY</h1>
              <p className={styles.motto}>&ldquo;The latter Glory shall be greater than the former&rdquo;</p>
            </div>
          </Link>
          
          <button 
            className={styles.mobileMenuToggle}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className={`${styles.hamburger} ${isMobileMenuOpen ? styles.hamburgerOpen : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
          
          <nav className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}>
            <ul className={styles.navList}>
              <li><Link href="/" className={styles.navLink} onClick={closeMobileMenu}>Home</Link></li>
              <li><Link href="/about" className={styles.navLink} onClick={closeMobileMenu}>About Us</Link></li>
              <li><Link href="/beliefs" className={styles.navLink} onClick={closeMobileMenu}>What We Believe</Link></li>
              <li><Link href="/membership" className={styles.navLink} onClick={closeMobileMenu}>Membership</Link></li>
              <li><Link href="/contact" className={styles.navLink} onClick={closeMobileMenu}>Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
