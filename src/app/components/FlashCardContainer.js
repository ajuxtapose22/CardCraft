"use client";
import FlashCard from "./FlashCard";
import styles from "./FlashCardContainer.module.css";

const FlashCardContainer = () => {
  const flashcards = [
    {
      question: "What is the capital of France?",
      answer: "The capital is Paris.",
    },
    { question: "What is 2 + 2?", answer: "The answer is 4." },
    {
      question: "What is the capital of Japan?",
      answer: "The capital is Tokyo.",
    },
  ];

  return (
    <div className={styles.container}>
      <h2>Example Cards Below</h2>
      {flashcards.map((card, index) => (
        <FlashCard key={index} question={card.question} answer={card.answer} />
      ))}
    </div>
  );
};

export default FlashCardContainer;
