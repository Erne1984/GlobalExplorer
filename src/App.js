import './App.css';

import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import Filter from './components/Filter/Filter';

import MainPage from './pages/MainPage';


function App() {
  return (
    <>

      <Header />

      <div className='second-header'>
        <SearchBar />

        <Filter />
      </div>

      <MainPage/>

    </>
  );
}

export default App;
