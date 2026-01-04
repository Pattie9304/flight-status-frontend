import { Link } from 'react-router-dom';
import './NotFound.css';

const PageNotFound = () => {
  return (
    <section className="not-found">
      <div className="not-found__container">
        <h1 className="not-found__code">404</h1>
        <h2 className="not-found__title">¡Torre de control, estamos perdidos!</h2>
        <p className="not-found__text">La página que buscas ha salido de radar o nunca despegó.</p>
        
        <Link to="/" className="not-found__button">
          Volver al inicio
        </Link>
      </div>
    </section>
  );
};

export default PageNotFound;