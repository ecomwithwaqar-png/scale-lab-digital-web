import Link from 'next/link';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoHighlight}>Clinical</span>Acquisition
          </div>
          <p className={styles.brandingMotto}>
            Getting more patients for Pakistani aesthetic <br/> clinics through simple, proven systems.
          </p>
        </div>
        
        <div className={styles.linksGrid}>
          <div className={styles.linkGroup}>
            <h4 className={styles.groupTitle}>More Info</h4>
            <Link href="/services" className={styles.footerLink}>What we do</Link>
            <Link href="/results" className={styles.footerLink}>Our Results</Link>
            <Link href="/about" className={styles.footerLink}>Why Us</Link>
          </div>
          
          <div className={styles.linkGroup}>
            <h4 className={styles.groupTitle}>Contact</h4>
            <Link href="/contact" className={styles.footerLink}>Get Free Audit</Link>
            <Link href="/contact" className={styles.footerLink}>Support</Link>
            <Link href="/about" className={styles.footerLink}>Terms</Link>
          </div>
        </div>
      </div>
      
      <div className={styles.bottomBar}>
        <div className={styles.container}>
          <p>© {new Date().getFullYear()} Clinical Acquisition Engine. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
