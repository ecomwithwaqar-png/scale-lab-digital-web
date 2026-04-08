import React from 'react';
import styles from './SystemStepper.module.css';

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  { 
    number: '01', 
    title: 'High-Intent Search Acquisition', 
    description: 'We capture patients precisely when they search for your high-margin treatments. Intercepting the highest-converting traffic in your local market.' 
  },
  { 
    number: '02', 
    title: 'Omnipresent Demand Generation', 
    description: 'We build omnipresence in your target radius through Meta ads, educating prospects, building authority, and driving them to request a consultation.' 
  },
  { 
    number: '03', 
    title: 'Automated Patient Nurturing', 
    description: 'We install instant SMS/WhatsApp sequences so your speed-to-lead is under 4 minutes. Your front desk only speaks to vetted, ready-to-book patients.' 
  },
  { 
    number: '04', 
    title: 'Revenue Attribution', 
    description: 'A single, pristine dashboard mapping every ad dollar spent to a specific patient file and booked consultation revenue.' 
  }
];

export function SystemStepper() {
  return (
    <div className={styles.stepperContainer}>
      {steps.map((step, index) => (
        <div key={step.number} className={styles.step}>
          <div className={styles.stepNumber}>{step.number}</div>
          <div className={styles.stepContent}>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDescription}>{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
