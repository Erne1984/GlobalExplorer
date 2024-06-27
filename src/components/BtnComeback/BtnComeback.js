import './BtnComeback.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { useNavigate } from 'react-router-dom';


export default function BtnComeback({ isDarkMode }) {
    const navigate = useNavigate();

    function handleNavigation(){
        navigate("/")
    }

    const btnTheme = !isDarkMode ? "btn-comeback white-mode" : "btn-comeback dark-mode";

    return (
        <button className={btnTheme} onClick={handleNavigation}>
            <FontAwesomeIcon className='arrow-back' icon={faArrowLeft} />

            <span>Back</span>
        </button>
    )
}