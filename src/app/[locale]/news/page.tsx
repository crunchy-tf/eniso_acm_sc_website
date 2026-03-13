import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './news.module.css';
import {Calendar, User, ArrowRight} from 'lucide-react';
import Link from 'next/link';
import {getTranslations, getLocale} from 'next-intl/server';

export default async function News() {
  const t = await getTranslations('News');
  const locale = await getLocale();

  const articles = [
    {
      id: 1,
      title: 'ACM National Hackathon 2024',
      description: 'Join us for the biggest hackathon in the country. 48 hours of pure coding.',
      date: 'May 15, 2024',
      author: 'Admin',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80'
    },
    {
      id: 2,
      title: 'Workshop: Machine Learning with Python',
      description: 'A deep dive into Scikit-learn and TensorFlow for beginners.',
      date: 'April 20, 2024',
      author: 'SIG AI',
      image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=800&q=80'
    },
    {
      id: 3,
      title: 'ACM ICPC Regional Results',
      description: 'Our teams have achieved great results in the regional competition.',
      date: 'March 10, 2024',
      author: 'CP Corner',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80'
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
            <article key={article.id} className={styles.card}>
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
                <Link href={`/${locale}/news/${article.id}`} className={styles.readMore}>
                  Read More <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
