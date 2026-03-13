import {useTranslations} from 'next-intl';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Accordion from '@/components/Accordion/Accordion';
import Gallery from '@/components/Gallery/Gallery';
import HomeClient from './HomeClient';
import styles from './page.module.css';
import {ArrowRight} from 'lucide-react';
import Link from 'next/link';
import {getTranslations, getLocale} from 'next-intl/server';

export default async function Home() {
  const t = await getTranslations('Index');
  const locale = await getLocale();

  const news = [
    { id: 1, title: 'ACM National Hackathon 2024', date: 'May 15, 2024', image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&q=80' },
    { id: 2, title: 'Workshop: Machine Learning', date: 'April 20, 2024', image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&q=80' },
    { id: 3, title: 'ACM ICPC Regional Results', date: 'March 10, 2024', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80' },
  ];

  const faqs = [
    { question: 'What is ACM?', answer: 'The Association for Computing Machinery is the world\'s largest educational and scientific computing society.' },
    { question: 'How can I join the ENISo ACM chapter?', answer: 'You can join by filling out the application form on our "Join Us" page during recruitment seasons.' },
    { question: 'Do I need to be a CS student?', answer: 'While most members are from CS, we welcome students from all engineering backgrounds at ENISo who are passionate about computing.' },
  ];

  const sponsors = [
    { name: 'ENISo', logo: '/images/sponsors/Logo_ENISo,_Tunisie.svg.png' },
    { name: 'ACM Global', logo: '/images/sponsors/Association_for_Computing_Machinery_(ACM)_logo.svg.png' },
    { name: 'Noccs', logo: '/images/sponsors/logo-noccs.jpg' },
    { name: 'Sponsor 1', logo: '/images/sponsors/277795708_345206280972064_1055197370320921910_n.png' },
    { name: 'Sponsor 2', logo: '/images/sponsors/294555116_447913770677425_4588056872084035494_n.png' },
    { name: 'Sponsor 3', logo: '/images/sponsors/329322128_596331872326049_1649995975510913202_n.jpg' },
    { name: 'Sponsor 4', logo: '/images/sponsors/3JGtYMUjBMXbVh5Dvai9.png' },
    { name: 'Sponsor 5', logo: '/images/sponsors/465403518_968069545353885_9198211332521103769_n.jpg' },
  ];

  const heroData = {
    title: t('title'),
    description: t('description'),
    cta: t('cta'),
    upcoming: t('upcoming'),
  };

  return (
    <div className={styles.container}>
      <Header />
      
      <main>
        {/* Hero Section */}
        <HomeClient locale={locale} t={heroData} />

        {/* Hype Banner */}
        <section className={styles.hype}>
          <div className={styles.statsGrid}>
            <div className={styles.stat}>
              <span className={styles.statValue}>500+</span>
              <span className={styles.statLabel}>Members</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>50+</span>
              <span className={styles.statLabel}>Events</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>10+</span>
              <span className={styles.statLabel}>Sponsors</span>
            </div>
          </div>
        </section>

        {/* Community Gallery */}
        <Gallery />

        {/* Elevator Pitch */}
        <section className={styles.pitch}>
          <div className={styles.sectionInner}>
            <div className={styles.pitchText}>
              <h2>{t('pitch_title')}</h2>
              <p>{t('pitch_text')}</p>
              <Link href={`/${locale}/about`} className={styles.textLink}>
                {t('pitch_link')} <ArrowRight size={18} />
              </Link>
            </div>
            <div className={styles.pitchImage}>
              <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80" alt="Team Work" />
            </div>
          </div>
        </section>

        {/* Latest News */}
        <section className={styles.news}>
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeader}>
              <h2>{t('news_title')}</h2>
              <Link href={`/${locale}/news`}>{t('news_view_all')} <ArrowRight size={18} /></Link>
            </div>
            <div className={styles.newsGrid}>
              {news.map((item) => (
                <article key={item.id} className={styles.newsCard}>
                  <img src={item.image} alt={item.title} />
                  <div className={styles.newsContent}>
                    <span>{item.date}</span>
                    <h3>{item.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Sponsors Carousel */}
        <section className={styles.sponsors}>
          <div className={styles.sectionInner}>
            <h2>{t('sponsors_title')}</h2>
            <div className={styles.sponsorGrid}>
              {sponsors.map((s, i) => (
                <div key={i} className={styles.sponsorCard}>
                  <img src={s.logo} alt={s.name} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.faq}>
          <div className={styles.sectionInner}>
            <div className={styles.faqGrid}>
              <div className={styles.faqTitle}>
                <h2>{t('faq_title')}</h2>
                <p>{t('faq_subtitle')}</p>
              </div>
              <div className={styles.faqContent}>
                <Accordion items={faqs} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
