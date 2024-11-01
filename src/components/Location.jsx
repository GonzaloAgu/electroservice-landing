import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css"
import mapPin from '../assets/map-pin.svg';


export const Location = (props) => {

  useEffect(() => {
    let map = L.map('map').setView([-43.26566721547804, -65.28760083033546], 17);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  const customIcon = L.icon({
    iconUrl: mapPin, 
    iconSize: [35, 41], 
    iconAnchor: [12, 41], 
    popupAnchor: [1, -34], 
  });

  let marker = L.marker([-43.26577721547804, -65.28760083033546], { icon: customIcon }).addTo(map)

  }, []);

  return (
    <div id="location" className="text-center" style={{"padding-top": "140px", "margin-top": "-90px"}}>
      <div className="container">
        <div className="col-md-8 col-md-offset-2" style={{marginBottom: "20px"}}>
          <h2>Donde Encontrarnos</h2>
          <p>
            Estamos en <b>Eduardo Price 19</b>, en la zona sur de la ciudad de{" "}
            <b>Trelew</b>.
          </p>
        </div>
          <div id="map" style={{width: "60vw", height: "70vh"}}></div>
      </div>
    </div>
  );
};
