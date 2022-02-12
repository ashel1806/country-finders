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

export default function Countries ({ countries }) {
  return (
    <Container>
      {countries.map(country => (
        <Country
          key={country.name}
          flags={country.flags}
          name={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
          code={country.cioc || country.alpha3Code}
        />
      ))}
    </Container>
  );
}

Countries.propTypes = {
  countries: propTypes.array.isRequired
};