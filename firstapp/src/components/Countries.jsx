import React, { useEffect, useState } from "react";
import "../styles/tab.css";
import axios from "axios";

const Countries = ({ setcity }) => {
  const [name, setname] = useState([]);

  useEffect(() => {
    const url = "https://restcountries.eu/rest/v2/";
    async function getData() {
      const response = await axios.get(url);
      // console.log(response.data);
      setname(response.data);
    }
    getData();
    console.log(name);
  }, []);

  function onchangeHandler(e) {
    console.log(e.target.value);
    setcity(e.target.value);
  }
  return (
    <div className="countries-list">
      <select name="countriees" onChange={onchangeHandler} id="countries">
        {name.map((country) => (
          <option key={country.alpha3Code} value={country.capital}>
            {country.capital}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Countries;
