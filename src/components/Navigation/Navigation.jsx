import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="navigation-logo">JetDevs</div>
      <ul className="navigation-links">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => (isActive ? 'active-link' : '')}
          >
            Sobre el proyecto
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;