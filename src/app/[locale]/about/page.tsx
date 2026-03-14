import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './about.module.css';
import {Users, Code2, Briefcase, BookOpen, Command} from 'lucide-react';
import {getTranslations} from 'next-intl/server';

export default async function About() {
  const t = await getTranslations('About');

  const pillars = [
    {
      icon: Users,
      title: t('pillars.community.title'),
      text: t('pillars.community.text'),
    },
    {
      icon: Code2,
      title: t('pillars.technical.title'),
      text: t('pillars.technical.text'),
    },
    {
      icon: Briefcase,
      title: t('pillars.industry.title'),
      text: t('pillars.industry.text'),
    },
    {
      icon: BookOpen,
      title: t('pillars.academic.title'),
      text: t('pillars.academic.text'),
    },
    {
      icon: Command,
      title: t('pillars.competitive.title'),
      text: t('pillars.competitive.text'),
    },
  ];

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>{t('hero_title')}</h1>
          <p className={styles.heroSubtitle}>{t('hero_subtitle')}</p>
          <p className={styles.heroIntro}>{t('hero_intro')}</p>
        </section>

        <section className={styles.pillars}>
          {pillars.map(({icon: Icon, title, text}) => (
            <article key={title} className={styles.card}>
              <div className={styles.iconWrapper}>
                <Icon size={32} />
              </div>
              <h2>{title}</h2>
              <p>{text}</p>
              {title === t('pillars.competitive.title') && (
                <ul className={styles.competitionList}>
                  <li>{t('pillars.competitive.list.tcpc')}</li>
                  <li>{t('pillars.competitive.list.acpc')}</li>
                  <li>{t('pillars.competitive.list.icpc')}</li>
                </ul>
              )}
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
