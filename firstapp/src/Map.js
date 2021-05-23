import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "./styles/Map.css"
import Fire from "./components/Fire"



const App = () => {
const [lat, setlat] = useState('')
const [long, setlong] = useState('')

const [geometry, setgeometry] = useState([])

const getLocation=()=>{
if(navigator.geolocation){
navigator.geolocation.getCurrentPosition((position)=>{
setlat((position.coords.latitude).toFixed(2))
setlong((position.coords.longitude).toFixed(2))   
})        
}else{
console.log("doesn't exists");
}        
}

//get data from nasa api
const getData=async()=>{
    const url="https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
    const request=await fetch(url)
    const {events}=await request.json()
    setgeometry([events])
}

useEffect(()=>{
getLocation()
getData()
},[])
const position=[lat,long]

useEffect(()=>{
    console.log(geometry[0].categories);
}
,[geometry])




return (
    <>
<MapContainer className="map" center={position} zoom={3} scrollWheelZoom={true}>
<TileLayer
attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
/>
<Marker position={position}>
<Popup>{`you are in lat:${lat} and long: ${long}`}</Popup>
</Marker>


</MapContainer>
<Fire></Fire>
</>
);



}

export default App;
