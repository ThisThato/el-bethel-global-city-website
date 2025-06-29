import Image from 'next/image';
import Link from 'next/link';
import styles from './HeroSection.module.scss';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              Welcome to <span className={styles.highlight}>EL-BETHEL GLOBAL CITY</span>
            </h1>
            <p className={styles.heroMotto}>
              &ldquo;The latter Glory shall be greater than the former&rdquo; - Haggai 2:9
            </p>
            <p className={styles.heroDescription}>
              A community where believers gather to experience God&rsquo;s presence, grow in faith, 
              and witness His transforming power in our lives and the world around us.
            </p>
            <div className={styles.heroButtons}>
              <Link href="/about" className={styles.primaryButton}>
                Learn More About Us
              </Link>
              <Link href="/contact" className={styles.secondaryButton}>
                Visit Us
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/logo.jpg"
              alt="EL-BETHEL GLOBAL CITY Logo"
              width={400}
              height={400}
              className={styles.logoImage}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
