import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './calendar.module.css';
import {Calendar as CalendarIcon, MapPin, Star} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {getLocale, getTranslations} from 'next-intl/server';

export default async function Calendar() {
  const locale = await getLocale();
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
          <Link href={`/${locale}/news/1`} className={styles.spotlightLink}>
            <div className={styles.spotlightCard}>
              <div className={styles.spotlightImageWrapper}>
                <Image
                  src="/images/events/637472601_122175513800680217_906934261749656364_n.jpg"
                  alt="ENISo Code Clash 2026"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.spotlightBadge}>
                <Star size={16} /> {t('flagship_title')}
              </div>
              <div className={styles.spotlightContent}>
                <h2>{t('flagship_event_title')}</h2>
                <p>{t('flagship_event_description')}</p>
                <div className={styles.eventMeta}>
                  <span><CalendarIcon size={18} /> {t('flagship_event_date')}</span>
                  <span><MapPin size={18} /> {t('flagship_event_location')}</span>
                </div>
              </div>
            </div>
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
