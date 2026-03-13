'use client';

import styles from './contact.module.css';
import {Send} from 'lucide-react';

export default function ContactClient() {
  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <div className={styles.field}>
          <label>Name</label>
          <input type="text" placeholder="Your Name" />
        </div>
        <div className={styles.field}>
          <label>Email</label>
          <input type="email" placeholder="Your Email" />
        </div>
      </div>
      <div className={styles.field}>
        <label>Subject</label>
        <input type="text" placeholder="Subject" />
      </div>
      <div className={styles.field}>
        <label>Message</label>
        <textarea rows={6} placeholder="How can we help you?"></textarea>
      </div>
      <button type="submit" className={styles.submitBtn}>
        <Send size={18} /> Send Message
      </button>
    </form>
  );
}
