import './App.css';
import useFetchData from './hooks/Fetch';

import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Filter from './components/Filter/Filter';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import CountryDetails from './pages/CountryDetails/CountryDetails';


import MainContent from './pages/MainContent/MainContent';
import { useState, useEffect } from 'react';

function App() {
  const { data, loading, error } = useFetchData("data.json");

  const [searchQuery, setSearchQuery] = useState('');
  const [filterRegion, setFilterRegion] = useState('');
  const [countryDetails, setCountryDetails] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : '';
  }, [isDarkMode]);

  const filteredData = data ? data.filter(country => {
    const matchesSearchQuery = country.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRegion = filterRegion === '' || filterRegion === 'All' || country.region === filterRegion;
    return matchesSearchQuery && matchesRegion;
  }) : [];

  return (
    <>
      <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />

      <div className='second-header'>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} isDarkMode={isDarkMode} />
        <Filter filterRegion={filterRegion} setFilterRegion={setFilterRegion} isDarkMode={isDarkMode} />
      </div>

      <Router>
        <Routes>
          <Route path="/" element={<MainContent
            data={filteredData}
            loading={loading}
            error={error}
            isDarkMode={isDarkMode}
            countryDetails={countryDetails}
            setCountryDetails={setCountryDetails}
          />} />
          <Route path="/countrydetails/:id" element={<CountryDetails
            data={data}
            isDarkMode={isDarkMode}
          />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;