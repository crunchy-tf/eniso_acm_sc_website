'use client';

import {useTranslations} from 'next-intl';
import Link from 'next/link';
import {Facebook, Instagram, Linkedin, Twitter, Github, Mail, MapPin, Phone, ArrowUp} from 'lucide-react';
import styles from './Footer.module.css';
import {useLocale} from 'next-intl';

export default function Footer() {
  const t = useTranslations('Navigation');
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
              Official Chartered ACM Student Chapter at the National School of Engineers of Sousse.
            </p>
            <div className={styles.socials}>
              <a href="#"><Linkedin size={20} /></a>
              <a href="#"><Instagram size={20} /></a>
              <a href="#"><Facebook size={20} /></a>
              <a href="#"><Twitter size={20} /></a>
              <a href="#"><Github size={20} /></a>
            </div>
          </div>

          <div className={styles.links}>
            <h4>Quick Links</h4>
            <ul>
              <li><Link href={`/${locale}/about`}>{t('about')}</Link></li>
              <li><Link href={`/${locale}/calendar`}>{t('calendar')}</Link></li>
              <li><Link href={`/${locale}/team`}>{t('team')}</Link></li>
              <li><Link href={`/${locale}/news`}>{t('news')}</Link></li>
            </ul>
          </div>

          <div className={styles.contact}>
            <h4>Contact Us</h4>
            <ul>
              <li><MapPin size={18} /> ENISo, Sousse, Tunisia</li>
              <li><Mail size={18} /> contact@eniso-acm.org</li>
              <li><Phone size={18} /> +216 73 369 500</li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} ENISo ACM Student Chapter. All rights reserved.</p>
          <button onClick={scrollToTop} className={styles.backToTop}>
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
