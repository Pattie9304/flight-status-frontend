// components/UI/GlobalLoader/GlobalLoader.jsx
import React from 'react';
import './GlobalLoader.css';

const GlobalLoader = () => {
  return (
    <div className="global-loader">
      <div className="global-loader__spinner"></div>
      <p className="global-loader__text">Sincronizando con el radar global...</p>
    </div>
  );
};

export default GlobalLoader;