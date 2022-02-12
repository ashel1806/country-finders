import axios from 'axios';

const baseCountriesCollectionUrl = axios.create({
  baseURL: 'https://restcountries.com/v2/'
});

export const getAllCountries = async () => {
  const countries = await baseCountriesCollectionUrl.get('/all');
  const { data } = countries;

  return data;
};

export const getCountryByName = async (name) => {
  const searchedCountry = await baseCountriesCollectionUrl.get(`/name/${name}`);
  const { data } = searchedCountry;

  return data;
};

export const getCountriesByRegion = async (region) => {
  const countriesByRegion = await baseCountriesCollectionUrl.get(`/region/${region}`);
  const { data } = countriesByRegion;

  return data;
};

export const getCountryByCode = async (code) => {
  const countryByCode = await baseCountriesCollectionUrl.get(`/alpha/${code}`);
  const { data } = countryByCode;

  return data;
};