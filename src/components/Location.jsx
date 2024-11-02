import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import mapPin from "../assets/map-pin.svg";

export const Location = (props) => {
  useEffect(() => {
    let map = L.map("map").setView(
      [-43.26566721547804, -65.28760083033546],
      17
    );
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    const customIcon = L.icon({
      iconUrl: mapPin,
      iconSize: [35, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
    });

    L.marker([-43.26577721547804, -65.28760083033546], {
      icon: customIcon,
    }).addTo(map);
    map.scrollWheelZoom.disable();
  }, []);

  return (
    <div
      id="location"
      className="text-center"
      style={{ paddingTop: "70px", marginTop: "-70px" }}
    >
      <div className="container">
        <div className="row" style={{ marginBottom: "0px" }}>
          <div
            className="col-md-10 col-md-offset-1 section-title"
            style={{ marginBottom: "10px" }}
          >
            <h2 style={{ paddingTop: "40px" }}>¿Donde estamos?</h2>
            <p>
              Estamos en <b>Eduardo Price 19</b>, en la zona sur de la ciudad de{" "}
              <b>Trelew</b>.
            </p>
          </div>
        </div>
      </div>
            <div id="map"></div>
    </div>
  );
};
