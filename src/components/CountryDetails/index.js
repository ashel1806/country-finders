import propTypes from 'prop-types';

export default function CountryDetails ({ country }) {
  return (
    <div>
      <img src={country.flags.png} />
      <h2>{country.name}</h2>
      <p>{country.nativeName}</p>
      <p>{country.population}</p>
      <p>{country.region}</p>
      <p>{country.subregion}</p>
      <p>{country.capital}</p>
      <p>
        {country.topLevelDomain.map(domain => (
          <span key={domain}>
            {domain}
          </span>
        ))}
      </p>
      <p>
        {country.currencies.map(currencie => (
          <span key={currencie.name}>
            {currencie.name}
          </span>
        ))}
      </p>
      <p>{country.languages.map(language => (
        <span key={language.name}>
          {language.name}
        </span>
      ))}</p>
    </div>
  );
}

CountryDetails.propTypes = {
  country: propTypes.object.isRequired
};