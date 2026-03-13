'use client';

import { motion } from 'framer-motion';
import styles from './Gallery.module.css';

interface GalleryClientProps {
  images: string[];
}

export default function GalleryClient({ images }: GalleryClientProps) {
  if (images.length === 0) return null;

  // Split images into two rows
  const row1 = images.slice(0, Math.ceil(images.length / 2));
  const row2 = images.slice(Math.ceil(images.length / 2));

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.marquee}>
        <motion.div 
          className={styles.track}
          animate={{ x: [0, -3000] }}
          transition={{ 
            duration: 60, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {row1.map((src, i) => (
            <div key={i} className={styles.imageBox}>
              <img src={src} alt="Chapter Life" />
            </div>
          ))}
          {row1.map((src, i) => (
            <div key={`dup1-${i}`} className={styles.imageBox}>
              <img src={src} alt="Chapter Life" />
            </div>
          ))}
        </motion.div>
      </div>

      <div className={styles.marquee}>
        <motion.div 
          className={styles.track}
          animate={{ x: [-3000, 0] }}
          transition={{ 
            duration: 70, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          {row2.map((src, i) => (
            <div key={i} className={styles.imageBox}>
              <img src={src} alt="Chapter Life" />
            </div>
          ))}
          {row2.map((src, i) => (
            <div key={`dup2-${i}`} className={styles.imageBox}>
              <img src={src} alt="Chapter Life" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
