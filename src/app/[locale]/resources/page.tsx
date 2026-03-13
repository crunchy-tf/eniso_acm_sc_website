import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './resources.module.css';
import {Github, Presentation, Trophy} from 'lucide-react';
import {getTranslations} from 'next-intl/server';

export default async function Resources() {
  const t = await getTranslations('Resources');

  const projects = [
    { name: 'Chapter Website', desc: 'The very site you are on. Built with Next.js.', link: 'https://github.com' },
    { name: 'Member Portal', desc: 'Internal tool for managing membership and events.', link: 'https://github.com' },
  ];

  const workshops = [
    { name: 'Intro to React', date: 'Sept 2023', type: 'Slides & Code' },
    { name: 'Docker 101', date: 'Oct 2023', type: 'Video Recording' },
  ];

  return (
    <div className={styles.container}>
      <Header />
      
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>{t('hero_title')}</h1>
          <p>{t('hero_subtitle')}</p>
        </section>

        <section className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <Github size={32} />
              <h2>{t('projects_title')}</h2>
            </div>
            <p>{t('projects_subtitle')}</p>
            <div className={styles.itemList}>
              {projects.map((p, i) => (
                <div key={i} className={styles.item}>
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  <a href={p.link} className={styles.link}>View Repository</a>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <Presentation size={32} />
              <h2>{t('workshops_title')}</h2>
            </div>
            <p>{t('workshops_subtitle')}</p>
            <div className={styles.itemList}>
              {workshops.map((w, i) => (
                <div key={i} className={styles.item}>
                  <h3>{w.name}</h3>
                  <p>{w.date} - {w.type}</p>
                  <a href="https://github.com" className={styles.link}>Access Archive</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.cpCorner}>
          <div className={styles.cpHeader}>
            <Trophy size={48} />
            <h2>{t('cp_title')}</h2>
          </div>
          <p>{t('cp_subtitle')}</p>
          <div className={styles.cpContent}>
            <div className={styles.cpBox}>
              <h3>ICPC Resources</h3>
              <ul>
                <li>Algorithms Bible</li>
                <li>Practice Problems List</li>
                <li>Weekly Training Schedule</li>
              </ul>
            </div>
            <div className={styles.cpBox}>
              <h3>Leaderboard</h3>
              <p>Check out our top competitive programmers on Codeforces.</p>
              <button className={styles.viewBtn}>View Rankings</button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
