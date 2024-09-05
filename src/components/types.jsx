import React from "react";

export const Types = (props) => {
  const titleLines1 = props.data ? props.data.title3.split("\n") : ["Loading"];

  return (
    <div id="types" className="text-center row">
      <div className="container">
          <div className="intro-text">
            {/* Contenedor del primer título con fondo y ancho del 50% */}
            <div style={{ paddingBottom: "0px" }} className="types">
              <h1>
                {titleLines1.map((line, index) => (
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
              <p className="paragraph-box"></p>
            </div>
          </div>
        </div>
      </div>
  );
};
