import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCountryByCode } from '../utils/api';
import NavBar from '../components/NavBar';
import CountryDetails from '../components/CountryDetails';

export default function Details () {
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
      <NavBar />
      <CountryDetails country={country} />
    </>
  );
}