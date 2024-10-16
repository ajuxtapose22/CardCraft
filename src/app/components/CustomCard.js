'use client';
import { useState } from 'react';
import styles from './CustomCard.module.css';

const CustomCard = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  
  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleAnswerChange = (event) => {
    setAnswer(event.target.value);
  };

  return (
    <div className={styles.card}>
      <h2>Sample Your Flashcard</h2>
      <input
        type="text"
        placeholder="Enter your question"
        value={question}
        onChange={handleQuestionChange}
        className={styles.input}
      />
      <input
        type="text"
        placeholder="Enter your answer"
        value={answer}
        onChange={handleAnswerChange}
        className={styles.input}
      />
      <div className={styles.displayCard}>
        <h3 className={styles.displayQuestion}>{question || "Your question will appear here."}</h3>
        <h4 className={styles.displayAnswer}>{answer || "Your answer will appear here."}</h4>
      </div>
    </div>
  );
};

export default CustomCard;
