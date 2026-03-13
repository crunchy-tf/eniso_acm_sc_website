import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './team.module.css';
import {getTranslations} from 'next-intl/server';

export default async function Team() {
  const t = await getTranslations('Team');

  const executiveBoard = [
    { roleKey: 'chair', name: 'Chair Person' },
    { roleKey: 'vice_chair', name: 'Vice Chair Person' },
    { roleKey: 'treasurer', name: 'Treasurer Name' },
    { roleKey: 'membership_chair', name: 'Membership Chair Name' },
    { roleKey: 'secretary', name: 'Secretary Name' },
    { roleKey: 'faculty_sponsor', name: 'Faculty Name' },
  ];

  const directors = [
    { roleKey: 'events_director', name: 'Events Director' },
    { roleKey: 'marketing_director', name: 'Marketing Director' },
    { roleKey: 'technical_director', name: 'Technical Director' },
    { roleKey: 'research_director', name: 'Research Director' },
    { roleKey: 'industry_director', name: 'Industry Director' },
    { roleKey: 'cp_director', name: 'CP Director' },
  ];

  const members = [
    { id: 1, name: 'Member 1' },
    { id: 2, name: 'Member 2' },
    { id: 3, name: 'Member 3' },
    { id: 4, name: 'Member 4' },
    { id: 5, name: 'Member 5' },
    { id: 6, name: 'Member 6' },
  ];

  return (
    <div className={styles.container}>
      <Header />
      
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>{t('hero_title')}</h1>
          <p>{t('hero_subtitle')}</p>
        </section>

        <section className={styles.section}>
          <h2>{t('board_title')}</h2>
          <div className={styles.roleGrid}>
            {executiveBoard.map((member) => (
              <div key={member.roleKey} className={styles.roleCard}>
                <div className={styles.imagePlaceholder}></div>
                <h3>{member.name}</h3>
                <span className={styles.roleLabel}>{member.roleKey.replace('_', ' ').toUpperCase()}</span>
                <p>{t(`roles.${member.roleKey}`)}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>{t('directors_title')}</h2>
          <div className={styles.roleGrid}>
            {directors.map((member) => (
              <div key={member.roleKey} className={styles.roleCard}>
                <div className={styles.imagePlaceholder}></div>
                <h3>{member.name}</h3>
                <span className={styles.roleLabel}>{member.roleKey.replace('_', ' ').toUpperCase()}</span>
                <p>{t(`roles.${member.roleKey}`)}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>{t('members_title')}</h2>
          <div className={styles.memberGrid}>
            {members.map((member) => (
              <div key={member.id} className={styles.memberCard}>
                <div className={styles.memberImage}></div>
                <h3>{member.name}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.alumni}>
          <h2>{t('alumni_title')}</h2>
          <p>{t('alumni_subtitle')}</p>
          <div className={styles.alumniGrid}>
            <div className={styles.alumniCard}>Class of 2023 - Google, Meta, Microsoft</div>
            <div className={styles.alumniCard}>Class of 2022 - Amazon, Netflix, Apple</div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
