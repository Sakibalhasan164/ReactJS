import React, { useState } from "react";
import TabContent from "./components/TabContent";
import Map from "./components/TabMap";
import "./styles/tab.css";
// import img from "./images/ninja.png";
import Countries from "./components/Countries";

import { useSpring, animated } from "react-spring";

const Tab = () => {
  const [city, setcity] = useState("london");
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  const [color, setcolor] = useState("#257ECA");

  return (
    <>
      <div className="wraper" style={{ backgroundColor: `${color}` }}>
        <div className="nav">
          <ul>
            <li
              onClick={() => {
                setcity("london");
                setcolor("#257ECA");
              }}
            >
              London
            </li>
            <li
              onClick={() => {
                setcity("Dhaka");
                setcolor("#FF5722");
              }}
            >
              Dhaka
            </li>
            <li
              onClick={() => {
                setcity("new Delhi");
                setcolor("#4CAF50");
              }}
            >
              New Delhi
            </li>
            <li
              onClick={() => {
                setcity("tokyo");
                setcolor("#2196F3");
              }}
            >
              Tokyo
            </li>
          </ul>
          <div className="list">
            <Countries setcity={setcity} />
          </div>
        </div>
        <TabContent city={city}></TabContent>

        <Map city={city}></Map>
      </div>
    </>
  );
};

export default Tab;
