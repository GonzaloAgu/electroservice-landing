import React, { useEffect } from "react";
import { Tooltip } from 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const Features = (props) => {

  useEffect(()=>{
    document.getElementById('')
  }, [])
  useEffect(() => {
    // Inicializar tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach(tooltipTriggerEl => {
      new Tooltip(tooltipTriggerEl);
    });
  }, [props.data]);


  return (
    <div id="features"  className="text-center section">
      <div className="container">
        <div className="col-md-offset-1 section-title">
          <h2 style={{paddingTop: "40px"}}>¿Qué ofrecemos?</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className={`${i === 2 ? 'col-xs-12' :'col-xs-6'} col-md-4  big-icons`}>
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: d.text }}></p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
