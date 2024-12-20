import React from "react";
import Socials from "./socials";

export const Contact = (props) => {
  return (
    <>
      <div id="contact">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-md-12 col-lg-8 contact-col"
            >
              <h2 className="col-12 text-center">Encontranos</h2>
              <Socials></Socials>
            </div>
            <div
              className="col-md-12 col-lg-4 contact-col"
            >
              <div className="contact-info">
                <div className="contact-item">
                  <p>
                    <span>
                      <i className="fa fa-map-marker"></i> Dirección
                    </span>
                    {props.data ? props.data.address : "loading"}
                  </p>
                </div>
                <div className="contact-item">
                  <p>
                    <span>
                      <i className="fa fa-clock-o"></i> Horario de atención
                    </span>{" "}
                    {props.data ? props.data.schedule : "loading"}
                  </p>
                </div>
                <div className="contact-item">
                  <p>
                    <span>
                      <i className="fa fa-envelope-o"></i> Email
                    </span>{" "}
                    {props.data ? props.data.email : "loading"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2024 Electroservice. Design by{" "}
            <a href="http://www.templatewire.com" rel="nofollow">
              TemplateWire
            </a>
            -{" "}
            <a
              href="https://www.flaticon.com/free-icons/avatar"
              title="avatar icons"
            >
              Avatar icons created by kmg design - Flaticon
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
