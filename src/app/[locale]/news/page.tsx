import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './news.module.css';
import {Calendar, User} from 'lucide-react';
import Link from 'next/link';
import {getLocale} from 'next-intl/server';

export default async function News() {
  const locale = await getLocale();

  const articles = [
    {
      id: 1,
      title: 'Announcing the 2026 ENISo Code Clash',
      description: 'Our annual coding competition. Compete, learn, and showcase your skills.',
      date: 'March 13, 2026',
      author: 'ENISo ACM',
      image: '/images/events/637472601_122175513800680217_906934261749656364_n.jpg'
    }
  ];

  return (
    <div className={styles.container}>
      <Header />
      
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>Latest News</h1>
          <p>Stay updated with our events, recaps, and tech tutorials.</p>
        </section>

        <section className={styles.grid}>
          {articles.map((article) => (
            <Link key={article.id} href={`/${locale}/news/${article.id}`} className={styles.cardLink}>
              <article className={styles.card}>
                <div className={styles.imageWrapper}>
                  <img src={article.image} alt={article.title} />
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
