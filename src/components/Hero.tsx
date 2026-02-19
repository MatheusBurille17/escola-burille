'use client';

import { useEffect, useRef } from 'react';
import '../styles/hero.css';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const hero = heroRef.current;
    if (!video || !hero) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(err => console.log('Video play error:', err));
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(hero);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleCTAClick = () => {
    const contatoSection = document.getElementById('contato');
    if (contatoSection) {
      contatoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollClick = () => {
    const modalidadesSection = document.getElementById('modalidades');
    if (modalidadesSection) {
      modalidadesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleScrollClick();
    }
  };

  return (
    <section ref={heroRef} className="hero" id="inicio" role="banner">
      <video 
        ref={videoRef}
        className="hero-video" 
        autoPlay 
        loop 
        muted 
        playsInline
        aria-hidden="true"
      >
        <source src="/images/hero/hero-video-2.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-logo">BURILLE</h1>
        <h2 className="hero-title">ARTES MARCIAIS E EVOLUÇÃO</h2>
        <p className="hero-subtitle">
          Tradição, disciplina e excelência. Formando campeões 
          dentro e fora do tatame desde a primeira aula.
        </p>
        <button className="hero-cta" onClick={handleCTAClick} aria-label="Agendar aula grátis">
          AGENDE SUA AULA GRÁTIS
        </button>
        <div className="hero-stats" role="list" aria-label="Estatísticas da escola">
          <div className="stat" role="listitem">
            <span className="stat-number" aria-label="200 alunos">200+</span>
            <span className="stat-label">Alunos Ativos</span>
          </div>
          <div className="stat" role="listitem">
            <span className="stat-number" aria-label="4 modalidades">4</span>
            <span className="stat-label">Modalidades</span>
          </div>
        </div>
        <div 
          className="scroll-indicator" 
          onClick={handleScrollClick} 
          onKeyDown={handleScrollKeyDown} 
          role="button" 
          tabIndex={0} 
          aria-label="Rolar para próxima seção"
        >
          ↓
        </div>
      </div>
    </section>
  );
}
