import {useState} from "react";
import "./Country.css";
const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {
  const {name, flags, area, population, cca3} = country;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  // const passWithParams =()=>handleVisitedCountries(country)

  return (
    <div className={`country ${visited && "visited"}`}>
      <h3>Name: {name.common}</h3>
      <img style={{height: "200px", width: "320px"}} src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>Code: {cca3}</p>
      <button onClick={() => handleVisitedCountries(country)}>
        Mark Visited
      </button>
      <br />
      <button onClick={() => handleVisitedFlags(country.flags.png)}>
        Mark Flag
      </button>
      <br />
      <button onClick={handleVisited}>Visited</button>
      {visited && "I have visited the country"}
    </div>
  );
};

export default Country;
