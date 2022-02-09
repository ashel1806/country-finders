import propTypes from 'prop-types';
import styled from 'styled-components';
import Country from '../Country';
import { devices } from '../../utils/theme';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  @media ${devices.mobileM} {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }

  @media ${devices.large} {
    grid-template-columns: repeat(3, 1fr);
    gap: 60px
  }

  @media ${devices.desktop} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Countries = ({ countries }) => {
  return (
    <Container>
      {countries.map(country => (
        <Country
          key={country.name.common}
          flags={country.flags}
          name={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
        />
      ))}
    </Container>
  );
};

export default Countries;

Countries.propTypes = {
  countries: propTypes.array.isRequired
};