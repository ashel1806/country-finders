import { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { theme } from '../../utils/theme';
import LinkButton from './LinkButton';
import { getCountryByCode } from '../../utils/api';

const Container = styled.div`
  padding: 0 1em;
  max-width: ${theme.screens.desktop};
  margin: 0 auto;
`;

const LinkContainer = styled.div`
  width: 100%;
  margin: 1.5em 0;
`;

const Heading = styled.div`
  font-weight: ${theme.fontWeights['extra-bold']};
  font-size: 1.5em;
  margin: 1em 0;
`;

const Text = styled.p`
  margin-bottom: .8em;
  font-size: ${props => props.md ? '1.1em' : theme.fontSizes.detail};
  font-weight: ${theme.fontWeights.bold};

  span {
    font-weight: ${theme.fontWeights.normal};  
  }
  
  a {
    font-weight: ${theme.fontWeights.normal};
    font-size: ${theme.fontSizes.homepage};
    color: ${theme.colors.light['dark-gray']};
  }
`;

const TextsLeft = styled.div`
  margin-bottom: 1.5em;
`;

const TextsRight = styled.div`
  margin-bottom: 1.5em;
`;

export default function CountryDetails ({ country }) {
  const [borders, setBorders] = useState();
  const formattedPopulationNumber = country.population.toLocaleString('en-US');
  const languages = country.languages.map(language => language.name);
  const currencies = country.currencies.map(currencie => currencie.name);

  const getCountryBorders = async () => {
    const borders = await Promise.all(
      country.borders.map(async border => {
        const countryObject = await getCountryByCode(border);
        return {
          name: countryObject.name,
          code: countryObject.alpha3Code.toLowerCase()
        };
      })
    );

    return borders;
  };

  useEffect(async () => {
    const countryBorders = await getCountryBorders();
    setBorders(countryBorders);
  }, []);

  return (
    <Container>
      <LinkContainer>
        <LinkButton label='Back' url='/' icon/>
      </LinkContainer>
      <img src={country.flags.png} />
      <Heading>{country.name}</Heading>
      <TextsLeft>
        <Text>Native Name:{' '}
          <span>{country.nativeName}</span>
        </Text>
        <Text>Population:{' '}
          <span>{formattedPopulationNumber}</span>
        </Text>
        <Text>Region:{' '}
          <span>{country.region}</span>
        </Text>
        <Text>Sub Region:{' '}
          <span>{country.subregion}</span>
        </Text>
        <Text>Capital:{' '}
          <span>{country.capital}</span>
        </Text>
      </TextsLeft>
      <TextsRight>
        <Text>
          Top Level Domain:{' '}
          <span>{country.topLevelDomain.join(', ')}</span>
        </Text>
        <Text>
          Curencies:{' '}
          <span>{currencies.join(', ')}</span>
        </Text>
        <Text>
          Languages:{' '}
          <span>{languages.join(', ')}</span>
        </Text>
      </TextsRight>
      <Text md>
        Border Countries:{' '}
      </Text>
      {borders && borders.length > 0
        ? borders.map(border => (
          <LinkButton
            key={border.name}
            url={`/countries/${border.code}`}
            label={border.name}
            size='tiny'
          />
        ))
        : 'No borders'
      }
    </Container>
  );
}

CountryDetails.propTypes = {
  country: propTypes.object.isRequired
};