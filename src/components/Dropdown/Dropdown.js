import "./Dropdown.css";

export default function Dropdown({ classActive, filterRegion, setFilterRegion, setDropdown, isDarkMode }) {

  function handleRegion(e) {
    setFilterRegion(e.target.innerText)
    setDropdown(true)
  }

  const regions = ["All", "Africa", "Americas", "Europe", "Asia", "Oceania"]

  const dropdownDarkMode = !isDarkMode ? " white-mode" : " dark-mode" 

  return (
    <div className={classActive}>

      <ul className={dropdownDarkMode}>

        {
          regions.map((region) => (
            <li 
            key={region}
            onClick={handleRegion}>{region}</li>
          ))
        }

      </ul>

    </div>
  )
}