import "./CountryDetails.css";
import { useParams } from 'react-router-dom';



export default function CountryDetails({ data }) {

    const { id } = useParams();

    const currentidObject = data.find((country) => country.name === id);


    return (
        <>

            <section className="container-details">

                <div className="flag-box">
                    <img src={currentidObject.flag}></img>
                </div>

                <div className="details-box">

                    <h2>{currentidObject.name}</h2>

                    <div className="columns-details">

                        <div className="left-column-details">
                            <div className='row-info'>
                                <span className='bold'>Native Name: </span>
                                <span>{currentidObject.languages[0].nativeName}</span>
                            </div>

                            <div className='row-info'>
                                <span className='bold'>Population: </span>
                                <span>{ currentidObject.population.toLocaleString('pt-BR') }</span>
                            </div>

                            <div className='row-info'>
                                <span className='bold'>Region:</span>
                                <span>{ currentidObject.region }</span>
                            </div>

                            <div className='row-info'>
                                <span className='bold'>Sub Region:</span>
                                <span>{ currentidObject.subregion }</span>
                            </div>

                            <div className='row-info'>
                                <span className='bold'>Capital:</span>
                                <span>{ currentidObject.capital }</span>
                            </div>
                        </div>

                        <div className="left-column-details">
                            <div className='row-info'>
                                <span className='bold'>Top Level Domain:</span>
                                <span>{ currentidObject.topLevelDomain }</span>
                            </div>

                            <div className='row-info'>
                                <span className='bold'>Currencies:</span>
                                <span>{ currentidObject.currencies[0].name }</span>
                            </div>

                            <div className='row-info'>
                                <span className='bold'>Languages:</span>
                                { currentidObject.languages.map((lang) => (
                                    <span>{lang.name} </span>
                                )) }
                            </div>

                        </div>

                    </div>

                </div>


            </section>

        </>
    )
}