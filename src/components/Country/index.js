import styled from 'styled-components';
import PropTypes from 'prop-types';

import theme from '../../utils/theme';

const Container = styled.div`
  padding: 0 1em;
  margin-bottom: 2em;
`;

const CountryWrapper = styled.div`
  background-color: ${theme.colors.white};
  max-width: 400px;
  border-radius: .5em;
`;

const Image = styled.img`
  width: 100%;
  min-width: 250px;
  border-radius: .5em .5em 0 0;
`;

const TextsContainer = styled.div`
  padding: 1.5em
`;

const CountryName = styled.h3`
  font-weight: ${theme.fontWeights['extra-bold']};
  margin-bottom: 1em
`;

const Text = styled.p`
  margin-bottom: .5em;
  font-size: ${theme.fontSizes.homepage};

  & .secondary {
    color: ${theme.colors.light['dark-gray']};  
  }
`;

const Country = (props) => {
  const { flags, name, population, region, capital } = props;

  return (
    <Container>
      <CountryWrapper>
        <Image src={flags.png} alt={name.common}/>
        <TextsContainer>
          <CountryName>{name.common}</CountryName>
          <Text>Population:{' '}
            <span className='secondary'>{population}</span>
          </Text>
          <Text>Region:{' '}
            <span className='secondary'>{region}</span>
          </Text>
          <Text>Capital:{' '}
            <span className='secondary'>{capital}</span>
          </Text>
        </TextsContainer>
      </CountryWrapper>
    </Container>
  );
};

Country.propTypes = {
  flags: PropTypes.object.isRequired,
  name: PropTypes.object.isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  capital: PropTypes.array
};

export default Country;