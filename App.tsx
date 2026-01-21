
import React, { useState } from 'react';
import Home from './components/Home';
import FastPayment from './components/FastPayment';
import Consultancy from './components/Consultancy';
import './styles.css';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'fastpay' | 'consultancy'>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home onNavigate={setCurrentPage} />;
      case 'fastpay': return <FastPayment />;
      case 'consultancy': return <Consultancy />;
      default: return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="pks-app">
      <nav className="pks-nav">
        <div className="pks-nav__logo" onClick={() => setCurrentPage('home')}>
          PACKENGERS <span style={{color: 'var(--pks-color-secondary)'}}>+</span>
        </div>
        <div className="pks-nav__links">
          <button className="pks-nav__link bg-transparent border-none cursor-pointer" onClick={() => setCurrentPage('home')}>Inicio</button>
          <button className="pks-nav__link bg-transparent border-none cursor-pointer" onClick={() => setCurrentPage('fastpay')}>Fast Payment</button>
          <button className="pks-nav__link bg-transparent border-none cursor-pointer" onClick={() => setCurrentPage('consultancy')}>Consultoría</button>
        </div>
      </nav>

      <main>
        {renderPage()}
      </main>

      <footer className="bg-[#002244] text-white py-8 text-center mt-20">
        <p>&copy; 2024 Packengers. Soluciones logísticas inteligentes.</p>
      </footer>
    </div>
  );
};

export default App;
