import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './resources.module.css';
import {getTranslations} from 'next-intl/server';

export default async function Resources() {
  const t = await getTranslations('Resources');

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>{t('hero_title')}</h1>
          <p>{t('hero_subtitle')}</p>
        </section>

        <section className={styles.placeholder}>
          <div className={styles.placeholderCard}>
            <h2>{t('placeholder_section_title_1')}</h2>
            <p>{t('placeholder_section_desc_1')}</p>
          </div>
          <div className={styles.placeholderCard}>
            <h2>{t('placeholder_section_title_2')}</h2>
            <p>{t('placeholder_section_desc_2')}</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
