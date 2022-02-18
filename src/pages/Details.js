import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCountryByCode } from '../utils/api';
import NavBar from '../components/NavBar';
import CountryDetails from '../components/CountryDetails';
import { func, object } from 'prop-types';

export default function Details ({ themeMode, changeTheme }) {
  const [country, setCountry] = useState();

  let params = useParams();

  const getCountryData = async () => {
    const country = await getCountryByCode(params.countryCode);
    return country;
  };

  useEffect(async () => {
    const countryByName = await getCountryData();
    setCountry(countryByName);
  }, []);
  console.log(country);

  if (!country) {
    return null;
  }

  return (
    <>
      <NavBar theme={themeMode} setTheme={changeTheme}/>
      <CountryDetails theme={themeMode} country={country} />
    </>
  );
}

Details.propTypes = {
  themeMode: object,
  changeTheme: func.isRequired
};