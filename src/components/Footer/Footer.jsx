import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Esto hace que el movimiento sea fluido y no un salto brusco
    });
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <span className="footer__logo-text">Jet<span className="footer__logo-accent">Devs</span></span>
          <p className="footer__tagline">Monitoreo de vuelos en tiempo real.</p>
        </div>

        <div className="footer__center">
          <button className="footer__scroll-top" onClick={scrollToTop} aria-label="Volver arriba">
            <span className="footer__scroll-icon">↑</span>
            Volver arriba
          </button>
          <p className="footer__copyright">&copy; {currentYear} SkyRadar</p>
        </div>

        <nav className="footer__nav">
          <Link to="/" className="footer__link">Inicio</Link>
          <Link to="/main" className="footer__link">Vuelos</Link>
          <Link to="/about" className="footer__link">Acerca de</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;