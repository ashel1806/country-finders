import axios from 'axios';

const baseCountriesCollectionUrl = axios.create({
  baseURL: 'https://restcountries.com/v3.1/'
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