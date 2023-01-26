import Country from "./Country";

const Countries = ({ searchTerm, countries, languages, flag }) => {
  return (
    <>
      {countries.map((country) => (
        <div key={country.area}>
          <Country
            countryName={country.name.common}
            languages={languages}
            countries={countries}
            flag={flag}
            searchTerm={searchTerm}
          />
        </div>
      ))}
    </>
  );
};

export default Countries;
