import { useState, useEffect } from "react";

export default function Fetch() {
    const [countries, setCountries] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("../data/data");
                const data = await res.json();
                console.log(data);
                setCountries(data);
            } catch (e) {
                console.error(e);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {countries && countries.map((country) => (
                <img key={country.id} src={country.flags.png} alt={country.name} />
            ))}
        </div>
    );
}