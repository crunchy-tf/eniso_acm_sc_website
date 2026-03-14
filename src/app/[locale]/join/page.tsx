import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './join.module.css';
import {ArrowRight} from 'lucide-react';
import {getTranslations} from 'next-intl/server';

export default async function JoinUs() {
  const t = await getTranslations('Join');

  const steps = [
    { title: t('steps.application.title'), desc: t('steps.application.desc') },
    { title: t('steps.interview.title'), desc: t('steps.interview.desc') },
    { title: t('steps.payment.title'), desc: t('steps.payment.desc') },
    { title: t('steps.confirmation.title'), desc: t('steps.confirmation.desc') },
  ];

  const formUrl = 'https://forms.gle/ACCd7YVxE9YLRvtL6';

  return (
    <div className={styles.container}>
      <Header />
      
      <main className={styles.main}>
        <section className={styles.section}>
          <h2>{t('steps_title')}</h2>
          <p className={styles.stepsIntro}>{t('steps_intro')}</p>
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
          <p className={styles.stepsNote}>{t('membership_open_note')}</p>
        </section>

        <section className={styles.ctaSection}>
          <h2>{t('cta_title')}</h2>
          <p className={styles.ctaText}>{t('cta_text')}</p>
          <a
            href={formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            {t('cta_button')}
            <ArrowRight size={18} />
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
