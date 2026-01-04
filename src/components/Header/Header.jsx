import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    //Función para manejar las clases BEM de forma dinámica
    const linkClassName = ({ isActive }) => `header__link ${isActive ? 'header__link--active' : ''}`;

  return (
    <header className="header">
        <div className="header__container">
            <div className="header__logo">JetDevs</div>
            <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">
              <NavLink to="/" className={linkClassName}>
                Inicio
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink to="/about" className={linkClassName}>
                Sobre el proyecto
              </NavLink>
            </li>
          </ul>
        </nav>
        </div>
    </header>
  );
};

export default Header;