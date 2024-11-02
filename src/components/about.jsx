import React from "react";

export const About = (props) => {
  return (
    <div id="about" className="section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/front.jpg" className="img-responsive" alt="Imagen frontal del local Electroservice" />{" "}
          </div>
          <div className="col-xs-12 col-md-6 d-flex justify-content-center">
            <div className="about-text">
              <h2>Sobre Nosotros</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>¿Qué reparamos?</h3>
              <div className="row justify-content-center">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
