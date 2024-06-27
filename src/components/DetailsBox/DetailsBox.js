import './DetailsBox.css'

import Borders from '../Borders/Borders'


export default function DetailsBox({ currentidObject }) {

    return (
        <>
            <div className="details-box">

                <h2 className='title-details'>{currentidObject.name}</h2>

                <div className="columns-details">
                    <div className="left-column-details">
                        <div className='row-info'>
                            <span className='bold'>Native Name: </span>
                            <span>{currentidObject.languages && currentidObject.languages[0]?.nativeName}</span>
                        </div>
                        <div className='row-info'>
                            <span className='bold'>Population: </span>
                            <span>{currentidObject.population.toLocaleString('pt-BR')}</span>
                        </div>
                        <div className='row-info'>
                            <span className='bold'>Region:</span>
                            <span>{currentidObject.region}</span>
                        </div>
                        <div className='row-info'>
                            <span className='bold'>Sub Region:</span>
                            <span>{currentidObject.subregion}</span>
                        </div>
                        <div className='row-info'>
                            <span className='bold'>Capital:</span>
                            <span>{currentidObject.capital}</span>
                        </div>
                    </div>

                    <div className="left-column-details">
                        <div className='row-info'>
                            <span className='bold'>Top Level Domain:</span>
                            <span>{currentidObject.topLevelDomain}</span>
                        </div>
                        <div className='row-info'>
                            <span className='bold'>Currencies:</span>
                            <span>{currentidObject.currencies && currentidObject.currencies[0]?.name}</span>
                        </div>
                        <div className='row-info'>
                            <span className='bold'>Languages:</span>
                            {currentidObject.languages ? (
                                currentidObject.languages.map((lang) => (
                                    <span key={lang.name}>{lang.name} </span>
                                ))
                            ) : (
                                <span>N/A</span>
                            )}
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