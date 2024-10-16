// src/app/components/Footer.js
export default function Footer() {
    return (
      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
      </footer>
    );
  }
  
  const styles = {
    footer: {
      padding: '20px',
      textAlign: 'center',
      backgroundColor: '#333',
      color: 'white',
    },
  };
  