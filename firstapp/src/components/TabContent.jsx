import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import axios from "axios";

const TabContent = ({ city }) => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  const [country, setcountry] = useState("");
  useEffect(() => {
    const fetchDate = async () => {
      const url = `https://restcountries.eu/rest/v2/capital/${city}`;
      try {
        const response = await axios.get(url);
        // console.log(response.data[0].latlng);
        setcountry(response.data[0].nativeName);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDate();
  }, [city]);

  return (
    <animated.div style={props} className="tabcontent">
      <h1>{city}</h1>
      <p>{`${city} is the Capital of ${country}`}</p>
    </animated.div>
  );
};

export default TabContent;
