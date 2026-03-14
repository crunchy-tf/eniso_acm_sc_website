import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './resources.module.css';

export default function Resources() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <section className={styles.hero}>
          <h1>Resources (Coming Soon)</h1>
          <p>We’re currently clearing out placeholder content. This page will be filled with valuable resources and guides soon.</p>
        </section>

        <section className={styles.placeholder}>
          <div className={styles.placeholderCard}>
            <h2>Why it’s hidden</h2>
            <p>We decided to remove the old placeholder content so we can rebuild this page with useful resources, workshops, and competitions that actually help members.</p>
          </div>
          <div className={styles.placeholderCard}>
            <h2>What’s next</h2>
            <p>We’ll be adding learning paths, project templates, workshop recordings, and more as soon as we have high quality content ready to share.</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
