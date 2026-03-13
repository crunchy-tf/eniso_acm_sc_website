import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './contact.module.css';
import {MapPin, Linkedin, Instagram, Facebook, Github} from 'lucide-react';
import {getTranslations} from 'next-intl/server';
import ContactClient from './ContactClient';

export default async function Contact() {
  const t = await getTranslations('Contact');

  const emails = [
    { label: 'General Inquiries', email: 'contact@eniso-acm.org' },
    { label: 'Sponsorship', email: 'sponsorship@eniso-acm.org' },
    { label: 'Technical Support', email: 'tech@eniso-acm.org' },
  ];

  return (
    <div className={styles.container}>
      <Header />
      
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>{t('hero_title')}</h1>
          <p>{t('hero_subtitle')}</p>
        </section>

        <div className={styles.grid}>
          <section className={styles.formSection}>
            <h2>{t('form_title')}</h2>
            <ContactClient />
          </section>

          <section className={styles.infoSection}>
            <div className={styles.infoGroup}>
              <h2>{t('emails_title')}</h2>
              <ul className={styles.emailList}>
                {emails.map((e, i) => (
                  <li key={i}>
                    <strong>{e.label}:</strong>
                    <a href={`mailto:${e.email}`}>{e.email}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.infoGroup}>
              <h2>{t('location_title')}</h2>
              <div className={styles.location}>
                <MapPin size={24} color="var(--primary)" />
                <p>National School of Engineers of Sousse (ENISo)<br />Technopole de Sousse, Tunisia</p>
              </div>
            </div>

            <div className={styles.infoGroup}>
              <h2>{t('socials_title')}</h2>
              <div className={styles.socialGrid}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin size={24} /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram size={24} /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook size={24} /></a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer"><Github size={24} /></a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
