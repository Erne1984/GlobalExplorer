import { useNavigate } from 'react-router-dom';
import './CountryCard.css';

export default function CountryCard({ flagUrl, countryName, region, capital, population, isDarkMode }) {
    const navigate = useNavigate();
    const countryCardTheme = !isDarkMode ? "country-card white-mode" : "country-card dark-mode";

    const handleCountryDetails = (countryName) => {
        navigate(`/countrydetails/${countryName}`);
    };

    return (
        <div className={countryCardTheme} onClick={() => handleCountryDetails(countryName)}>
            <img src={flagUrl} alt={countryName} className='flags' />
            <div className='country-info-box'>
                <h2 className='country-name'>{countryName}</h2>
                <div className='details'>
                    <div className='row-info'>
                        <span className='bold'>Population:</span>
                        <span>{population.toLocaleString('pt-BR')}</span>
                    </div>
                    <div className='row-info'>
                        <span className='bold'>Region:</span>
                        <span>{region}</span>
                    </div>
                    <div className='row-info'>
                        <span className='bold'>Capital:</span>
                        <span>{capital}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
