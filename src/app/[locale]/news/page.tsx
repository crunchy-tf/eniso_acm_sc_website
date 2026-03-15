import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './news.module.css';
import {Calendar, User} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {getLocale, getTranslations} from 'next-intl/server';

export default async function News() {
  const locale = await getLocale();
  const t = await getTranslations('News');

  const articles = [
    {
      id: 1,
      title: t('article_1_title'),
      description: t('article_1_description'),
      date: t('article_1_date'),
      author: t('article_1_author'),
      image: '/images/events/637472601_122175513800680217_906934261749656364_n.jpg'
    }
  ];

  return (
    <div className={styles.container}>
      <Header />
      
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>{t('news_title')}</h1>
          <p>{t('news_subtitle')}</p>
        </section>

        <section className={styles.grid}>
          {articles.map((article) => (
            <Link key={article.id} href={`/${locale}/news/${article.id}`} className={styles.cardLink}>
              <article className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={450}
                    height={250}
                    style={{ objectFit: 'cover', width: '100%', height: '200px' }}
                  />
                </div>
                <div className={styles.content}>
                  <div className={styles.meta}>
                    <span><Calendar size={14} /> {article.date}</span>
                    <span><User size={14} /> {article.author}</span>
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                </div>
              </article>
            </Link>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
