'use client';

import { useState, useEffect, useCallback } from 'react';
import '../styles/galeria-slider.css';

export default function GaleriaSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const images = Array.from({ length: 10 }, (_, i) => ({
    src: `/images/galeria/foto-${i + 1}.webp`,
    alt: 'Escola Burille'
  }));

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section 
      className="galeria-slider" 
      id="galeria"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
      aria-label="Galeria de fotos da escola"
    >
      <div className="slider-container">
        <div className="slider-wrapper">
          {images.map((image, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{
                backgroundImage: `url(${image.src})`,
                display: index === currentSlide ? 'block' : 'none'
              }}
              role="img"
              aria-label={image.alt}
            >
              <div className="slide-overlay"></div>
            </div>
          ))}
        </div>

        <button className="slider-control prev" onClick={prevSlide} aria-label="Imagem anterior">
          ‹
        </button>

        <button className="slider-control next" onClick={nextSlide} aria-label="Próxima imagem">
          ›
        </button>

        <div className="slider-dots" role="tablist" aria-label="Navegação do slider">
          {images.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              role="tab"
              aria-selected={index === currentSlide}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
        </div>

        <div className="slider-counter" aria-live="polite" aria-atomic="true">
          <span className="current">{currentSlide + 1}</span>
          <span className="separator">/</span>
          <span className="total">{images.length}</span>
        </div>
      </div>
    </section>
  );
}
