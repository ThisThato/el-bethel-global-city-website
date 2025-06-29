import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerInfo}>
            <h3 className={styles.footerTitle}>EL-BETHEL GLOBAL CITY</h3>
            <p className={styles.footerMotto}>&ldquo;The latter Glory shall be greater than the former&rdquo; - Haggai 2:9</p>
          </div>
          
          <div className={styles.footerLinks}>
            <div className={styles.linkColumn}>
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/about">About Us</a></li>
                <li><a href="/beliefs">What We Believe</a></li>
                <li><a href="/membership">Membership</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} EL-BETHEL GLOBAL CITY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
