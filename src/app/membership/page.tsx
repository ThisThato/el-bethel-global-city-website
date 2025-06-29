import styles from './page.module.scss';

export const metadata = {
  title: 'Membership - EL-BETHEL GLOBAL CITY',
  description: 'Learn about becoming a member of the EL-BETHEL GLOBAL CITY community.',
};

export default function Membership() {
  return (
    <div className={styles.membershipPage}>
      <section className={styles.hero}>
        <div className="container">
          <h1>Membership</h1>
          <p className={styles.subtitle}>
            Join the EL-BETHEL GLOBAL CITY Community
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          
          <div className={styles.section}>
            <h2>What is Membership?</h2>
            <div className={styles.card}>
              <p>
                Membership at EL-BETHEL GLOBAL CITY is a covenant relationship between believers 
                who are committed to walking together in faith, supporting one another in spiritual 
                growth, and participating in the mission of the church. It represents a commitment 
                to be part of this local expression of the body of Christ.
              </p>
            </div>
          </div>

          <div className={styles.section}>
            <h2>Requirements for Membership</h2>
            <div className={styles.card}>
              <h3>Spiritual Requirements</h3>
              <ul>
                <li>Personal faith in Jesus Christ as Lord and Savior</li>
                <li>Evidence of being born again through personal testimony</li>
                <li>Commitment to Christian growth and discipleship</li>
                <li>Agreement with our statement of faith and core values</li>
                <li>Willingness to live according to biblical principles</li>
              </ul>
              
              <h3>Practical Requirements</h3>
              <ul>
                <li>Completion of membership classes or orientation</li>
                <li>Regular attendance at worship services</li>
                <li>Participation in community life and fellowship</li>
                <li>Commitment to financial stewardship and tithing</li>
                <li>Willingness to serve in ministry and outreach</li>
              </ul>
            </div>
          </div>

          <div className={styles.section}>
            <h2>Membership Process</h2>
            <div className={styles.processGrid}>
              <div className={styles.processCard}>
                <div className={styles.stepNumber}>1</div>
                <h3>Attend Regularly</h3>
                <p>Begin attending our services and community events to get to know our church family.</p>
              </div>
              <div className={styles.processCard}>
                <div className={styles.stepNumber}>2</div>
                <h3>Meet with Leadership</h3>
                <p>Schedule a meeting with our pastoral team to discuss your faith journey and calling.</p>
              </div>
              <div className={styles.processCard}>
                <div className={styles.stepNumber}>3</div>
                <h3>Attend Membership Class</h3>
                <p>Complete our membership orientation to learn about our vision, mission, and expectations.</p>
              </div>
              <div className={styles.processCard}>
                <div className={styles.stepNumber}>4</div>
                <h3>Make Your Commitment</h3>
                <p>Formally join our community through a membership ceremony and covenant signing.</p>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2>Membership Benefits</h2>
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <h3>Spiritual Community</h3>
                <p>Deep fellowship and accountability with committed believers who will support your spiritual journey.</p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Ministry Opportunities</h3>
                <p>Access to various ministry roles and leadership positions within the church community.</p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Pastoral Care</h3>
                <p>Priority access to pastoral counseling, prayer support, and spiritual guidance during life challenges.</p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Church Governance</h3>
                <p>Participation in church decisions, voting on important matters, and input into church direction.</p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Discipleship Programs</h3>
                <p>Access to advanced biblical training, leadership development, and spiritual growth programs.</p>
              </div>
              <div className={styles.benefitCard}>
                <h3>Global Network</h3>
                <p>Connection to our broader network of believers and ministry opportunities worldwide.</p>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2>Membership Expectations</h2>
            <div className={styles.card}>
              <h3>Commitment to Growth</h3>
              <p>
                Members are expected to actively pursue spiritual maturity through regular Bible study, 
                prayer, and participation in discipleship activities.
              </p>
              
              <h3>Active Participation</h3>
              <p>
                Regular attendance at worship services, small groups, and community events is expected 
                of all members as part of our covenant relationship.
              </p>
              
              <h3>Service and Ministry</h3>
              <p>
                Every member is encouraged to discover and use their spiritual gifts in service to 
                the church and community, whether in formal ministry roles or everyday service.
              </p>
              
              <h3>Financial Stewardship</h3>
              <p>
                Members are expected to honor God through faithful tithing and generous giving to 
                support the work of the church and its missions.
              </p>
              
              <h3>Christian Character</h3>
              <p>
                Members commit to living lives that reflect Christian values and principles, 
                representing Christ well in their personal and professional relationships.
              </p>
            </div>
          </div>

          <div className={styles.section}>
            <h2>Ready to Join?</h2>
            <div className={styles.callToAction}>
              <p>
                If you feel called to become a member of EL-BETHEL GLOBAL CITY, we would love to 
                talk with you about this important step in your spiritual journey.
              </p>
              <div className={styles.actionButtons}>
                <a href="/contact" className={styles.primaryButton}>
                  Contact Us Today
                </a>
                <a href="#" className={styles.secondaryButton}>
                  Download Membership Guide
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
