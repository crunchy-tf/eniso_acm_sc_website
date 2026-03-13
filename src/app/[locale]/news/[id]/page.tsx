import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './article.module.css';
import {Calendar, User, ArrowLeft} from 'lucide-react';
import Link from 'next/link';
import {getLocale} from 'next-intl/server';

// Sample article data - in a real app, this would come from a CMS or database
const articles: Record<number, {
  id: number;
  title: string;
  description: string;
  content: string;
  date: string;
  author: string;
  image: string;
}> = {
  1: {
    id: 1,
    title: 'Announcing the 2026 ENISo Code Clash',
    description: 'Our annual coding competition. Compete, learn, and showcase your skills.',
    content: `
      <p>We're excited to announce the 2026 ENISo Code Clash, our premier annual coding competition bringing together talented programmers from across the university.</p>
      
      <h3>About the Competition</h3>
      <p>The Code Clash is a competitive programming event where teams battle it out to solve algorithmic challenges under time pressure. Whether you&apos;re a seasoned competitive programmer or trying it for the first time, this is your chance to test your skills, learn from others, and win amazing prizes.</p>
    `,
    date: 'March 13, 2026',
    author: 'ENISo ACM',
    image: '/images/events/637472601_122175513800680217_906934261749656364_n.jpg'
  },
};

export default async function ArticlePage({ params }: { params: Promise<{ id: string; locale: string }> }) {
  const locale = await getLocale();
  const { id } = await params;
  const articleId = parseInt(id);
  const article = articles[articleId];

  if (!article) {
    return (
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <div className={styles.notFound}>
            <h1>Article Not Found</h1>
            <p>Sorry, we couldn&apos;t find the article you&apos;re looking for.</p>
            <Link href={`/${locale}/news`} className={styles.backLink}>
              <ArrowLeft size={18} /> Back to News
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Header />
      
      <main className={styles.main}>
        <Link href={`/${locale}/news`} className={styles.backLink}>
          <ArrowLeft size={18} /> Back to News
        </Link>

        <article className={styles.article}>
          <div className={styles.imageWrapper}>
            <img src={article.image} alt={article.title} />
          </div>

          <div className={styles.content}>
            <h1>{article.title}</h1>
            
            <div className={styles.meta}>
              <span><Calendar size={16} /> {article.date}</span>
              <span><User size={16} /> {article.author}</span>
            </div>

            <div className={styles.body} dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>
        </article>

        <div className={styles.footer}>
          <Link href={`/${locale}/news`} className={styles.backLink}>
            <ArrowLeft size={18} /> Back to All Articles
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
