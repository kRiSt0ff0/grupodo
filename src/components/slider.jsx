// src/Slider.js
import React, { useState, useEffect } from 'react';

const Slider = ({ slides }) => {  // Recibe slides como prop
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Clonamos el último slide al principio y el primero al final para un efecto infinito
  const extendedSlides = [
    slides[slides.length - 1],
    ...slides,
    slides[0]
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index + 1); // Ajuste para la clonación
  };

  // Autoplay effect
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  // Manejar la transición infinita
  useEffect(() => {
    if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(slides.length);
      }, 300); // Tiempo de la transición (debe coincidir con CSS)
    } else if (currentIndex === slides.length + 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(1);
      }, 300); // Tiempo de la transición (debe coincidir con CSS)
    } else {
      setIsTransitioning(true);
    }
  }, [currentIndex, slides.length]);

  return (
    <div className="slider">
      <button className="slider-button prev" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="slider-wrapper">
        <div
          className="slider-content"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: isTransitioning ? 'transform 0.3s ease' : 'none'
          }}
        >
          {extendedSlides.map((slide, index) => (
            <div className="slide" key={index}>
              <img src={slide.img} alt={slide.alt} />
            </div>
          ))}
        </div>
      </div>
      <button className="slider-button next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
