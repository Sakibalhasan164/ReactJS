import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import axios from "axios";
import "../styles/tab.css";

const TabMap = ({ city }) => {
  const [lat, setlat] = useState("");
  const [long, setlong] = useState("");

  const position = [lat, long];
  useEffect(() => {
    const fetchDate = async () => {
      const url = `https://restcountries.eu/rest/v2/capital/${city}`;
      try {
        const response = await axios.get(url);
        console.log(response.data[0].latlng);
        let latitude = response.data[0].latlng[0];
        let langitude = response.data[0].latlng[1];
        setlat(latitude);
        setlong(langitude);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDate();
  }, [city]);

  return (
    <div className="map">
      <MapContainer
        className="map"
        center={position}
        zoom={1}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>{`${city} is at lat:${lat} and long: ${long}`}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default TabMap;
