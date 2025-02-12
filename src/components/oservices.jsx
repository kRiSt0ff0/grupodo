import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export const Oservices = (props) => {
  // Asegúrate de que `props.data` sea un array
  const paragraph = props.data && props.data[0]?.paragraph; // Accede al primer elemento para el párrafo
  const services = props.data && props.data.slice(1); // Toma los elementos a partir del segundo para los servicios

  return (
    <div id="oservices">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {/* <img src="img/about.jpg" className="img-responsive" alt="" /> */}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="oservices-text">
              <h2>Nuestros servicios</h2>
              <p className="paragraph-box">
                {paragraph ? paragraph : "Loading"}
              </p>
              <div className="row">
                {services
                  ? services.map((d, i) => (
                      <div key={`${d.name}-${i}`} className="col-md-6">
                        <div className="oservices-container">
                          <div className="service-desc">
                            <h3>{d.name}</h3>
                            <div className="oservices-icon-text">
                              <FontAwesomeIcon
                                icon={faCheck}
                                size="1x"
                                style={{ marginRight: "8px", color: "#1E4D7C" }} // Estiliza el ícon
                              />
                              {d.text && <p className="service-text">{d.text}</p>}
                            </div>
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
