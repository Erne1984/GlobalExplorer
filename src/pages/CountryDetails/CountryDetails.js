import "./CountryDetails.css";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import BtnComeback from "../../components/BtnComeback/BtnComeback";
import DetailsBox from "../../components/DetailsBox/DetailsBox";

export default function CountryDetails({ data, isDarkMode }) {
    const { id } = useParams();
    const [currentidObject, setCurrentidObject] = useState(null);

    useEffect(() => {
        localStorage.removeItem('currentCountry');

        const storedCountry = localStorage.getItem(id);

        if (storedCountry) {
            setCurrentidObject(JSON.parse(storedCountry));
        } else {
            const country = data.find((country) => country.name === id);

            if (country) {
                setCurrentidObject(country);
                localStorage.setItem(id, JSON.stringify(country));
            } else {
                setCurrentidObject(null);
            }
        }
    }, [id, data]);

    if (!currentidObject) {
        return <div>Country not found</div>;
    }

    return (
        <>
            <div className="container-country-details">
                <div className="top-section">
                    <BtnComeback isDarkMode={isDarkMode} />
                </div>

                <section className="container-details">
                    <div className="flag-box">
                        <img src={currentidObject.flag} alt={`${currentidObject.name} flag`} />
                    </div>

                    <DetailsBox currentidObject={currentidObject} />


                </section>
            </div>
        </>
    )
}
