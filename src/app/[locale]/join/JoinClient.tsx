'use client';

import styles from './join.module.css';

export default function JoinClient() {
  return (
    <form className={styles.form}>
      <div className={styles.field}>
        <label>Full Name</label>
        <input type="text" placeholder="John Doe" />
      </div>
      <div className={styles.field}>
        <label>Email Address</label>
        <input type="email" placeholder="john@example.com" />
      </div>
      <div className={styles.field}>
        <label>Why do you want to join?</label>
        <textarea rows={4} placeholder="Tell us about your interest in computing..."></textarea>
      </div>
      <button type="submit" className={styles.submitBtn}>Apply Now</button>
    </form>
  );
}
