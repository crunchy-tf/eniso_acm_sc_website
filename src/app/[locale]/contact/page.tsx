import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './contact.module.css';
import { getTranslations } from 'next-intl/server';
import ContactClient from './ContactClient';

export default async function Contact() {
  const t = await getTranslations('Contact');

  const translations = {
    hero_title: t('hero_title'),
    hero_subtitle: t('hero_subtitle'),
    email_title: t('email_title'),
    phone_title: t('phone_title'),
    address_title: t('address_title'),
    address_value: t('address_value'),
    socials_title: t('socials_title'),
  };

  return (
    <div className={styles.container}>
      <Header />
      <ContactClient t={translations} />
      <Footer />
    </div>
  );
}
