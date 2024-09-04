import React from "react";

export const Ramos = (props) => {
  return (
    <div id="ramos">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            {/*<img src="img/about.jpg" className="img-responsive" alt="" />{" "}*/}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="ramos-text">
              <h2>Ramos de seguros</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3">
                  <div className="ramos-container">
                  <div className="ramos-image">
                  {" "}
                  <img src={d.img} alt="" />{" "}
                  </div>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                  </div>
                  </div>
              ))
            : "loading"}
        </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
