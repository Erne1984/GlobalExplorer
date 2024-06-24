import './App.css';

import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Filter from './components/Filter/Filter';
import Fetch from './hooks/Fetch';


function App() {
  return (
    <>

      <Header />

      <div className='second-header'>
        <SearchBar />

        <Filter />
      </div>

      <Fetch/>

    </>
  );
}

export default App;
