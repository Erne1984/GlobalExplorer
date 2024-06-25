import "./Dropdown.css";

export default function Dropdown({ classActive, filterRegion, setFilterRegion }) {

  function handleRegion(e) {
    setFilterRegion(e.target.innerText)
    console.log(filterRegion)
  }

  const regions = ["All", "Africa", "Americas", "Europe", "Asia", "Oceania"]

  return (
    <div className={classActive}>

      <ul>

        {
          regions.map((region) => (
            <li key={region}
            onClick={handleRegion}>{region}</li>
          ))
        }

      </ul>

    </div>
  )
}