import React from 'react';
import './About.css';

// Sub-componente interno para las tarjetas de características/stats
const StatCard = ({ icon, title, text }) => (
  <div className="stat-card">
    <div className="stat-card__icon">{icon}</div>
    <h3 className="stat-card__title">{title}</h3>
    <p className="stat-card__text">{text}</p>
  </div>
);

const About = () => {
  return (
    <section className="about">
      <div className="about__container">
        
        {/* Encabezado de la página */}
        <header className="about__header">
          <h1 className="about__title">Sobre JetDevs</h1>
          <p className="about__subtitle">Elevando la experiencia de monitoreo aéreo</p>
          <div className="about__underline"></div>
        </header>

        {/* Primera Fila: Texto e Imagen/Stat */}
        <div className="about__row">
          <div className="about__content">
            <h2 className="about__section-title">Nuestra Misión</h2>
            <p className="about__text">
              JetDevs nació con el objetivo de democratizar el acceso a la información aeronáutica en tiempo real. 
              Utilizamos tecnología de punta para transformar datos complejos en una interfaz intuitiva y elegante.
            </p>
            <p className="about__text">
              Creemos que la claridad es fundamental cuando se trata de viajes y logística, por lo que cada 
              píxel de esta aplicación ha sido diseñado pensando en la eficiencia.
            </p>
          </div>
          
          <StatCard 
            icon="✈️" 
            title="Cobertura Global" 
            text="Acceso a datos de miles de aeropuertos y aerolíneas en los cinco continentes."
          />
        </div>

        {/* Segunda Fila: Tres columnas de tecnología o valores */}
        <div className="about__row about__row--full">
          <h2 className="about__section-title">El Stack Tecnológico</h2>
        </div>

        <div className="about__row">
          <StatCard 
            icon="⚛️" 
            title="React JS" 
            text="Arquitectura basada en componentes para un rendimiento fluido y escalable."
          />
          <StatCard 
            icon="🎨" 
            title="BEM CSS" 
            text="Metodología de estilos organizada para una mantenibilidad profesional."
          />
        </div>

        {/* Cierre: Un mensaje final centrado */}
        <div className="about__row--full" style={{ marginTop: '40px' }}>
          <p className="about__text">
            Este proyecto es una muestra de pasión por el desarrollo frontend y la ingeniería de datos. 
            ¡Gracias por volar con <strong>JetDevs</strong>!
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;