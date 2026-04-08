import { Navbar } from "@/components/layouts/Navbar";
import styles from "../internal.module.css";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function ResultsPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <header className={styles.hero}>
            <span className={styles.subtitle}>Our Proof</span>
            <h1 className={styles.title}>Real numbers from real clinics</h1>
            <p className={styles.description}>
              We don&apos;t care about &quot;views&quot; or &quot;likes.&quot; We only care about how many people actually walked into your clinic and paid.
            </p>
          </header>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xl)' }}>
            
            {/* Case Study 1 */}
            <section className={styles.card}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--spacing-lg)' }}>
                <div>
                  <h2 style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '0.25rem', fontWeight: 800 }}>88%</h2>
                  <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.75rem', color: 'var(--color-muted)', fontWeight: 600 }}>Patients Showed Up</span>
                  <h3 style={{ marginTop: '1.5rem', marginBottom: '0.75rem', color: 'var(--color-foreground)', fontSize: '1.25rem' }}>Premium MedSpa — Lahore</h3>
                  <p style={{ color: 'var(--color-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                    This clinic was losing half their patients because they forgot their appointments. We set up automatic WhatsApp reminders, and now almost everyone shows up.
                  </p>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)', padding: 'var(--spacing-lg)' }}>
                  <p style={{ color: 'var(--color-foreground)', fontWeight: 700, marginBottom: '1rem', fontSize: '1rem' }}>Direct Results:</p>
                  <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-muted)', fontSize: '0.9375rem' }}>
                    <li style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.75rem' }}><span style={{ color: 'var(--color-primary)' }}>✓</span> 62 New Patient Bookings in 30 Days</li>
                    <li style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.75rem' }}><span style={{ color: 'var(--color-primary)' }}>✓</span> Missed appointments dropped by 43%</li>
                    <li style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.75rem' }}><span style={{ color: 'var(--color-primary)' }}>✓</span> No extra work for the front desk staff</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Case Study 2 */}
            <section className={styles.card}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 'var(--spacing-lg)' }}>
                <div>
                  <h2 style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '0.25rem', fontWeight: 800 }}>14x</h2>
                  <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.75rem', color: 'var(--color-muted)', fontWeight: 600 }}>Return on Budget</span>
                  <h3 style={{ marginTop: '1.5rem', marginBottom: '0.75rem', color: 'var(--color-foreground)', fontSize: '1.25rem' }}>Physio &amp; Injury Clinic — Karachi</h3>
                  <p style={{ color: 'var(--color-muted)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                    We targeted people specifically searching for &quot;Back Pain Treatment&quot; in their city. Every rupee spent brought back more than 14 rupees in patient revenue.
                  </p>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)', padding: 'var(--spacing-lg)' }}>
                  <p style={{ color: 'var(--color-foreground)', fontWeight: 700, marginBottom: '1rem', fontSize: '1rem' }}>Direct Results:</p>
                  <ul style={{ listStyle: 'none', padding: 0, color: 'var(--color-muted)', fontSize: '0.9375rem' }}>
                    <li style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.75rem' }}><span style={{ color: 'var(--color-primary)' }}>✓</span> Each new patient cost only ₨4,100</li>
                    <li style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.75rem' }}><span style={{ color: 'var(--color-primary)' }}>✓</span> 34 High-value bookings in the first month</li>
                    <li style={{ marginBottom: '0.75rem', display: 'flex', gap: '0.75rem' }}><span style={{ color: 'var(--color-primary)' }}>✓</span> Dominating local search for &quot;Sports Injury&quot;</li>
                  </ul>
                </div>
              </div>
            </section>

          </div>

          <div style={{ marginTop: 'var(--spacing-2xl)', textAlign: 'center' }}>
            <Link href="/contact">
              <Button variant="primary" size="lg">Can we get these numbers for you?</Button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
