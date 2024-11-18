import React, { useState } from "react";
import AddressPopup from "./LocationMarker"
import WhatsappModal from "./WhatsappModal";

export const Header = (props) => {
  const [showWappModal, setShowWappModal] = useState(false);

  const handleConsultaBtn = () => setShowWappModal(true);
  const handleCloseBtn = () => setShowWappModal(false)
  return (
    <header id="header">
      <WhatsappModal show={showWappModal} onClose={handleCloseBtn}/>
      <div className="intro">
        <div className="overlay">
          <div className="">
            <AddressPopup/>
            <div className="row">
              <div className="intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  ¡Conocenos!
                </a>
                <button 
                  id="consulta-btn"
                  className="btn btn-custom btn-lg page-scroll"
                  onClick={handleConsultaBtn}
                >
                  <i className="fa fa-television" aria-hidden="true"></i> mi reparación
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
