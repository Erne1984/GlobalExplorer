import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export default function Header({ toggleDarkMode, isDarkMode }) {

    return (
        <>
            <header className='main-header-container'>

                <div className="main-header">

                    <h1 className='title'>Where is in the world?</h1>

                    <div className='switch-theme-box' onClick={toggleDarkMode}>

                        {
                            !isDarkMode ?
                                (
                                    <>
                                        <FontAwesomeIcon icon={faSun} className='icons' />

                                        <div className='theme-text'>White Mode</div>
                                    </>
                                )
                                :
                                (
                                    <>
                                        <FontAwesomeIcon icon={faMoon} className='icons' />

                                        <div className='theme-text'>Dark Mode</div>
                                    </>
                                )
                        }

                    </div>

                </div>

            </header>
        </>
    )
}