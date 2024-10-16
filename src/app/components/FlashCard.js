'use client';
import { useState } from 'react';
import styles from './FlashCard.module.css';

const FlashCard = ({ question, answer }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped); 
  };

  return (
    <div className={styles.card} onClick={handleClick}>
      <div className={`${styles.content} ${flipped ? styles.flipped : ''}`}>
        <h3 className={styles.question}>
          {flipped ? answer : question}
        </h3>
      </div>
    </div>
  );
};

export default FlashCard;
