import './SearchBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function SearchBar({ searchQuery, setSearchQuery, isDarkMode }) {

    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const inputTheme = !isDarkMode ? "search-input white-mode" : "search-input dark-mode";

    const searchBoxTheme = !isDarkMode ? "search-box white-mode" : "search-box dark-mode";

    return (
        <div className={searchBoxTheme}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' />
            <input
                type='text'
                placeholder='Search for a country'
                className={inputTheme}
                value={searchQuery}
                onChange={handleChange}
            />
        </div>
    );
}
