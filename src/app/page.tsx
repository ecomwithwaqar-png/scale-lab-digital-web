'use client';

import Link from 'next/link';
import { Navbar } from '@/components/layouts/Navbar';
import { Button } from '@/components/ui/Button';
import styles from './page.module.css';

const WA_LINK = 'https://wa.me/923000000000?text=I%20want%20more%20patient%20bookings.';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>

        {/* ── HERO ──────────────────────────────────────────── */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.heroTag}>🇵🇰 Built for Pakistani Clinics</div>
            <h1 className={styles.title}>
              We Fill Your Clinic<br />
              <span className={styles.titleHighlight}>With Paying Patients.</span>
            </h1>
            <p className={styles.subtitle}>
              Targeted Google &amp; Facebook ads that send ready-to-book patients straight to your WhatsApp. You only pay for real results.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact">
                <Button variant="primary" size="lg">Get Free Clinic Audit</Button>
              </Link>
              <a href={WA_LINK} target="_blank" rel="noreferrer">
                <Button variant="secondary" size="lg">💬 WhatsApp Us</Button>
              </a>
            </div>
          </div>
        </section>

        {/* ── TRUST BAR (Styled Badges — NOT plain text) ───── */}
        <div className={styles.trustBar}>
          <p className={styles.trustLabel}>Platforms we run your ads on:</p>
          <div className={styles.trustLogos}>
            <div className={styles.logoBadge}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
              Google Ads
            </div>
            <div className={styles.logoBadge}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              Meta Ads
            </div>
            <div className={styles.logoBadge}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              WhatsApp Funnels
            </div>
          </div>
        </div>

        {/* ── PROBLEM BENTO (with left-border accent) ──────── */}
        <section className={styles.section} id="problem">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Sound Familiar?
            </h2>
            <p className={styles.sectionSubtitle}>
              These are the 3 problems every clinic owner in Pakistan faces.
            </p>
          </div>
          <div className={styles.bentoGrid}>
            <div className={`${styles.bentoCard} ${styles.bentoAccent1}`}>
              <span className={styles.bentoEmoji}>📱</span>
              <h3>&quot;Instagram Posts Hain, Patients Nahi&quot;</h3>
              <p>Posting daily but the schedule is empty? Social media likes don&apos;t pay your bills. You need patients who are ready to book and pay today.</p>
            </div>
            <div className={`${styles.bentoCard} ${styles.bentoAccent2}`}>
              <span className={styles.bentoEmoji}>💬</span>
              <h3>&quot;Inquiries Aate Hain, Book Nahi Hote&quot;</h3>
              <p>People message you but never show up? If you don&apos;t reply in 5 minutes, they go to your competitor. Our system replies instantly, 24/7.</p>
            </div>
            <div className={`${styles.bentoCard} ${styles.bentoAccent3}`}>
              <span className={styles.bentoEmoji}>🔍</span>
              <h3>&quot;Kharcha Ho Raha Hai, Pata Nahi Kidhar&quot;</h3>
              <p>Boosting posts but have no idea which ad actually brought a patient? We set up tracking so you see exactly where every rupee goes.</p>
            </div>
          </div>
        </section>

        {/* ── MECHANISM STEPPER (with connecting line) ──────── */}
        <section className={styles.section} id="mechanism">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              How It <span className={styles.titleHighlight}>Works</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              A simple 3-step system. No complicated jargon.
            </p>
          </div>
          
          <div className={styles.stepperWrapper}>
            <div className={styles.stepperGrid}>
              {/* Connecting line behind the steps */}
              <div className={styles.stepperLine}></div>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>1</div>
                <h3>We Run Your Ads</h3>
                <p>Targeted Google &amp; Facebook ads for treatments that make you the most money — Hair Transplants, Botox, Dental Implants — in your specific city.</p>
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>2</div>
                <h3>Patients Message You</h3>
                <p>People who click your ad go straight to your WhatsApp. No confusing forms. They ask questions where they feel comfortable.</p>
              </div>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>3</div>
                <h3>They Show Up</h3>
                <p>We send automatic reminders so patients don&apos;t forget. Your front desk only deals with people who are serious about booking.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── PERFORMANCE LEDGER (simplified copy) ─────────── */}
        <section className={styles.section} id="ledger">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Inside Your <span className={styles.titleHighlight}>Ad Account</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              This is what a well-managed clinic ad account looks like after 30 days.
            </p>
          </div>

          <div className={styles.ledgerGrid}>
            <div className={styles.dashboardMockup}>
              <div className={styles.dashboardHeader}>
                <span className={styles.mockupTitle}>Live Account — 30 Day View</span>
                <div className={styles.mockupStatus}>
                  <div className={styles.statusDot}></div>
                  Active
                </div>
              </div>

              <div className={styles.metricsRow}>
                <div className={styles.metricBox}>
                  <span className={styles.metricLabel}>Ad Budget Spent</span>
                  <span className={styles.metricValue}>₨122k</span>
                </div>
                <div className={styles.metricBox}>
                  <span className={styles.metricLabel}>Patients Booked</span>
                  <span className={styles.metricValue}>42</span>
                </div>
                <div className={`${styles.metricBox} ${styles.metricHighlight}`}>
                  <span className={styles.metricLabel}>Cost Per Patient</span>
                  <span className={styles.metricValue}>₨2,914</span>
                </div>
                <div className={`${styles.metricBox} ${styles.metricHighlight}`}>
                  <span className={styles.metricLabel}>Revenue Generated</span>
                  <span className={styles.metricValue}>₨1.42M</span>
                </div>
              </div>

              <div style={{ height: '100px', width: '100%', background: 'linear-gradient(0deg, rgba(0, 230, 118, 0.06) 0%, transparent 100%)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
                 <svg width="100%" height="100%" viewBox="0 0 400 80" preserveAspectRatio="none">
                    <defs><linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="rgba(0,230,118,0.2)"/><stop offset="100%" stopColor="#00E676"/></linearGradient></defs>
                    <path d="M0,65 C50,60 80,40 130,42 S200,25 250,30 S320,10 400,5" fill="none" stroke="url(#lineGrad)" strokeWidth="2.5" />
                    <circle cx="400" cy="5" r="4" fill="#00E676" />
                 </svg>
              </div>
            </div>

            <div className={styles.logicStack}>
              <div className={styles.logicItem}>
                <h3>01. Remove Wasted Clicks</h3>
                <p>We block searches like &quot;what is botox&quot; and only show your ad to people searching &quot;botox clinic near me.&quot; You stop paying for window shoppers.</p>
              </div>
              <div className={styles.logicItem}>
                <h3>02. Move Budget to Winners</h3>
                <p>Every day we check which treatments and cities are getting the most bookings. We move your money there and cut everything else.</p>
              </div>
              <div className={styles.logicItem}>
                <h3>03. Scale What Works</h3>
                <p>We test different ad images and text. When we find a winner, we put more money behind it. Losers get killed immediately.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── PROOF NUMBERS ────────────────────────────────── */}
        <section className={styles.section} id="proof">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              The <span className={styles.titleHighlight}>Numbers</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              2-3 new patients usually pays for your entire month of advertising.
            </p>
          </div>
          
          <div className={styles.proofGrid}>
            <div className={styles.proofCard}>
              <span className={styles.proofMetric}>₨3.5k</span>
              <span className={styles.proofLabel}>Average Cost Per Patient</span>
              <p className={styles.proofDesc}>We target people who are actively searching for treatments. That means incredibly cheap patient acquisition compared to traditional marketing.</p>
            </div>
            <div className={styles.proofCard}>
              <span className={styles.proofMetric}>88%</span>
              <span className={styles.proofLabel}>Show-Up Rate</span>
              <p className={styles.proofDesc}>WhatsApp conversations + automatic reminders = patients who actually walk through your door instead of ghosting.</p>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ─────────────────────────────────── */}
        <section className={styles.section} id="testimonials">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              What Clinic Owners <span className={styles.titleHighlight}>Say</span>
            </h2>
          </div>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>&quot;We went from 2-3 random inquiries a week to 40+ booked patients in the first month. The WhatsApp system changed everything for us.&quot;</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar}>Dr</div>
                <div>
                  <strong>Dr. Ahmed K.</strong>
                  <span>Hair Transplant Clinic, Lahore</span>
                </div>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>&quot;I was boosting posts for 6 months with no idea what was working. These guys showed me exactly which ad brought which patient. Crystal clear.&quot;</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar}>S</div>
                <div>
                  <strong>Dr. Sara M.</strong>
                  <span>Aesthetic MedSpa, Karachi</span>
                </div>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>&quot;Our no-show rate dropped from 50% to under 15%. The automatic reminders on WhatsApp are a lifesaver for our front desk.&quot;</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.testimonialAvatar}>R</div>
                <div>
                  <strong>Dr. Raza H.</strong>
                  <span>Dental Implant Center, Islamabad</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ────────────────────────────────────── */}
        <section className={styles.ctaSection}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2 className={styles.ctaFinalTitle}>Ready to Fill Your Schedule?</h2>
            <p className={styles.sectionSubtitle} style={{ marginBottom: '2rem' }}>
              15 minutes. We look at your current ads and tell you exactly where you&apos;re losing patients. Free, no strings attached.
            </p>
            <div className={styles.heroActions} style={{ justifyContent: 'center' }}>
              <Link href="/contact">
                <Button variant="primary" size="lg">Get My Free Audit</Button>
              </Link>
              <a href={WA_LINK} target="_blank" rel="noreferrer">
                <Button variant="secondary" size="lg">💬 WhatsApp Us Now</Button>
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* ── STICKY WHATSAPP ─────────────────────────────── */}
      <a 
        href={WA_LINK} 
        target="_blank" 
        rel="noreferrer" 
        className={styles.stickyWa} 
        aria-label="Chat on WhatsApp"
        style={{
          position: 'fixed',
          bottom: '1.5rem',
          right: '1.5rem',
          width: '56px',
          height: '56px',
          backgroundColor: '#25D366',
          color: 'white',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 6px 20px rgba(37, 211, 102, 0.4)',
          zIndex: 999,
          transition: 'transform 0.2s ease, box-shadow 0.2s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 10px 28px rgba(37, 211, 102, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.4)';
        }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </a>
    </>
  );
}
