import React from "react";
import CountryCard from "../components/CountryCard/CountryCard";
import './MainContent.css';

export default function MainContent({ data, loading, error, isDarkMode }) {
  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Ocorreu um erro: {error.message}</p>;

  return (
    <div className="country-list">
      {data && data.map((country, index) => (
        <CountryCard
          key={index}
          flagUrl={country.flag}
          countryName={country.name}
          region={country.region}
          capital={country.capital}
          population={country.population}
          isDarkMode={isDarkMode}
        />
      ))}
    </div>
  );
}
