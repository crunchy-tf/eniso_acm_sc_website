'use client';

import styles from './join.module.css';
import {useTranslations} from 'next-intl';

export default function JoinClient() {
  const t = useTranslations('Join');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Add form submission logic (database, email service, etc.)
    alert(t('alert_success'));
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label>{t('form_name')}</label>
        <input type="text" placeholder={t('placeholder_name')} required />
      </div>
      <div className={styles.field}>
        <label>{t('form_email')}</label>
        <input type="email" placeholder={t('placeholder_email')} required />
      </div>
      <div className={styles.field}>
        <label>{t('form_reason')}</label>
        <textarea rows={4} placeholder={t('placeholder_reason')} required></textarea>
      </div>
      <button type="submit" className={styles.submitBtn}>{t('form_submit')}</button>
    </form>
  );
}
