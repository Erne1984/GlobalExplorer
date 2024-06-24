import './App.css';

import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Filter from './components/Filter/Filter';


function App() {
  return (
    <>

      <Header />

      <div className='second-header'>
        <SearchBar />

        <Filter />
      </div>

    </>
  );
}

export default App;
