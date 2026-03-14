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
    { id: 1, title: 'Announcing the 2026 ENISo Code Clash', date: 'March 13, 2026', image: '/images/events/637472601_122175513800680217_906934261749656364_n.jpg' },
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

        {/* Why ACM Section */}
        <section className={styles.whyACM}>
          <div className={styles.sectionInner}>
            <div className={styles.whyACMLogo}>
              <img src="/images/sponsors/Association_for_Computing_Machinery_(ACM)_logo.svg.png" alt="ACM Logo" />
            </div>
            <div className={styles.whyACMContent}>
              <h2>{t('why_acm_title')}</h2>
              <div className={styles.whyACMTexts}>
                <div className={styles.whyACMBlock}>
                  <h3>{t('why_acm_global_title')}</h3>
                  <p>{t('why_acm_global_text')}</p>
                </div>
                <div className={styles.whyACMBlock}>
                  <h3>{t('why_acm_chapter_title')}</h3>
                  <p>{t('why_acm_chapter_text')}</p>
                </div>
              </div>
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
                <Link key={item.id} href={`/${locale}/news/${item.id}`} className={styles.newsCardLink}>
                  <article className={styles.newsCard}>
                    <img src={item.image} alt={item.title} />
                    <div className={styles.newsContent}>
                      <span>{item.date}</span>
                      <h3>{item.title}</h3>
                    </div>
                  </article>
                </Link>
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
