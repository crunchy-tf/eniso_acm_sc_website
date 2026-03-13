import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './calendar.module.css';
import {Calendar as CalendarIcon, MapPin, Clock, Star} from 'lucide-react';
import {getTranslations} from 'next-intl/server';

export default async function Calendar() {
  const t = await getTranslations('Calendar');

  const events = [
    { title: 'National Hackathon', date: 'October 15-17', location: 'ENISo Campus', type: 'Flagship' },
    { title: 'AI Workshop', date: 'November 5', location: 'Amphi 1', type: 'Workshop' },
    { title: 'ICPC Practice', date: 'Every Wednesday', location: 'Lab 4', type: 'CP' },
    { title: 'Industry Talk', date: 'December 2', location: 'Online', type: 'Industry' },
  ];

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
            <div className={styles.spotlightBadge}>
              <Star size={16} /> {t('flagship_title')}
            </div>
            <div className={styles.spotlightContent}>
              <h2>ACM National Hackathon 2024</h2>
              <p>{t('flagship_subtitle')}</p>
              <div className={styles.eventMeta}>
                <span><CalendarIcon size={18} /> October 15-17</span>
                <span><MapPin size={18} /> ENISo, Sousse</span>
              </div>
              <button className={styles.registerBtn}>Register Now</button>
            </div>
          </div>
        </section>

        <section className={styles.events}>
          <div className={styles.sectionHeader}>
            <h2>{t('events_title')}</h2>
            <p>{t('events_subtitle')}</p>
          </div>

          <div className={styles.eventList}>
            {events.map((event, i) => (
              <div key={i} className={styles.eventItem}>
                <div className={styles.eventDate}>
                  <CalendarIcon size={24} />
                  <span>{event.date}</span>
                </div>
                <div className={styles.eventInfo}>
                  <h3>{event.title}</h3>
                  <div className={styles.eventMeta}>
                    <span><Clock size={16} /> {event.location}</span>
                    <span className={styles.badge}>{event.type}</span>
                  </div>
                </div>
                <button className={styles.detailsBtn}>Details</button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
