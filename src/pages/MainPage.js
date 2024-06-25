import React from "react";
import useFetchData from "../hooks/Fetch";
import CountryCard from "../components/CountryCard/CountryCard";
import './MainPage.css'

export default function MainPage() {
  const { data, loading, error } = useFetchData("data.json");

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
        />
      ))}
    </div>
  );
}