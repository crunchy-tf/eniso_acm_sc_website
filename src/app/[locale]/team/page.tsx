import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './team.module.css';
import {getTranslations} from 'next-intl/server';

export default async function Team() {
  const t = await getTranslations('Team');

  const executiveBoard = [
    { roleKey: 'chair', title: 'Chair' },
    { roleKey: 'vice_chair', title: 'Vice Chair' },
    { roleKey: 'treasurer', title: 'Treasurer' },
    { roleKey: 'membership_chair', title: 'Membership Chair' },
    { roleKey: 'secretary', title: 'Secretary' },
    { roleKey: 'faculty_sponsor', title: 'Faculty Sponsor' },
  ];

  const directors = [
    { roleKey: 'events_director', title: 'Events & Logistics Director' },
    { roleKey: 'marketing_director', title: 'Marketing & Public Relations Director' },
    { roleKey: 'technical_director', title: 'Technical Director' },
    { roleKey: 'research_director', title: 'Research & Academia Director' },
    { roleKey: 'industry_director', title: 'Industry Liaison & Sponsorship Director' },
    { roleKey: 'cp_director', title: 'Competitive Programming Director' },
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
                <h3>{member.title}</h3>
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
                <h3>{member.title}</h3>
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
            <div className={styles.alumniCard}>{t('alumni_card_2023')}</div>
            <div className={styles.alumniCard}>{t('alumni_card_2022')}</div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
