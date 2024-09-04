import React from "react";

export const Header = (props) => {
  const titleLines1 = props.data ? props.data.title1.split('\n') : ["Loading"];
  const titleLines2 = props.data ? props.data.title2.split('\n') : ["Loading"];

  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-offset-6 intro-text">
                {/* Contenedor del primer título con fondo y ancho del 50% */}
                <div style={{paddingBottom: '0px',}} className="title-box">
                  <h1>
                    {titleLines1.map((line, index) => (
                      <span
                        key={index}
                        style={{
                          fontSize: index === 0 ? '3.5rem' : '4rem',
                          display: 'block',
                        }}
                      >
                        {line}
                      </span>
                    ))}
                  </h1>
                  <p className="paragraph-box">{props.data ? props.data.paragraph1 : "Loading"}</p>
                </div>

                {/* Contenedor del segundo título con fondo y ancho del 50% */}
                <div style={{paddingTop: '20px',}} className="title-box">
                  <h1>
                    {titleLines2.map((line, index) => (
                      <span
                        key={index}
                        style={{
                          fontSize: index === 0 ? '3.2rem' : '4rem',
                          display: 'block',
                        }}
                      >
                        {line}
                      </span>
                    ))}
                  </h1>
                  <p className="paragraph-box">{props.data ? props.data.paragraph2 : "Loading"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
