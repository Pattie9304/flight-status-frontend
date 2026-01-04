import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// Estilos
import '../Main/Main.css';
import '../Preloader/Preloader.css';
import '../Navigation/Navigation.css';

// Componentes
import Loader from '../Preloader/Preloader.jsx';
import Navbar from '../Navigation/Navigation.jsx';
import About from '../About/About.jsx';

// 1. Definimos la página de inicio como un componente aparte
const HomeContent = () => (
  <div style={{ padding: '100px 20px', textAlign: 'center' }}>
    <h1>Bienvenido a la Terminal Principal</h1>
    <p>Selecciona un destino en el menú superior.</p>
    <p>O visuzaliza en la parte inferior los direntes vuelos y sus horarios.</p>
  </div>
);

// 2. Renombramos el componente a "Main" (para que coincida con tu exportación)
function Main() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 4000);
    const removeTimer = setTimeout(() => setLoading(false), 5000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <>
      {loading && <Loader fading={fading} />}

      <div className={`app-content ${!loading ? 'fade-in-ready' : 'hidden'}`}>
        <Navbar />
        <main>
          <Routes>
            {/* Aquí usamos HomeContent, NO el componente Main */}
            <Route path="/" element={<HomeContent />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default Main;