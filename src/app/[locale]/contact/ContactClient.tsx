'use client';

import { motion } from 'framer-motion';
import { MapPin, Linkedin, Instagram, Facebook, Mail, Phone } from 'lucide-react';
import styles from './contact.module.css';

interface ContactClientProps {
  t: {
    hero_title: string;
    hero_subtitle: string;
    email_title: string;
    phone_title: string;
    address_title: string;
    address_value: string;
    socials_title: string;
  };
}

export default function ContactClient({ t }: ContactClientProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.main 
      className={styles.main}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className={styles.blob}></div>
      
      <section className={styles.hero}>
        <motion.h1 variants={itemVariants}>{t.hero_title}</motion.h1>
        <motion.p variants={itemVariants}>{t.hero_subtitle}</motion.p>
      </section>

      <div className={styles.content}>
        <div className={styles.infoSection}>
          <motion.a 
            href="mailto:eniso.acm.studentchapter@gmail.com" 
            className={styles.infoCard}
            variants={itemVariants}
          >
            <div className={styles.iconWrapper}>
              <Mail size={24} />
            </div>
            <div className={styles.infoText}>
              <h3>{t.email_title}</h3>
              <p>eniso.acm.studentchapter@gmail.com</p>
            </div>
          </motion.a>

          <motion.a 
            href="tel:+21653003253" 
            className={styles.infoCard}
            variants={itemVariants}
          >
            <div className={styles.iconWrapper}>
              <Phone size={24} />
            </div>
            <div className={styles.infoText}>
              <h3>{t.phone_title}</h3>
              <p>+216 53003253</p>
            </div>
          </motion.a>

          <motion.div className={styles.infoCard} variants={itemVariants}>
            <div className={styles.iconWrapper}>
              <MapPin size={24} />
            </div>
            <div className={styles.infoText}>
              <h3>{t.address_title}</h3>
              <span>{t.address_value}</span>
            </div>
          </motion.div>
        </div>

        <motion.section className={styles.socialSection} variants={itemVariants}>
          <div className={styles.socialHeader}>
            <h2>{t.socials_title}</h2>
            <p>Connect with us on our social platforms for the latest updates and events.</p>
          </div>
          
          <div className={styles.socialGrid}>
            <a href="https://www.linkedin.com/company/club-acm-eniso/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <Linkedin size={32} />
              <span>LinkedIn</span>
            </a>
            <a href="https://www.instagram.com/acm_eniso/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <Instagram size={32} />
              <span>Instagram</span>
            </a>
            <a href="https://www.facebook.com/club.acm.eniso/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <Facebook size={32} />
              <span>Facebook</span>
            </a>
          </div>
        </motion.section>
      </div>
    </motion.main>
  );
}
