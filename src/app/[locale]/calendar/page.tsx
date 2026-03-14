import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './calendar.module.css';
import {Calendar as CalendarIcon, MapPin, Star} from 'lucide-react';
import {getTranslations} from 'next-intl/server';

export default async function Calendar() {
  const t = await getTranslations('Calendar');

  return (
    <div className={styles.container}>
      <Header />
      
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>{t('hero_title')}</h1>
          <p>{t('hero_subtitle')}</p>
        </section>

        <section className={styles.spotlight}>
          <div className={styles.spotlightCard}>
            <img src="/images/events/637472601_122175513800680217_906934261749656364_n.jpg" alt="ENISo Code Clash 2026" className={styles.spotlightImage} />
            <div className={styles.spotlightBadge}>
              <Star size={16} /> {t('flagship_title')}
            </div>
            <div className={styles.spotlightContent}>
              <h2>ENISo Code Clash 2026</h2>
              <p>Our annual coding competition. Compete, learn, and showcase your skills.</p>
              <div className={styles.eventMeta}>
                <span><CalendarIcon size={18} /> April 2026</span>
                <span><MapPin size={18} /> ENISo Campus, Sousse</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
