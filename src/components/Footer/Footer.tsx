'use client';

import {useTranslations} from 'next-intl';
import Link from 'next/link';
import {Facebook, Instagram, Linkedin, Mail, MapPin, Phone, ArrowUp} from 'lucide-react';
import styles from './Footer.module.css';
import {useLocale} from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  const locale = useLocale();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.info}>
            <h3 className={styles.logo}>ENISo ACM</h3>
            <p className={styles.description}>
              {t('description')}
            </p>
            <div className={styles.socials}>
              <a href="https://www.linkedin.com/company/club-acm-eniso/" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
              <a href="https://www.instagram.com/acm_eniso/" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
              <a href="https://www.facebook.com/club.acm.eniso/" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>
            </div>
          </div>

          <div className={styles.links}>
            <h4>{t('quick_links')}</h4>
            <ul>
              <li><Link href={`/${locale}`}>{t('home')}</Link></li>
              <li><Link href={`/${locale}/about`}>{t('about')}</Link></li>
              <li><Link href={`/${locale}/calendar`}>{t('calendar')}</Link></li>
              <li><Link href={`/${locale}/team`}>{t('team')}</Link></li>
              <li><Link href={`/${locale}/resources`}>{t('resources')}</Link></li>
              <li><Link href={`/${locale}/news`}>{t('news')}</Link></li>
              <li><Link href={`/${locale}/join`}>{t('join')}</Link></li>
              <li><Link href={`/${locale}/contact`}>{t('contact')}</Link></li>
            </ul>
          </div>

          <div className={styles.contact}>
            <h4>{t('contact_us')}</h4>
            <ul>
              <li><MapPin size={18} /> {t('location')}</li>
              <li><Mail size={18} /> {t('email')}</li>
              <li><Phone size={18} /> {t('phone')}</li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>{t('copyright', { year: new Date().getFullYear() })}</p>
          <button
            onClick={scrollToTop}
            className={styles.backToTop}
            aria-label={t('scroll_top')}
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
