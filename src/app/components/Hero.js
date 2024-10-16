// src/app/components/Hero.js
export default function Hero() {
  return (
    <section style={styles.hero}>
      <h1>Welcome to CardCraft</h1>
      <p>Your Flash Card Study Tool</p>
      {/* <button style={styles.button}>Create Your Own Cards</button> */}
    </section>
  );
}

const styles = {
  hero: {
    padding: '60px 20px',
    textAlign: 'center',
    backgroundColor: '#f7f8fa',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#0070f3',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
