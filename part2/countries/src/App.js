import { useEffect, useState } from "react";
import Country from "./components/Country";
import Error from "./components/Error";
import axios from "axios";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [countries, setCountries] = useState([]);

  const [manyResults, setManyResults] = useState(false);
  const [errorMessage, setErrorMessage] = useState(true);

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/name/${searchTerm}`)
      .then((res) => {
        if (res.data.length > 10) {
          setManyResults(true);
          setErrorMessage(false);
        } else {
          setManyResults(false);
          setErrorMessage(false);
          setCountries(res.data);
          console.log(res.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchTerm]);

  return (
    <div>
      <label>
        Search for a country:
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </label>

      {errorMessage ? <Error /> : ""}

      {manyResults ? (
        <p>Too many results. Please refine your search.</p>
      ) : (
        countries.map((country) => (
          <div key={country.area}>
            <Country
              countryName={country.name.common}
              area={country.area}
              capital={country.capital}
              languages={country.languages}
              flag={country.flags.png}

              // let temperature = res.data.main.temp;
              // temperature={}
              // // let weatherIcon = res.data.weather[0].icon;
              // weatherIcon={}
              // // let wind = res.data.wind.speed;
              // wind={}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default App;
