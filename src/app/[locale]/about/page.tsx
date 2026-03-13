import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './about.module.css';
import {Target, Globe, Users, History} from 'lucide-react';
import {getTranslations} from 'next-intl/server';

export default async function About() {
  const t = await getTranslations('About');

  return (
    <div className={styles.container}>
      <Header />
      
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>{t('hero_title')}</h1>
          <p>{t('hero_subtitle')}</p>
        </section>

        <div className={styles.content}>
          <section className={styles.section}>
            <div className={styles.iconWrapper}><Target size={32} /></div>
            <div className={styles.text}>
              <h2>{t('mission_title')}</h2>
              <p>{t('mission_text')}</p>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.iconWrapper}><Globe size={32} /></div>
            <div className={styles.text}>
              <h2>{t('acm_title')}</h2>
              <p>{t('acm_text')}</p>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.iconWrapper}><Users size={32} /></div>
            <div className={styles.text}>
              <h2>{t('sigs_title')}</h2>
              <p>{t('sigs_text')}</p>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.iconWrapper}><History size={32} /></div>
            <div className={styles.text}>
              <h2>{t('history_title')}</h2>
              <p>{t('history_text')}</p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
