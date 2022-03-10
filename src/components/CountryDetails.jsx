import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

function CountryDetails() {
  const { alpha3Code } = useParams();

  const [countryDetails, setCountryDetails] = useState(null);

  const getDetails = async () => {
    const response = await axios.get(
      `https://ih-countries-api.herokuapp.com/countries/${alpha3Code}`
    );
    console.log(response.data);
    setCountryDetails(response.data);
  };

  useEffect(() => {
    getDetails();
  }, [alpha3Code]);

  if (!countryDetails) {
    return <div>...Loading</div>;
  }

  return (
    <div>
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${countryDetails.alpha2Code.toLowerCase()}.png`}
        alt="Country"
        width="200px"
      />
      <h1>{countryDetails.name.common}</h1>
      <h3>Capital: {countryDetails.capital}</h3>
      <h3>Area: {countryDetails.area}</h3>

      {countryDetails.borders.map((eachCountry, index) => {
      
        return (
          <ul key={index + eachCountry}>
            <Link to={countryDetails.name.common ? eachCountry : ''}>{eachCountry} </Link>
          </ul>
        );
      })}
    </div>
  );
}

export default CountryDetails;
