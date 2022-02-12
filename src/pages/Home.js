import { useState, useEffect } from 'react';
import styled from 'styled-components';

import {
  getAllCountries,
  getCountryByName,
  getCountriesByRegion
} from '../utils/api';

import Countries from '../components/Countries';
import NavBar from '../components/NavBar';
import SearchInput from '../components/SearchInput';
import Filter from '../components/Filter';
import Notification from '../components/Notification';

import { theme, devices } from '../utils/theme';

const Container = styled.div`
  padding: 0 1em;
  max-width: ${theme.screens.desktop};
  margin: 0 auto;
`;

const FlexContainer = styled.div`
  @media ${devices.large} {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export default function Home () {
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
        <FlexContainer>
          <SearchInput
            handleSearch={handleSearchCountry}
          />
          <Filter
            options={options}
            handleFilter={handleFilterCountriesByRegion}
          />
        </FlexContainer>
        {message
          ? <Notification message={message} />
          : <Countries countries={countries} />
        }
      </Container>
    </>
  );
}