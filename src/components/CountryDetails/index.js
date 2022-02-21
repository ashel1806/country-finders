import { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { theme, devices } from '../../utils/theme';
import LinkButton from './LinkButton';
import { getCountryByCode } from '../../utils/api';

const Container = styled.div`
  padding: 0 1em;
  max-width: ${theme.screens.desktop};
  margin: 0 auto;
  color: ${({ theme }) => theme['text']};
  transition: all .5s linear;
`;

const LinkContainer = styled.div`
  width: 100%;
  margin: 1.5em 0;
`;

const GridContainer = styled.div`
  column-gap: 50px;

  @media ${devices.large} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ImageContainer = styled.div.attrs(props => ({
  style: {
    backgroundImage: `url(${props.src})`
  }
}))`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  min-width: 320px;
  width: 100%;
  height: 200px;
  border-radius: .5em .5em 0 0;

  @media ${devices.mobileM} {
    height: 500px;
  }
`;

const Heading = styled.div`
  font-weight: ${theme.fontWeights['extra-bold']};
  font-size: 1.5em;
  margin: 1em 0;

  @media ${devices.mobileM} {
    font-size: 2.5em;
  }
`;

const Text = styled.p`
  margin-bottom: .8em;
  font-size: ${props => props.md ? '1.1em' : theme.fontSizes.detail};
  
  span {
    color: ${({ theme }) => theme['secondary-text']};
    transition: all .5s linear;
  }
  
  a {
    font-weight: ${theme.fontWeights.normal};
    font-size: ${theme.fontSizes.homepage};
    color: ${theme.colors.light['dark-gray']};
  }
`;

const TextsContainer = styled.div`
  @media ${devices.mobileM} {
    display: grid;
    grid-template-areas: 'heading heading'
                         'left-texts right-texts'
                         'borders borders'; 
  }
`;

const TextsLeft = styled.div`
  margin-bottom: 1.5em;

  @media ${devices.mobileM} {
    grid-area: left-texts;
  }
`;

const TextsRight = styled.div`
  margin-bottom: 1.5em;

  @media ${devices.mobileM} {
    grid-area: right-texts;
  }
`;

const BordersContainer = styled.div`
  @media ${devices.mobileM} {
    grid-area: borders;
  }
`;

export default function CountryDetails ({ themeMode, country }) {
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
    <Container theme={themeMode}>
      <LinkContainer>
        <LinkButton label='Back' url='/' icon/>
      </LinkContainer>
      <GridContainer>
        <ImageContainer src={country.flags.svg} />
        <TextsContainer>
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
          <BordersContainer>
            <Text md>
              Border Countries:{' '}
            </Text>
            {borders && borders.length > 0
              ? borders.map(border => (
                <LinkButton
                  key={border.name}
                  themeMode={themeMode}
                  url={`/countries/${border.code}`}
                  label={border.name}
                  size='tiny'
                />
              ))
              : 'No borders'
            }
          </BordersContainer>
        </TextsContainer>
      </GridContainer>
    </Container>
  );
}

CountryDetails.propTypes = {
  themeMode: propTypes.object,
  country: propTypes.object.isRequired
};