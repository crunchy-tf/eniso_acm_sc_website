'use client';

import {motion} from 'framer-motion';
import styles from './page.module.css';
import {ArrowRight} from 'lucide-react';
import Link from 'next/link';

interface HomeClientProps {
  locale: string;
  t: {
    title: string;
    description: string;
    cta: string;
    upcoming: string;
  };
}

export default function HomeClient({ locale, t }: HomeClientProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.title}
        >
          {t.title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={styles.description}
        >
          {t.description}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={styles.ctas}
        >
          <Link href={`/${locale}/join`} className={styles.primaryBtn}>
            {t.cta} <ArrowRight size={20} />
          </Link>
          <Link href={`/${locale}/calendar`} className={styles.secondaryBtn}>
            {t.upcoming}
          </Link>
        </motion.div>
      </div>
      
      <div className={styles.heroVisual}>
        <div className={styles.blob}></div>
        <div className={styles.floatingCard}>
          <img src="/images/events/637472601_122175513800680217_906934261749656364_n.jpg" alt="ENISo Code Clash 2026" className={styles.cardImage} />
          <div className={styles.cardHeader}>Next Event</div>
          <div className={styles.cardTitle}>ENISo Code Clash</div>
          <div className={styles.cardFooter}>April 2026</div>
        </div>
      </div>
    </section>
  );
}
