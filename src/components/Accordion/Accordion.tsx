'use client';

import {useState} from 'react';
import {ChevronDown} from 'lucide-react';
import styles from './Accordion.module.css';

interface AccordionProps {
  items: { question: string; answer: string }[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={styles.accordion}>
      {items.map((item, i) => (
        <div key={i} className={`${styles.item} ${openIndex === i ? styles.open : ''}`}>
          <button 
            className={styles.trigger}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span>{item.question}</span>
            <ChevronDown size={20} className={styles.icon} />
          </button>
          <div className={styles.content}>
            <div className={styles.contentInner}>
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
