'use client';

import styles from './contact.module.css';
import {Send} from 'lucide-react';
import {useTranslations} from 'next-intl';

export default function ContactClient() {
  const t = useTranslations('Contact');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Add form submission logic (email service, database, etc.)
    alert('Thank you for your message! We will get back to you soon.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <div className={styles.field}>
          <label>{t('form_name')}</label>
          <input type="text" placeholder="Your Name" required />
        </div>
        <div className={styles.field}>
          <label>{t('form_email')}</label>
          <input type="email" placeholder="Your Email" required />
        </div>
      </div>
      <div className={styles.field}>
        <label>{t('form_subject')}</label>
        <input type="text" placeholder="Subject" required />
      </div>
      <div className={styles.field}>
        <label>{t('form_message')}</label>
        <textarea rows={6} placeholder="How can we help you?" required></textarea>
      </div>
      <button type="submit" className={styles.submitBtn}>
        <Send size={18} /> {t('form_submit')}
      </button>
    </form>
  );
}
