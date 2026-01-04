import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../../components/UI/Button/Button'; // Importamos el nuevo componente
import './Header.css';

const Header = ( { onRefresh, isLoading } ) => { // Recibe la función de refrescar
  const location = useLocation();

  // Función para ayudar a marcar el link activo
  const isActive = (path) => location.pathname === path ? 'header__link--active' : '';

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__brand">
          <Link to="/" className="header__logo">
          Jet<span className="header__logo-accent">Devs</span>
          </Link>
        </div>
          
        <nav className="header__nav">
          <Link to="/" className="header__link">Inicio</Link>
          <Link to="/main" className="header__link">Vuelos</Link>
          <Link to="/about" className="header__link">Acerca de</Link>
        </nav>
        
        {/* Contenedor de acciones alineado */}
        <div className="header__actions">
          <div className={`header__status ${isLoading ? 'header__status--loading' : ''}`}>
            <span className="header__status-dot"></span>
            <span className="header__status-text">
              {isLoading ? 'Sincronizando...' : 'Radar Activo'}
              </span>
          </div>
          
          <button
          className={`header__refresh-btn ${isLoading ? 'header__refresh-btn--spinning' : ''}`}
          onClick={onRefresh}
          disabled={isLoading}
          title="Actualizar datos"
          >
            <svg className="header__refresh-icon" viewBox="0 0 24 24">
              <path d="M17.65 6.35A7.958 7.958 0 0012 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0112 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
              </svg>
          </button>
        </div>
      </div>
    </header>
);
};

export default Header;