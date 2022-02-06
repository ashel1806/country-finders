import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://restcountries.com/v3.1/'
});

export const getAllCountries = async () => {
  const countries = await instance.get('/all');
  const countriesData = await countries.data;

  return countriesData;
};