import './DetailsBox.css';
import Borders from '../Borders/Borders';

export default function DetailsBox({ currentidObject }) {

    const getLanguages = (languages) => {
        if (!languages) return "N/A";
        if (Array.isArray(languages)) {
            return languages.map(lang => lang.name).join(", ");
        } else {
            return Object.values(languages).join(", ");
        }
    };

    return (
        <>
            <div className="details-box">
                <h2 className='title-details'>{currentidObject.name.common}</h2>

                <div className="columns-details">
                    <div className="left-column-details">
                        <div className='row-info'>
                            <span className='bold'>Native Name: </span>
                            <span>{currentidObject.name.nativeName ? Object.values(currentidObject.name.nativeName).map(n => n.official).join(", ") : "N/A"}</span>
                        </div>
                        <div className='row-info'>
                            <span className='bold'>Population: </span>
                            <span>{currentidObject.population ? currentidObject.population.toLocaleString('pt-BR') : "N/A"}</span>
                        </div>
                        <div className='row-info'>
                            <span className='bold'>Region:</span>
                            <span>{currentidObject.region ? currentidObject.region : "N/A"}</span>
                        </div>
                        <div className='row-info'>
                            <span className='bold'>Sub Region:</span>
                            <span>{currentidObject.subregion ? currentidObject.subregion : "N/A"}</span>
                        </div>
                        <div className='row-info'>
                            <span className='bold'>Capital:</span>
                            <span>{currentidObject.capital ? currentidObject.capital : "N/A"}</span>
                        </div>
                    </div>

                    <div className="left-column-details">
                        <div className='row-info'>
                            <span className='bold'>Top Level Domain:</span>
                            <span>{currentidObject.tld ? currentidObject.tld.join(", ") : "N/A"}</span>
                        </div>
                        <div className='row-info'>
                            <span className='bold'>Currencies:</span>
                            <span>{currentidObject.currencies ? Object.values(currentidObject.currencies).map(c => c.name).join(", ") : "N/A"}</span>
                        </div>
                        <div className='row-info'>
                            <span className='bold'>Languages:</span>
                            <span>{getLanguages(currentidObject.languages)}</span>
                        </div>
                    </div>
                </div>

                {currentidObject.borders && currentidObject.borders.length > 0 && (
                    <Borders borders={currentidObject.borders} />
                )}
            </div>
        </>
    )
}
