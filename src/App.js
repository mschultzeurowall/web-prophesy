import React, { useState, useEffect } from 'react';

const App = () => {
  const [fadeState, setFadeState] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState(prev => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>The Prophesy (Profsy)</h1>
        <p style={{ ...styles.subtitle, opacity: fadeState ? 1 : 0 }}>
          "The ancient prophecy foretells the arrival of a chosen one..."
        </p>
      </div>

      <div style={{ display: 'flex', gap: '50px', marginBottom: '50px', textDecoration: 'underline' }}>
        <a href="https://dexscreener.com/solana/FY84ZT1CfK1zKwpZVQoMaY1MMQp8jmnnxCxBRGSTpump" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
          DexScreener
        </a>
        <a href="https://t.me/theprophesysol" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
          Telegram
        </a>
        <a href="https://x.com/onlytheprophesy" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
          Twitter (X)
        </a>
      </div>

      <div style={styles.catContainer}>
        <div style={styles.cat}>
          <div style={styles.eyeContainer}>
            <div style={styles.eye}></div>
            <div style={styles.eye}></div>
            <div style={styles.eye}></div>
          </div>
        </div>
      </div>
      <p style={styles.footer}>
        A new era of peace and prosperity awaits...
      </p>

      <div style={styles.socialContainer}>
        <a href="https://dexscreener.com/solana/FY84ZT1CfK1zKwpZVQoMaY1MMQp8jmnnxCxBRGSTpump" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
          <i className="fas fa-chart-line" style={styles.icon}></i>
        </a>
        <a href="https://t.me/theprophesysol" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
          <i className="fab fa-telegram-plane" style={styles.icon}></i>
        </a>
        <a href="https://x.com/onlytheprophesy" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
          <i className="fab fa-twitter" style={styles.icon}></i>
        </a>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#0e0e0e',
    color: '#e0e0e0',
    fontFamily: 'sans-serif',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px'
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px'
  },
  title: {
    fontSize: '3em',
    margin: '0 0 10px 0',
    letterSpacing: '2px',
    textShadow: '0 0 10px #ff79c6'
  },
  subtitle: {
    fontSize: '1.2em',
    transition: 'opacity 2s ease-in-out',
    maxWidth: '500px',
    margin: '0 auto',
    lineHeight: '1.6em',
    color: '#c0c0c0',
    textAlign: 'center'
  },
  catContainer: {
    width: '200px',
    height: '200px',
    position: 'relative',
    marginBottom: '40px'
  },
  cat: {
    width: '100%',
    height: '100%',
    position: 'relative',
    borderRadius: '50%',
    background: 'radial-gradient(circle, #222 0%, #000 70%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  eyeContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '70%',
    position: 'relative'
  },
  eye: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    background: '#ff79c6',
    boxShadow: '0 0 10px #ff79c6, 0 0 20px #ff79c6',
    animation: 'glow 3s ease-in-out infinite alternate'
  },
  footer: {
    marginTop: '20px',
    fontStyle: 'italic',
    color: '#888',
    textShadow: '0 0 10px #ff79c6',
    textAlign: 'center'
  },
  socialContainer: {
    display: 'flex',
    gap: '20px',
    marginTop: '40px',
    justifyContent: 'center'
  },
  iconLink: {
    color: '#e0e0e0',
    fontSize: '1.5em',
    textDecoration: 'none'
  },
  icon: {
    transition: 'color 0.3s ease',
  }
};

// Keyframe for glowing eyes
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
@keyframes glow {
  0% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-3px) scale(1.1); }
  100% { transform: translateY(0) scale(1); }
}
`, styleSheet.cssRules.length);

export default App;