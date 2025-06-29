import styles from './page.module.scss';

export const metadata = {
  title: 'About Us - EL-BETHEL GLOBAL CITY',
  description: 'Learn about our purpose, vision, mission, and core values that guide EL-BETHEL GLOBAL CITY.',
};

export default function About() {
  return (
    <div className={styles.aboutPage}>
      <section className={styles.hero}>
        <div className="container">
          <h1>About EL-BETHEL GLOBAL CITY</h1>
          <p className={styles.subtitle}>
            &ldquo;The latter Glory shall be greater than the former&rdquo; - Haggai 2:9
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          
          <div className={styles.section}>
            <h2>Our Purpose</h2>
            <div className={styles.card}>
              <p>
                EL-BETHEL GLOBAL CITY exists to create a community where believers can 
                experience the transforming presence of God, grow in spiritual maturity, 
                and participate in His kingdom work both locally and globally. We are 
                committed to fostering an environment where every individual can discover 
                their divine purpose and walk in the fullness of God&rsquo;s calling on their lives.
              </p>
            </div>
          </div>

          <div className={styles.section}>
            <h2>Our Vision</h2>
            <div className={styles.card}>
              <p>
                To be a thriving global community that demonstrates the glory of God 
                through transformed lives, unified worship, and impactful service. We 
                envision a place where the presence of God is tangibly experienced, 
                where believers are equipped for ministry, and where the love of Christ 
                is extended to all nations.
              </p>
              <p>
                We see a future where &ldquo;the latter glory shall be greater than the former,&rdquo; 
                believing that God&rsquo;s best is yet to come for His people and through His church.
              </p>
            </div>
          </div>

          <div className={styles.section}>
            <h2>Our Mission & Mandate</h2>
            <div className={styles.card}>
              <p>
                Our mission is to gather believers from every tribe, tongue, and nation 
                to worship God in spirit and truth, to disciple followers of Jesus Christ, 
                and to demonstrate the kingdom of God through love, service, and supernatural ministry.
              </p>
              <ul>
                <li>To create an atmosphere where God&rsquo;s presence is experienced and His glory is manifested</li>
                <li>To provide biblical teaching and discipleship that produces mature believers</li>
                <li>To equip saints for the work of ministry and marketplace influence</li>
                <li>To reach the lost and bring healing to the broken</li>
                <li>To establish kingdom communities that impact their societies</li>
              </ul>
            </div>
          </div>

          <div className={styles.section}>
            <h2>Our Core Values</h2>
            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <h3>Glory of God</h3>
                <p>We believe that everything we do should bring glory to God and demonstrate His majesty.</p>
              </div>
              <div className={styles.valueCard}>
                <h3>Biblical Truth</h3>
                <p>We are committed to the absolute truth and authority of God&rsquo;s Word as our foundation.</p>
              </div>
              <div className={styles.valueCard}>
                <h3>Spirit-Led Living</h3>
                <p>We seek to be led by the Holy Spirit in all aspects of life and ministry.</p>
              </div>
              <div className={styles.valueCard}>
                <h3>Community & Unity</h3>
                <p>We value authentic community built on love, trust, and mutual support.</p>
              </div>
              <div className={styles.valueCard}>
                <h3>Excellence</h3>
                <p>We strive for excellence in all we do, reflecting the character of our perfect God.</p>
              </div>
              <div className={styles.valueCard}>
                <h3>Global Impact</h3>
                <p>We are committed to making a positive impact both locally and globally.</p>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2>Government of EL-BETHEL GLOBAL CITY</h2>
            
            <div className={styles.subsection}>
              <h3>Spiritual Government</h3>
              <div className={styles.card}>
                <p>
                  Our spiritual government is founded on biblical principles with Christ as 
                  the head of the church. We recognize the five-fold ministry gifts and the 
                  importance of apostolic and prophetic foundations in establishing and 
                  maintaining God&rsquo;s order in the church.
                </p>
                <p>
                  Leadership operates under divine authority with accountability, transparency, 
                  and servant-heartedness as core principles.
                </p>
              </div>
            </div>

            <div className={styles.subsection}>
              <h3>Secular Structure</h3>
              <div className={styles.card}>
                <p>
                  Our secular organization operates as a registered entity in compliance 
                  with local laws and regulations, ensuring proper legal standing and 
                  accountability in all civic matters.
                </p>
                <p>
                  We maintain proper governance structures including boards, committees, 
                  and administrative systems that support our spiritual mission while 
                  meeting legal requirements.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
