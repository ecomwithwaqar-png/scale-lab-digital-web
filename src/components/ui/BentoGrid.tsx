import React from 'react';
import styles from './BentoGrid.module.css';

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export function BentoGrid({ children, className = '' }: BentoGridProps) {
  return (
    <div className={`${styles.bentoGrid} ${className}`}>
      {children}
    </div>
  );
}

interface BentoItemProps {
  title: string;
  description: string;
  tag?: string;
  className?: string;
}

export function BentoItem({ title, description, tag, className = '' }: BentoItemProps) {
  return (
    <div className={`${styles.bentoItem} ${className}`}>
      {tag && <span className={styles.tag}>{tag}</span>}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
