import styles from './page.module.scss';

export const metadata = {
  title: 'What We Believe - EL-BETHEL GLOBAL CITY',
  description: 'Our statement of faith and the biblical principles that foundation our community.',
};

export default function Beliefs() {
  return (
    <div className={styles.beliefsPage}>
      <section className={styles.hero}>
        <div className="container">
          <h1>What We Believe</h1>
          <p className={styles.subtitle}>
            Our Statement of Faith - The Biblical Foundation of Our Community
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          
          <div className={styles.section}>
            <h2>The Holy Scriptures</h2>
            <div className={styles.card}>
              <p>
                We believe that the Bible is the inspired, infallible, and authoritative Word of God. 
                It is our ultimate authority for faith, conduct, and Christian living. The Scriptures, 
                both Old and New Testaments, were written by holy men of God as they were moved by 
                the Holy Spirit.
              </p>
            </div>
          </div>

          <div className={styles.section}>
            <h2>The Godhead</h2>
            <div className={styles.card}>
              <p>
                We believe in one true God, eternally existing in three persons: Father, Son, and 
                Holy Spirit. Each person of the Trinity is fully God, yet there is one God. They 
                are distinct in person but united in essence, co-equal and co-eternal.
              </p>
            </div>
          </div>

          <div className={styles.section}>
            <h2>Jesus Christ</h2>
            <div className={styles.card}>
              <p>
                We believe that Jesus Christ is the Son of God, conceived by the Holy Spirit and 
                born of the Virgin Mary. He is both fully God and fully man. He lived a sinless 
                life, died on the cross for our sins, rose from the dead on the third day, and 
                ascended to heaven where He sits at the right hand of the Father.
              </p>
            </div>
          </div>

          <div className={styles.section}>
            <h2>The Holy Spirit</h2>
            <div className={styles.card}>
              <p>
                We believe in the Holy Spirit as the third person of the Trinity. He convicts the 
                world of sin, regenerates those who believe, and indwells every believer. The Holy 
                Spirit empowers believers for Christian living and service, and distributes spiritual 
                gifts for the edification of the church.
              </p>
            </div>
          </div>

          <div className={styles.section}>
            <h2>Salvation</h2>
            <div className={styles.card}>
              <p>
                We believe that salvation is by grace alone, through faith alone, in Christ alone. 
                It is a gift from God and cannot be earned by works. All who repent of their sins 
                and believe in Jesus Christ as Lord and Savior are born again and become children of God.
              </p>
            </div>
          </div>

          <div className={styles.section}>
            <h2>The Church</h2>
            <div className={styles.card}>
              <p>
                We believe that the Church is the body of Christ, composed of all born-again believers. 
                The local church is a community of believers who gather for worship, fellowship, 
                discipleship, and service. We believe in the importance of church membership and 
                active participation in the life of the local body.
              </p>
            </div>
          </div>

          <div className={styles.section}>
            <h2>Spiritual Gifts</h2>
            <div className={styles.card}>
              <p>
                We believe in the gifts of the Holy Spirit as described in Scripture, including 
                both the fruit of the Spirit and the gifts of the Spirit. These gifts are given 
                for the common good and the building up of the church. We believe all gifts are 
                available to believers today and should be exercised in love and order.
              </p>
            </div>
          </div>

          <div className={styles.section}>
            <h2>The Second Coming</h2>
            <div className={styles.card}>
              <p>
                We believe in the personal, visible, and glorious return of Jesus Christ. He will 
                come to judge the living and the dead, establish His kingdom on earth, and reign 
                forever. We believe in the resurrection of the dead, eternal life for the righteous, 
                and eternal judgment for the wicked.
              </p>
            </div>
          </div>

          <div className={styles.section}>
            <h2>Christian Living</h2>
            <div className={styles.card}>
              <p>
                We believe that Christians are called to live holy lives, separate from sin and 
                dedicated to God. We are called to love God with all our heart, soul, mind, and 
                strength, and to love our neighbors as ourselves. Our lives should reflect the 
                character of Christ and bring glory to God.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
