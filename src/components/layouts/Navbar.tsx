import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';
import styles from './Navbar.module.css';

export function Navbar() {
  return (
    <header className={`${styles.header} glass`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.logoHighlight}>Clinical</span>Acquisition
          </Link>
        </div>
        
        <nav className={styles.nav}>
          <Link href="/services" className={styles.navLink}>Services</Link>
          <Link href="/results" className={styles.navLink}>Results</Link>
          <Link href="/about" className={styles.navLink}>Philosophy</Link>
        </nav>

        <div className={styles.actions}>
          <Link href="/contact">
            <Button variant="primary" size="md">Get Growth Audit</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
