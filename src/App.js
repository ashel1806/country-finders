import { useState, useEffect } from 'react';
import { getAllCountries } from './utils/api';
import Country from './components/Country';

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(async () => {
    const countriesData = await getAllCountries();
    setCountries(countriesData);
  }, []);

  return (
    <div>
      {countries.map(countrie => (
        <Country
          key={countrie.name}
          flags={countrie.flags}
          name={countrie.name}
          population={countrie.population}
          region={countrie.region}
          capital={countrie.capital}
        />
      ))}
    </div>
  );
};

export default App;