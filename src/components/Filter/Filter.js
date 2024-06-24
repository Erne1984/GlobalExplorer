import './Filter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

export default function Filter(){
    return(
        <div className='filter-box'>
            <span className='filter-text'>Filter by region</span>
            <FontAwesomeIcon icon={faCaretDown} />
        </div>
    )
}