import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, far, fab);

const Loader = () =>
    {
        return <div className="loader-wrapper">
            <div className='mountain' />
            <div className='hill' />
            <div className='tree' />
            <div className='tree' />
            <div className='tree' />
            <div className='rock' />

            <FontAwesomeIcon className='plane' icon={"fa-solid fa-jet-fighter"} size="6x"/>

        </div>
    };
export default Loader;