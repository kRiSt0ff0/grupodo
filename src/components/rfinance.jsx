// src/Services.js
import React from "react";
import Slider from "./slider"; // Ajusta la ruta según la ubicación de tu archivo Slider.js
import data from "../data/data.json";

export const Rfinance = (props) => {
  return (
    <div id="rfinance" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Afianzadoras con las que trabajamos</h2>
        </div>
        <div className="slider-container">
        <Slider slides={data.Rfinance} />
        </div>
      </div>
    </div>
  );
};
