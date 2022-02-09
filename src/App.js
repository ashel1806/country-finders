import { useState, useEffect } from 'react';
import { getAllCountries, getCountryByName, getCountriesByRegion } from './utils/api';
import styled from 'styled-components';
import Country from './components/Country';
import NavBar from './components/NavBar';
import SearchInput from './components/SearchInput';
import Filter from './components/Filter';
import Notification from './components/Notification';

import theme from './utils/theme';

const Container = styled.div`
  padding: 0 1em;
  max-width: ${theme.screens.desktop};
  margin: 0 auto;
`;

const App = () => {
  const [countries, setCountries] = useState([]);
  const [message, setMessage] = useState('');

  const options = [
    { label: 'Africa', value: 'africa' },
    { label: 'America', value: 'america' },
    { label: 'Asia', value: 'asia' },
    { label: 'Europe', value: 'europe' },
    { label: 'Oceania', value: 'oceania' },
  ];

  useEffect(async () => {
    const countriesData = await getAllCountries();
    setCountries(countriesData);
  }, []);

  const handleSearchCountry = async (name) => {
    try {
      const searchedCountries = await getCountryByName(name);
      setCountries(searchedCountries);
      setMessage('');
    } catch (ex) {
      setMessage('Country not found :(');
      console.log(ex);
    }
  };

  const handleFilterCountriesByRegion = async (region) => {
    const filteredCountries = await getCountriesByRegion(region);
    setCountries(filteredCountries);
  };

  return (
    <>
      <NavBar />
      <Container>
        <SearchInput
          handleSearch={handleSearchCountry}
        />
        <Filter
          options={options}
          handleFilter={handleFilterCountriesByRegion}
        />
        {message
          ? <Notification message={message} />:
          countries.map(countrie => (
            <Country
              key={countrie.name.common}
              flags={countrie.flags}
              name={countrie.name}
              population={countrie.population}
              region={countrie.region}
              capital={countrie.capital}
            />
          ))
        }
      </Container>
    </>
  );
};

export default App;