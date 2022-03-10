import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';

import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div id="country-page">
        <CountriesList />

        <Routes>
          <Route path="/countries/:alpha3Code" element={<CountryDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
