import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './join.module.css';
import {CheckCircle2, ArrowRight} from 'lucide-react';
import {getTranslations} from 'next-intl/server';
import JoinClient from './JoinClient';

export default async function JoinUs() {
  const t = await getTranslations('Join');

  const benefits = [
    { title: 'Networking', desc: 'Connect with industry professionals and global ACM members.' },
    { title: 'Skill Building', desc: 'Participate in hands-on workshops and technical projects.' },
    { title: 'Recognition', desc: 'Gain official certificates and boost your resume.' },
  ];

  const steps = [
    { title: 'Application', desc: 'Fill out the form below.' },
    { title: 'Review', desc: 'Our board will review your profile.' },
    { title: 'Welcome', desc: 'Join our Discord and start contributing.' },
  ];

  return (
    <div className={styles.container}>
      <Header />
      
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>{t('hero_title')}</h1>
          <p>{t('hero_subtitle')}</p>
        </section>

        <section className={styles.section}>
          <h2>{t('why_title')}</h2>
          <div className={styles.benefitGrid}>
            {benefits.map((b, i) => (
              <div key={i} className={styles.benefitCard}>
                <CheckCircle2 color="var(--primary)" size={24} />
                <div className={styles.benefitText}>
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>{t('process_title')}</h2>
          <div className={styles.timeline}>
            {steps.map((s, i) => (
              <div key={i} className={styles.step}>
                <div className={styles.stepHeader}>
                  <span className={styles.stepNumber}>{i + 1}</span>
                  <h3>{s.title}</h3>
                </div>
                <p>{s.desc}</p>
                {i < steps.length - 1 && <ArrowRight className={styles.arrow} size={24} />}
              </div>
            ))}
          </div>
        </section>

        <section className={styles.formSection}>
          <h2>{t('form_title')}</h2>
          <p className={styles.formSubtitle}>{t('form_subtitle')}</p>
          <JoinClient />
        </section>
      </main>

      <Footer />
    </div>
  );
}
