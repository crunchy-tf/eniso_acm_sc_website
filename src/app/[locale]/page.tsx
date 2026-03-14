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
    {
      question: 'What is ACM?',
      answer: 'The Association for Computing Machinery (ACM) is the world’s largest educational and scientific computing society. It connects students, researchers, and professionals in computer science and related fields.',
    },
    {
      question: 'What is an ACM Student Chapter?',
      answer: 'An ACM Student Chapter is a university-based organization that promotes learning, collaboration, and professional development in computing through events, workshops, and projects.',
    },
    {
      question: 'Do I have to be an engineering student at ENISo to join?',
      answer: 'Our chapter is open to students from all academic backgrounds who are interested in technology, programming, innovation, leadership, and teamwork. This includes students in the preparatory cycle, engineering cycle, bachelor\'s (license), master\'s, and PhD programs. You do not need to be a student at ENISo to join; all university students are welcome to participate.',
    },
    {
      question: 'Do I need to be an ACM member to participate?',
      answer: 'No, you do not need to be an official ACM member to attend or participate in our chapter’s activities. However, we strongly encourage students to become members of the official Association for Computing Machinery (ACM) to benefit from international resources, certifications, events, and professional opportunities. We are happy to guide you through the process and help you access all available benefits.',
    },
    {
      question: 'How can I become a member?',
      answer: 'To become a member of our chapter, please follow these steps:\n\n1. Complete the chapter registration form.\n\n2. Pay the required membership fee (if applicable).\n\n3. Attend a short interview with our team.\n\n4. Receive confirmation and officially join the chapter.\n\nOur membership form is open throughout the academic year, except during the summer break. We encourage interested students to apply when registrations are available.',
    },
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
            <h2 className={styles.whyACMTitle}>{t('why_acm_title')}</h2>
            <div className={styles.whyACMGrid}>
              <div className={styles.whyACMLogo}>
                <img src="/images/sponsors/Association_for_Computing_Machinery_(ACM)_logo.svg.png" alt="ACM Logo" />
              </div>

              <div className={styles.whyACMBlock}>
                <h3>{t('why_acm_global_title')}</h3>
                <p>{t('why_acm_global_text')}</p>
              </div>

              <div className={styles.whyACMChapterLogo}>
                <img src="/images/logos/logo.jpg" alt="ENISo ACM Student Chapter logo" />
              </div>

              <div className={styles.whyACMBlock}>
                <h3>{t('why_acm_chapter_title')}</h3>
                <p>
                  At ENISo, we transform bold ideas into real code, real events, and real impact. Through hack nights, mentorship, and hands-on projects that actually ship, we’re building the future of computing together. {' '}
                  <a
                    href="https://www.acm.org/chapters/find-a-chapter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.externalLink}
                  >
                    Find us on ACM.
                  </a>{' '}
                  Get involved, and be part of the team driving innovation forward.
                </p>
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
