import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

export default function Header() {

    return (
        <>
            <header className='main-header'>

                <h1 className='title'>Where is in the world?</h1>

                <div className='switch-theme-box'>

                    <FontAwesomeIcon icon={faMoon} className='icons' />
                    
                    <div className='theme-text'>Dark Mode</div>

                </div>

            </header>
        </>
    )
}