import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './article.module.css';
import {Calendar, User, ArrowLeft} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {getLocale, getTranslations} from 'next-intl/server';

export default async function ArticlePage(props: unknown) {
  const { params } = props as { params: Promise<{ id: string; locale: string }> };
  const { id } = await params;
  const locale = await getLocale();
  const t = await getTranslations('News');

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
      title: t('article_1_title'),
      description: t('article_1_description'),
      content: `
      <p>We're excited to announce the 2026 ENISo Code Clash, our premier annual coding competition bringing together talented programmers from across the university.</p>
      
      <h3>About the Competition</h3>
      <p>The Code Clash is a competitive programming event where teams battle it out to solve algorithmic challenges under time pressure. Whether you&apos;re a seasoned competitive programmer or trying it for the first time, this is your chance to test your skills, learn from others, and win amazing prizes.</p>
    `,
      date: t('article_1_date'),
      author: t('article_1_author'),
      image: '/images/events/637472601_122175513800680217_906934261749656364_n.jpg'
    },
  };

  const article = articles[Number(id)];

  if (!article) {
    return (
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>
          <div className={styles.notFound}>
            <h1>{t('article_not_found_title')}</h1>
            <p>{t('article_not_found_desc')}</p>
            <Link href={`/${locale}/news`} className={styles.backLink}>
              <ArrowLeft size={18} /> {t('back_to_news')}
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
          <ArrowLeft size={18} /> {t('back_to_news')}
        </Link>

        <article className={styles.article}>
          <div className={styles.imageWrapper}>
            <Image
              src={article.image}
              alt={article.title}
              width={900}
              height={450}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
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
            <ArrowLeft size={18} /> {t('back_to_all_articles')}
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
