// src/app/components/Cards.js
export default function Cards() {
  const cardsData = [
    { title: 'Card 1', description: 'This is the first card.' },
    { title: 'Card 2', description: 'This is the second card.' },
    { title: 'Card 3', description: 'This is the third card.' },
  ];

  return (
    <section className="cardsContainer">
      {cardsData.map((card, index) => (
        <div key={index} className="card">
          <h3>{card.title}</h3>
          <p>{card.description}</p>
        </div>
      ))}
    </section>
  );
}
