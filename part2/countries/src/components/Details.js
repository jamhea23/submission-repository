const Details = ({ languages, countries, flag }) => {
  return countries.map((country) => (
    <div key={country.area}>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area}</p>
      <br />
      <h4>Languages:</h4>
      <ul>
        {languages.map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <h4>Flag:</h4>
      <img src={flag} alt="country flag" />
    </div>
  ));
};

export default Details;
