import './Filter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';

import Dropdown from '../Dropdown/Dropdown';

export default function Filter({ filterRegion, setFilterRegion}) {
    const [dropdown, setDropdown] = useState(true);

    const classDropdown = dropdown ? "dropdown-menu none" : "dropdown-menu active"

    function handleDropdown() {
        if (dropdown) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    }

    return (
        <>
            <div className='filter-container'>

                <div className='filter-box' onClick={handleDropdown}>
                    <span className='filter-text'>Filter by region</span>
                    <FontAwesomeIcon icon={faCaretDown} />
                </div>

                <Dropdown classActive={classDropdown} filterRegion={filterRegion} setFilterRegion={setFilterRegion}/>

            </div>
        </>
    )
}