// src/Services.js
import React from "react";
import Slider from "./slider"; // Ajusta la ruta según la ubicación de tu archivo Slider.js
import data from "../data/data.json";

export const Rinsurance = (props) => {
  return (
    <div id="rinsurance" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Aseguradoras que representamos</h2>
        </div>
        <div className="slider-container">
        <Slider slides={data.Rinsurance} />
        </div>
      </div>
    </div>
  );
};
