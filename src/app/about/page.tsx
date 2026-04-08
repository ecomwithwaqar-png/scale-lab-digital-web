import { Navbar } from "@/components/layouts/Navbar";
import styles from "../internal.module.css";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <header className={styles.hero}>
            <span className={styles.subtitle}>Our Why</span>
            <h1 className={styles.title}>We only work with clinics. Nothing else.</h1>
            <p className={styles.description}>
              Most agencies work with anyone. We chose to only work with aesthetic and wellness clinics because it&apos;s the only way to be the best at getting you patients.
            </p>
          </header>

          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)' }}>
            <p style={{ fontSize: '1.125rem', color: 'var(--color-foreground)', lineHeight: '1.8', fontWeight: 500 }}>
              We started this agency because we saw too many clinic owners getting burned by marketers who didn&apos;t understand the difference between a &quot;like&quot; on a photo and a real patient booking a treatment.
            </p>
            
            <p style={{ color: 'var(--color-muted)', lineHeight: '1.8', fontSize: '1rem' }}>
              You don&apos;t need fancy marketing awards. You don&apos;t need complicated reports. You need a reliable system that brings serious patients into your waiting room so you can focus on your work.
            </p>

            <div style={{ padding: 'var(--spacing-xl)', background: 'var(--color-background-soft)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 'var(--radius-lg)' }}>
              <h2 style={{ color: 'var(--color-primary)', marginBottom: '1.25rem', fontSize: '1.5rem' }}>How we stay honest:</h2>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
                <li style={{ fontSize: '1rem', color: 'var(--color-muted)', lineHeight: '1.6' }}><strong style={{ color: 'var(--color-foreground)' }}>1. Everything is tracked.</strong> You will know exactly what every rupee of your budget got you.</li>
                <li style={{ fontSize: '1rem', color: 'var(--color-muted)', lineHeight: '1.6' }}><strong style={{ color: 'var(--color-foreground)' }}>2. No hidden fees.</strong> We tell you exactly what you are paying for, and why.</li>
                <li style={{ fontSize: '1rem', color: 'var(--color-muted)', lineHeight: '1.6' }}><strong style={{ color: 'var(--color-foreground)' }}>3. Only serious patients.</strong> We don&apos;t fill your phone with people who just want to chat. We focus on bookings.</li>
              </ul>
            </div>

            <p style={{ color: 'var(--color-muted)', lineHeight: '1.8', fontSize: '1rem' }}>
              We aren&apos;t practicing on your budget. We use a system that has already worked for clinics just like yours.
            </p>

            <div style={{ marginTop: 'var(--spacing-sm)', textAlign: 'center' }}>
              <Link href="/contact">
                <Button variant="primary" size="lg">Work with clinic specialists</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
