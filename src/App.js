import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';

import { Routes, Route, Link } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Navbar />
      
      <CountriesList />


      <div id="country-page">
        
        <Routes>

          <Route path="/:country" element={ <CountryDetails/> }  />

        </Routes>

      </div>

    </div>
  );
}

export default App;
