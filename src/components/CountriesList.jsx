import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CountriesList() {
  const [listOfCountries, setListOfCountries] = useState([]);

  const getCountries = async () => {
    const response = await axios.get(
      'https://ih-countries-api.herokuapp.com/countries'
    );
    // console.log(response.data);

    setListOfCountries(response.data);
  };

  useEffect(() => {
    getCountries();
  }, []);

  if (!listOfCountries) {
    return <div>...Loading</div>;
  }

  return (
    <div>
      <h2>Countries List</h2>

      {listOfCountries.map((eachCountry, index) => {
        return (
          <div key={index + eachCountry.alpha3Code}>
            <Link to={`countries/${eachCountry.alpha3Code}`}>
              {eachCountry.name.common}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default CountriesList;
