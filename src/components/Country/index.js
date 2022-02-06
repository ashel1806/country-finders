import styled from 'styled-components';
import PropTypes from 'prop-types';

const CountryWrapper = styled.div`
  min-width: 500px;
  border: 2px solid black;
`;

const CountryContainer = styled.div`
  width: 100%;
  background-color: blue;
`;

const ImageContainer = styled.div`
  width: 100%;
`;

const Text = styled.div`
  color: red;

  & .secondary {
    color: black !important;   
  }
`;

const Country = (props) => {
  const { flags, name, population, region, capital } = props;

  return (
    <CountryWrapper>
      <CountryContainer>
        <ImageContainer>
          <img src={flags.png}/>
        </ImageContainer>
        <div className='country_texts__container'>
          <h3>{name.common}</h3>
          <Text>Population: <span className='secondary'>{population}</span></Text>
          <p>Population: <span>{population}</span></p>
          <p>Region: <span>{region}</span></p>
          <p>Capital: <span>{capital}</span></p>
        </div>
      </CountryContainer>
    </CountryWrapper>
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