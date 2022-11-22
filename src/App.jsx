import React, { useEffect, useRef } from 'react';
import './App.css';
import * as L from 'leaflet';
import "leaflet/dist/leaflet.css"
import markerIconPng from "leaflet/dist/images/marker-icon.png"

function App() {
  const map = useRef(null)
  
  useEffect(()=>{
    map.current = L.map('map');
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20
    }).addTo(map.current);

    const icon = L.icon({iconUrl: markerIconPng});

    navigator.geolocation.getCurrentPosition((position) => {
      map.current.setView([position.coords.latitude,position.coords.longitude], 30)
      L.marker([position.coords.latitude, position.coords.longitude],{icon}).addTo(map.current);
    });
    
    return () => map.current.remove();
  },[])


  return (
    <div className="App">
       <div id="map"></div>
    </div>
  );
}

export default App;
