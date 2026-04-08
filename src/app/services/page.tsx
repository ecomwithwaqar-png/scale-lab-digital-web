import { Navbar } from "@/components/layouts/Navbar";
import styles from "../internal.module.css";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <header className={styles.hero}>
            <span className={styles.subtitle}>What We Do</span>
            <h1 className={styles.title}>3 ways we fill your clinic with patients</h1>
            <p className={styles.description}>
              No complicated marketing words. We focus on one thing: getting real patients to message your clinic and book appointments.
            </p>
          </header>

          <div className={styles.grid}>
            <div className={styles.card}>
              <h2 style={{ color: 'var(--color-primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>🔍 Google Ads</h2>
              <p style={{ color: 'var(--color-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                We show your clinic to people exactly when they search for treatments like Hair Transplants or Botox in your city. You only pay for serious patients.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-foreground)', fontSize: '0.9375rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>✓ Focused on your specific city</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Only shows for high-paying treatments</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Starts working almost immediately</li>
              </ul>
            </div>

            <div className={styles.card}>
              <h2 style={{ color: 'var(--color-primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>📱 Facebook &amp; Instagram Ads</h2>
              <p style={{ color: 'var(--color-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                We show beautiful results of your work to people in your local community. When someone thinks about a treatment, your clinic is the first they remember.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-foreground)', fontSize: '0.9375rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>✓ Targeted at your ideal age group</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Shows off your best patient results</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Builds trust with local people</li>
              </ul>
            </div>

            <div className={styles.card}>
              <h2 style={{ color: 'var(--color-primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>💬 WhatsApp Booking System</h2>
              <p style={{ color: 'var(--color-muted)', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                Likes on photos are useless. We send interested people straight to your WhatsApp with automatic replies so they get an answer even when you are busy.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-foreground)', fontSize: '0.9375rem' }}>
                <li style={{ marginBottom: '0.5rem' }}>✓ No confusing website forms</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Automatic instant replies 24/7</li>
                <li style={{ marginBottom: '0.5rem' }}>✓ Lower no-show rate for bookings</li>
              </ul>
            </div>
          </div>

          <div style={{ marginTop: 'var(--spacing-2xl)', textAlign: 'center' }}>
            <Link href="/contact">
              <Button variant="primary" size="lg">Get Your Free Clinic Audit</Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
