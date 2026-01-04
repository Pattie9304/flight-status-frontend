import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__info">
          <span className="footer__copyright">
            © 2025-2026 Patricia Higuera. Todos los derechos reservados.
          </span>
        </div>
        
        <nav className="footer__nav">
          <ul className="footer__list">
            <li className="footer__item">
              <a href="https://github.com/Pattie9304" className="footer__link" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li className="footer__item">
              <a href="https://www.linkedin.com/in/patriciahigueradesigner/" className="footer__link" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;