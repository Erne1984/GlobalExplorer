import './Filter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';

import Dropdown from '../Dropdown/Dropdown';

export default function Filter({ filterRegion, setFilterRegion, isDarkMode }) {
    const [dropdown, setDropdown] = useState(true);

    const classDropdown = dropdown ? "dropdown-menu none" : "dropdown-menu active"

    function handleDropdown() {
        if (dropdown) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    }

    const filterContainerTheme = !isDarkMode ? "filter-container white-mode" : "filter-container dark-mode";
    const filterContainerBox = !isDarkMode ? "filter-box white-mode" : "filter-box dark-mode"

    return (
        <>
            <div className={filterContainerTheme}>

                <div className={filterContainerBox} onClick={handleDropdown}>
                    <span className='filter-text'>Filter by region</span>
                    <FontAwesomeIcon icon={faCaretDown} />
                </div>

                <Dropdown
                    classActive={classDropdown}
                    filterRegion={filterRegion}
                    setFilterRegion={setFilterRegion}
                    setDropdown={setDropdown}
                    isDarkMode={isDarkMode} />

            </div>
        </>
    )
}