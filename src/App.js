import './App.css';
import useFetchData from './hooks/Fetch';

import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Filter from './components/Filter/Filter';

import MainContent from './pages/MainContent';
import { useState } from 'react';

function App() {
  const { data, loading, error } = useFetchData("data.json");

  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = data ? data.filter(country =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase())
  ) : [];


  return (
    <>
      <Header />

      <div className='second-header'>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Filter />
      </div>

      <MainContent data={filteredData} loading={loading} error={error} />
    </>
  );
}

export default App;
