import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { theme, devices } from '../../utils/theme';

const Container = styled.div`
  padding: 0 1em;
  margin-bottom: 2em;

  a {
    text-decoration: none;
  }

  @media ${devices.mobileM} {
    padding: 0;
  }
`;

const CountryWrapper = styled.div`
  background-color: ${({ theme }) => theme['background']};
  max-width: 400px;
  margin-right: auto;
  margin-left: auto;
  border-radius: .5em;
  transition: all .5s linear;

  @media ${devices.mobileM} {
    margin: 0;
    max-width: none;
    width: 100%;
  }
`;

const Image = styled.div.attrs(props => ({
  style: {
    backgroundImage: `url(${props.src})`
  }
}))`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  min-width: 250px;
  height: 250px;
  border-radius: .5em .5em 0 0;

  @media ${devices.desktop} {
    height: 200px;
  }
`;

const TextsContainer = styled.div`
  padding: 1.5em;
  color: ${({ theme }) => theme['text']};
  trainsition: all .5s linear;

  & .secondary {
    font-weight: ${theme.fontWeights.normal};
    color: ${({ theme }) => theme['secondary-text']};  
  }
`;

const CountryName = styled.h3`
  font-weight: ${theme.fontWeights['extra-bold']};
  margin-bottom: 1em;
`;

const Text = styled.p`
  margin-bottom: .5em;
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.homepage};
`;

export default function Country (props) {
  const { flags, name, population, region, capital, code, themeMode } = props;
  const codeToLowerCase = code.toLowerCase();
  const formattedPopulationNumber = population.toLocaleString('en-US');

  return (
    <Container theme={themeMode}>
      <Link to={`/countries/${codeToLowerCase}`}>
        <CountryWrapper theme={themeMode}>
          <Image src={flags.svg} />
          <TextsContainer theme={themeMode} >
            <CountryName>{name}</CountryName>
            <Text>Population:{' '}
              <span className='secondary'>{formattedPopulationNumber}</span>
            </Text>
            <Text>Region:{' '}
              <span className='secondary'>{region}</span>
            </Text>
            <Text>Capital:{' '}
              <span className='secondary'>{capital}</span>
            </Text>
          </TextsContainer>
        </CountryWrapper>
      </Link>
    </Container>
  );
}

Country.propTypes = {
  flags: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  capital: PropTypes.string,
  code: PropTypes.string.isRequired,
  themeMode: PropTypes.object
};