import styles from './page.module.scss';

export const metadata = {
  title: 'Contact Us - EL-BETHEL GLOBAL CITY',
  description: 'Get in touch with EL-BETHEL GLOBAL CITY. Find our location, service times, and contact information.',
};

export default function Contact() {
  return (
    <div className={styles.contactPage}>
      <section className={styles.hero}>
        <div className="container">
          <h1>Contact Us</h1>
          <p className={styles.subtitle}>
            We&rsquo;d love to hear from you and welcome you to our community
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <h2>Get In Touch</h2>
              <div className={styles.infoCard}>
                <h3>Service Times</h3>
                <p><strong>Sunday Worship:</strong> 10:00 AM - 12:00 PM</p>
                <p><strong>Wednesday Bible Study:</strong> 7:00 PM - 8:30 PM</p>
                <p><strong>Friday Prayer:</strong> 6:00 PM - 7:30 PM</p>
              </div>
              <div className={styles.infoCard}>
                <h3>Contact Information</h3>
                <p><strong>Email:</strong> info@elbethelglobalcity.org</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              </div>
            </div>
            <div className={styles.contactForm}>
              <h2>Send Us a Message</h2>
              <p>Coming soon - contact form will be available here.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
