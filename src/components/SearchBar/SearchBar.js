import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function SearchBar({ searchQuery, setSearchQuery }) {

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className='search-box'>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' />
            <input
                type='text'
                placeholder='Search for a country'
                className='search-input '
                value={searchQuery}
                onChange={handleChange}
            />
        </div>
    );
}
