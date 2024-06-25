import './Filter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

export default function Filter() {
    return (
        <>
            <div className='filter-container'>

                <div className='filter-box'>
                    <span className='filter-text'>Filter by region</span>
                    <FontAwesomeIcon icon={faCaretDown} />
                </div>

                <div className='dropdown-menu'>

                    <ul>
                        <li>Africa</li>
                        <li>America</li>
                        <li>Europe</li>
                        <li>Asia</li>
                        <li>Oceania</li>
                    </ul>

                </div>
            </div>
        </>
    )
}