import './CountryCard.css';

export default function CountryCard({ flagUrl, countryName, region, capital }) {
    return (
        <div>

            <img src={flagUrl} alt={countryName}></img>

            <span>{countryName}</span>

            <span>{region}</span>

            <span>{capital}</span>




        </div>
    )
} 