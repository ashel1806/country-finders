import { useState, useEffect } from 'react';
import { getAllCountries } from './utils/api';
import styled from 'styled-components';
import Country from './components/Country';
import NavBar from './components/NavBar';
import SearchInput from './components/SearchInput';
import Filter from './components/Filter';

import theme from './utils/theme';

const Container = styled.div`
  padding: 0 1em;
  max-width: ${theme.screens.desktop};
  margin: 0 auto;
`;

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(async () => {
    const countriesData = await getAllCountries();
    console.log(countriesData);
    setCountries(countriesData);
  }, []);

  return (
    <>
      <NavBar />
      <Container>
        <SearchInput />
        <Filter />
        {countries.map(countrie => (
          <Country
            key={countrie.name.common}
            flags={countrie.flags}
            name={countrie.name}
            population={countrie.population}
            region={countrie.region}
            capital={countrie.capital}
          />
        ))}
      </Container>
    </>
  );
};

export default App;