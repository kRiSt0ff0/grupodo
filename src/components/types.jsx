import React from "react";

export const Types = (props) => {
  // Asegúrate de que los datos existan y obtén el título desde el primer objeto
  const titleLines = props.data && props.data[0]?.title3 
    ? props.data[0].title3.split("\n") 
    : ["Loading"];

  return (
    <div id="types" className="text-center">
      <div className="container">
        <div className="intro-text types row">
          {/* Contenedor del primer título con fondo y ancho del 50% */}
          <div style={{ paddingBottom: "0px" }}>
            <h1>
              {titleLines.map((line, index) => (
                <span
                  key={index}
                  style={{
                    fontSize: index === 0 ? "3.5rem" : "4rem",
                    display: "block",
                  }}
                >
                  {line}
                </span>
              ))}
            </h1>
          </div>
          {/* Contenedor de los tipos de seguros */}
          <div>
            {/* Filtra los elementos a partir del segundo objeto en adelante */}
            {props.data && props.data.length > 1
              ? props.data.slice(1).map((d, i) => (
                  <div key={`${d.name}-${i}`} className="col-md-3 types-container">
                        <h3>{d.name}</h3>
                        <p>{d.text}</p>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    </div>
  );
};
