import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

// Añadimos los iconos a la librería
library.add(fas, far, fab);

const Preloader = ({ fading }) => {
    return (
        /* Bloque principal con modificador */
        <div className={`preloader ${fading ? 'preloader--fading' : ''}`}>
            
            {/* Elementos del Paisaje con prefijo del bloque */}
            <div className='preloader__cloud preloader__cloud--far' style={{ top: '15%', opacity: 0.8 }} />
            <div className='preloader__cloud preloader__cloud--mid' style={{ top: '30%', opacity: 0.5 }} />
            
            <div className='preloader__mountain' />
            <div className='preloader__hill' />
            
            {/* Usamos clases BEM incluso en componentes externos mediante className */}
            <div className='preloader__tree' />
            <div className='preloader__tree' />
            <div className='preloader__rock' />

            <FontAwesomeIcon 
                className='preloader__plane' 
                icon={['fas', 'jet-fighter']} 
                size="6x"
            />
        </div>
    );
};

export default Preloader;