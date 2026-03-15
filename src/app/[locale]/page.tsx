import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Accordion from '@/components/Accordion/Accordion';
import Gallery from '@/components/Gallery/Gallery';
import HomeClient from './HomeClient';
import styles from './page.module.css';
import {ArrowRight} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {getTranslations, getLocale} from 'next-intl/server';

export default async function Home() {
  const t = await getTranslations('Index');
  const locale = await getLocale();

  const news = [
    { id: 1, title: 'Announcing the 2026 ENISo Code Clash', date: 'March 13, 2026', image: '/images/events/637472601_122175513800680217_906934261749656364_n.jpg' },
  ];

  const faqs = [
    { question: t('faq.q1'), answer: t('faq.a1') },
    { question: t('faq.q2'), answer: t('faq.a2') },
    { question: t('faq.q3'), answer: t('faq.a3') },
    { question: t('faq.q4'), answer: t('faq.a4') },
    { question: t('faq.q5'), answer: t('faq.a5') },
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
    heroCardHeader: t('hero_card_header'),
    heroCardTitle: t('hero_card_title'),
    heroCardFooter: t('hero_card_footer'),
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
              <span className={styles.statLabel}>{t('stats.members')}</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>50+</span>
              <span className={styles.statLabel}>{t('stats.events')}</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statValue}>10+</span>
              <span className={styles.statLabel}>{t('stats.sponsors')}</span>
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
                <Image
                  src="/images/sponsors/Association_for_Computing_Machinery_(ACM)_logo.svg.png"
                  alt="ACM Logo"
                  width={220}
                  height={80}
                  style={{ objectFit: 'contain' }}
                />
              </div>

              <div className={styles.whyACMBlock}>
                <h3>{t('why_acm_global_title')}</h3>
                <p>{t('why_acm_global_text')}</p>
              </div>

              <div className={styles.whyACMChapterLogo}>
                <Image
                  src="/images/logos/logo.jpg"
                  alt="ACM ENISo Student Chapter logo"
                  width={220}
                  height={80}
                  style={{ objectFit: 'contain' }}
                />
              </div>

              <div className={styles.whyACMBlock}>
                <h3>{t('why_acm_chapter_title')}</h3>
                <p>{t('why_acm_chapter_text')}</p>
                <p>{t('why_acm_chapter_followup')}</p>
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
            <p className={styles.newsSubtitle}>{t('news_subtitle')}</p>
            <div className={styles.newsGrid}>
              {news.map((item) => (
                <Link key={item.id} href={`/${locale}/news/${item.id}`} className={styles.newsCardLink}>
                  <article className={styles.newsCard}>
                    <Image
                    src={item.image}
                    alt={item.title}
                    width={450}
                    height={250}
                    style={{ objectFit: 'cover', width: '100%', height: '200px' }}
                  />
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
                  <Image
                    src={s.logo}
                    alt={s.name}
                    width={200}
                    height={80}
                    style={{ objectFit: 'contain', width: '100%', height: '100%' }}
                  />
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
