import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <HeroSection />
      
      <section className={styles.quickLinks}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Discover More</h2>
          <div className={styles.linksGrid}>
            <Link href="/about" className={styles.linkCard}>
              <h3>About Us</h3>
              <p>Learn about our purpose, vision, mission, and core values that guide our community.</p>
            </Link>
            
            <Link href="/beliefs" className={styles.linkCard}>
              <h3>What We Believe</h3>
              <p>Discover our statement of faith and the biblical principles that foundation our community.</p>
            </Link>
            
            <Link href="/membership" className={styles.linkCard}>
              <h3>Membership</h3>
              <p>Find out how to become part of the EL-BETHEL GLOBAL CITY community.</p>
            </Link>
            
            <Link href="/contact" className={styles.linkCard}>
              <h3>Contact Us</h3>
              <p>Get in touch with us and find out how to visit our community.</p>
            </Link>
          </div>
        </div>
      </section>
      
      <section className={styles.introduction}>
        <div className="container">
          <div className={styles.introContent}>
            <h2>Welcome to Our Community</h2>
            <p>
              EL-BETHEL GLOBAL CITY is a vibrant community of believers united by our shared faith 
              and commitment to experiencing God's transforming presence. We are dedicated to 
              creating an environment where individuals can grow spiritually, build meaningful 
              relationships, and discover their purpose in God's kingdom.
            </p>
            <p>
              Our community is built on the foundation of biblical truth and guided by the 
              principle that "The latter Glory shall be greater than the former" as declared 
              in Haggai 2:9. We believe that God's best is yet to come for His people and our world.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
