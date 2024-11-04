import React from "react";
import "../styles/marker.css";

export default function AddressPopup() {
  return (
    <a href="#location">
      <div className="marker-container">
        <div className="marker" />
        <div className="address">
          <span>EDUARDO PRICE 19, TRELEW</span>
        </div>
      </div>
    </a>
  );
}
