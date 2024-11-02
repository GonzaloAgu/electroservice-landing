import React, { useEffect } from "react";

export const Features = (props) => {

  useEffect(()=>{
    document.getElementById('')
  }, [])

  return (
    <div id="features"  className="text-center section">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2 style={{paddingTop: "40px"}}>¿Qué ofrecemos?</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className={`${i === 2 ? 'col-xs-12' :'col-xs-6'} col-md-4`}>
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
