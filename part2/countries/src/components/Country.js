import { useState } from "react";
import axios from "axios";

const Country = ({ countryName, area, capital, languages, flag }) => {
  const [isShown, setIsShown] = useState(false);
  // const [weathers, setWeathers] = useState([]);
  // const [temperatures, setTemperatures] = useState([]);

  // const weather_api_key = process.env.REACT_APP_API_KEY;

  // const getWeatherData = () => {
  //   axios
  //     .get(
  //       `http://api.openweathermap.org/geo/1.0/direct?q=${capital}&appid=${weather_api_key}`
  //     )
  //     .then((res) => {
  //       axios
  //         .get(
  //           `https://api.openweathermap.org/data/2.5/weather?lat=${res.data[0].lat}&lon=${res.data[0].lon}&units=metric&appid=${weather_api_key}`
  //         )
  //         .then((res) => {
  //           setWeathers(res.data);
  //           // setTemperatures(res.data.main.temp);
  //           console.log(weathers);
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //     });
  // };

  const handleClick = () => {
    setIsShown((prevShown) => !prevShown);
  };

  return (
    <div>
      <h4>{countryName}</h4>

      {isShown ? (
        <>
          <p>Area: {area}</p>
          <p>Capital: {capital}</p>
          <ul>
            Languages:
            {Object.entries(languages).map((entry, index) => (
              <li key={index}>{Object.values(entry[1])}</li>
            ))}
          </ul>
          <img src={flag} alt="country flag"></img>

          <br />
          <br />
          <br />
        </>
      ) : (
        ""
      )}
      <button onClick={handleClick}>{isShown ? "hide" : "show"}</button>
    </div>
  );
};

export default Country;

// temperature={Object.entries(temperatures).map(
//   (entry) => `temperature=${Object.values(entry[1])}`
// )}
