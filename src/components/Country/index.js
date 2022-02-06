import './index.css';
import PropTypes from 'prop-types';

const Country = (props) => {
  const { flags, name, population, region, capital } = props;

  return (
    <div className='country_wrapper'>
      <div className='country_container'>
        <div className='country_img__container'>
          <img src={flags.png}/>
        </div>
        <div className='country_texts__container'>
          <h3>{name.common}</h3>
          <p>Population: <span>{population}</span></p>
          <p>Region: <span>{region}</span></p>
          <p>Capital: <span>{capital}</span></p>
        </div>
      </div>
    </div>
  );
};

Country.propTypes = {
  flags: PropTypes.object.isRequired,
  name: PropTypes.object.isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  capital: PropTypes.array.isRequired
};

export default Country;