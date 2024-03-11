import {useEffect} from "react";
import {useState} from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountries = (country) => {
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const handleVisitedFlags = (flag) => {
    setVisitedFlags([...visitedFlags, flag]);
  };

  return (
    <div>
      <h2>Countries: {countries.length}</h2>
      {/* visited countries */}
      <div>
        <h4 style={{textAlign: "start"}}>
          Visited Countries: {visitedCountries.length}
        </h4>
        <ul style={{textAlign: "start"}}>
          {visitedCountries.map((country) => (
            <li key={country.cca3}>{country.name.common}</li>
          ))}
        </ul>
      </div>
      {/* display countries flags */}
      <div className="flag-info">
        {visitedFlags.map((flag, idx) => (
          <img key={idx} src={flag}></img>
        ))}
      </div>
      {/* display countries */}
      <div className="countries">
        {countries.map((country) => (
          <Country
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlags={handleVisitedFlags}
            key={country.cca3}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
