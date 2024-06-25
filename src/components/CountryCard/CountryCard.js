import './CountryCard.css';

export default function CountryCard({ flagUrl, countryName, region, capital }) {
    return (
        <div className="country-card">
            <img src={flagUrl} alt={countryName} className='flags' />

            <h2 className='country-name'>{countryName}</h2>

            <div className='details'>

                <div className='row-info'>
                    <span>Region:</span>
                    <span>{region}</span>
                </div>


                <span>Capital: {capital}</span>

            </div>

        </div>
    )
} 
