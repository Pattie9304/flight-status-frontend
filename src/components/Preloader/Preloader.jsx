import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

// Añadimos los iconos a la librería
library.add(fas, far, fab);

const Loader = ({ fading }) => {
    return (
        <div className={`loader-wrapper ${fading ? 'fade-out' : ''}`}>
            {/* Nubes (Fondo lejano) */}
            <div className='cloud' style={{ top: '15%', opacity: 0.8 }} />
            <div className='cloud' style={{ top: '30%', opacity: 0.5 }} />
            
            <div className='mountain' />
            <div className='hill' />
            <div className='tree' />
            <div className='tree' />
            <div className='rock' />

            <FontAwesomeIcon 
                className='plane' 
                icon={['fas', 'jet-fighter']} 
                size="6x"
            />
        </div>
    );
};

export default Loader;