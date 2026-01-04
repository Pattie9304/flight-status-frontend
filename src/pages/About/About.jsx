import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <header className="about__hero">
        <h1 className="about__title">Sobre JetDevs</h1>
        <p className="about__subtitle">Tecnología de precisión para el seguimiento aeroespacial.</p>
        <div className="about__divider"></div>
      </header>

      <section className="about__container">
        <div className="about__main-card">
          <div className="about__info">
            <h2 className="about__card-title">Nuestra Misión</h2>
            <p className="about__card-text">
              JetDevs es una plataforma diseñada para visualizar el tráfico aéreo global. 
              Utilizamos datos en tiempo real para ofrecer una experiencia de monitoreo 
              eficiente, limpia y accesible para entusiastas de la aviación.
            </p>
          </div>

          <div className="about__specs-grid">
            <div className="about__spec-item">
              <span className="about__spec-icon">⚡</span>
              <h3 className="about__spec-label">Tiempo Real</h3>
            </div>
            <div className="about__spec-item">
              <span className="about__spec-icon">🎨</span>
              <h3 className="about__spec-label">Diseño BEM</h3>
            </div>
            <div className="about__spec-item">
              <span className="about__spec-icon">📱</span>
              <h3 className="about__spec-label">Responsive</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;