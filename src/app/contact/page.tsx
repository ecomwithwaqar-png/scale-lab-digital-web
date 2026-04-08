import { Navbar } from "@/components/layouts/Navbar";
import styles from "../internal.module.css";
import contactStyles from "./Contact.module.css";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={contactStyles.twoCol}>
            
            <div className={contactStyles.benefits}>
              <span className={styles.subtitle}>Get Started</span>
              <h1 className={styles.title} style={{ fontSize: '2.5rem' }}>Get a Free Clinic Checkup</h1>
              <p className={styles.description} style={{ marginBottom: '2rem', fontSize: '1.125rem' }}>
                On this 15-minute call, we look at your current ads and show you exactly where you are losing patients and money.
              </p>
              
              <div className={contactStyles.benefitItem}>
                <span className={contactStyles.benefitIcon} style={{ background: 'rgba(0, 230, 118, 0.1)', color: 'var(--color-primary)', border: '1px solid rgba(0, 230, 118, 0.2)' }}>✓</span>
                <div>
                  <h4 style={{ color: 'var(--color-foreground)', marginBottom: '4px', fontSize: '1rem' }}>Ad Audit</h4>
                  <p style={{ color: 'var(--color-muted)', fontSize: '0.9375rem' }}>We find which ads are wasting your money right now.</p>
                </div>
              </div>

              <div className={contactStyles.benefitItem}>
                <span className={contactStyles.benefitIcon} style={{ background: 'rgba(0, 230, 118, 0.1)', color: 'var(--color-primary)', border: '1px solid rgba(0, 230, 118, 0.2)' }}>✓</span>
                <div>
                  <h4 style={{ color: 'var(--color-foreground)', marginBottom: '4px', fontSize: '1rem' }}>WhatsApp Review</h4>
                  <p style={{ color: 'var(--color-muted)', fontSize: '0.9375rem' }}>We check why people are messaging but not booking.</p>
                </div>
              </div>

              <div className={contactStyles.benefitItem}>
                <span className={contactStyles.benefitIcon} style={{ background: 'rgba(0, 230, 118, 0.1)', color: 'var(--color-primary)', border: '1px solid rgba(0, 230, 118, 0.2)' }}>✓</span>
                <div>
                  <h4 style={{ color: 'var(--color-foreground)', marginBottom: '4px', fontSize: '1rem' }}>A Plan for Growth</h4>
                  <p style={{ color: 'var(--color-muted)', fontSize: '0.9375rem' }}>A clear list of things to do to get more patients this month.</p>
                </div>
              </div>
            </div>

            <form className={contactStyles.form} style={{ background: 'var(--color-background-soft)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 'var(--radius-lg)', padding: 'var(--spacing-xl)', boxShadow: 'var(--shadow-md)' }}>
              <div className={contactStyles.inputGroup}>
                <label className={contactStyles.label} style={{ color: 'var(--color-foreground)', fontWeight: 600 }}>Your Name</label>
                <input type="text" className={contactStyles.input} placeholder="Dr. Ahmed" required style={{ borderRadius: 'var(--radius-md)' }} />
              </div>

              <div className={contactStyles.inputGroup}>
                <label className={contactStyles.label} style={{ color: 'var(--color-foreground)', fontWeight: 600 }}>Clinic Name</label>
                <input type="text" className={contactStyles.input} placeholder="Advanced Wellness Center" required style={{ borderRadius: 'var(--radius-md)' }} />
              </div>

              <div className={contactStyles.inputGroup}>
                <label className={contactStyles.label} style={{ color: 'var(--color-foreground)', fontWeight: 600 }}>Clinic Website / FB Page</label>
                <input type="text" className={contactStyles.input} placeholder="https://facebook.com/yourclinic" required style={{ borderRadius: 'var(--radius-md)' }} />
              </div>

              <div className={contactStyles.inputGroup}>
                <label className={contactStyles.label} style={{ color: 'var(--color-foreground)', fontWeight: 600 }}>Monthly Ads Budget</label>
                <select className={contactStyles.select} style={{ borderRadius: 'var(--radius-md)' }}>
                  <option>₨0 - ₨100,000</option>
                  <option>₨100,000 - ₨500,000</option>
                  <option>₨500,000 - ₨2,000,000</option>
                  <option>₨2,000,000+</option>
                </select>
              </div>

              <div className={contactStyles.inputGroup}>
                <label className={contactStyles.label} style={{ color: 'var(--color-foreground)', fontWeight: 600 }}>WhatsApp Number</label>
                <input type="tel" className={contactStyles.input} placeholder="+92 300 0000000" required style={{ borderRadius: 'var(--radius-md)' }} />
              </div>

              <Button variant="primary" size="lg" style={{ marginTop: 'var(--spacing-sm)', width: '100%' }}>
                Get My Free Clinic Checkup
              </Button>
              
              <p style={{ color: 'var(--color-muted)', fontSize: '0.8125rem', textAlign: 'center', marginTop: '1rem' }}>
                We reply on WhatsApp or Email within 24 hours.
              </p>
            </form>

          </div>
        </div>
      </main>
    </>
  );
}
