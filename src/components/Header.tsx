import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/logo.jpg"
              alt="EL-BETHEL GLOBAL CITY Logo"
              width={60}
              height={60}
              className={styles.logoImage}
            />
            <div className={styles.logoText}>
              <h1 className={styles.churchName}>EL-BETHEL GLOBAL CITY</h1>
              <p className={styles.motto}>"The latter Glory shall be greater than the former"</p>
            </div>
          </Link>
          
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li><Link href="/" className={styles.navLink}>Home</Link></li>
              <li><Link href="/about" className={styles.navLink}>About Us</Link></li>
              <li><Link href="/beliefs" className={styles.navLink}>What We Believe</Link></li>
              <li><Link href="/membership" className={styles.navLink}>Membership</Link></li>
              <li><Link href="/contact" className={styles.navLink}>Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
