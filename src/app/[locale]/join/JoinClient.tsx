'use client';

import styles from './join.module.css';
import {useTranslations} from 'next-intl';

export default function JoinClient() {
  const t = useTranslations('Join');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Add form submission logic (database, email service, etc.)
    alert('Thank you for applying! We will review your application and get back to you soon.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label>{t('form_name')}</label>
        <input type="text" placeholder="John Doe" required />
      </div>
      <div className={styles.field}>
        <label>{t('form_email')}</label>
        <input type="email" placeholder="john@example.com" required />
      </div>
      <div className={styles.field}>
        <label>{t('form_reason')}</label>
        <textarea rows={4} placeholder="Tell us about your interest in computing..." required></textarea>
      </div>
      <button type="submit" className={styles.submitBtn}>{t('form_submit')}</button>
    </form>
  );
}
