'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Contato from '@/components/Contato';
import { modalidadesData } from '@/data/modalidades';

export default function ModalidadeDetalhesClient({ slug }: { slug: string }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [showAllProfessores, setShowAllProfessores] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const modalidade = modalidadesData[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile || !isAutoPlaying || !modalidade.pilares) return;
    
    const totalSlides = modalidade.pilares.length;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [isMobile, isAutoPlaying, modalidade.pilares]);

  const nextSlide = (totalSlides: number) => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = (totalSlides: number) => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (totalSlides: number) => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;
    
    if (distance > minSwipeDistance) {
      nextSlide(totalSlides);
    }
    
    if (distance < -minSwipeDistance) {
      prevSlide(totalSlides);
    }
    
    setTouchStart(0);
    setTouchEnd(0);
    
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '554699295745';
  const whatsappMessage = `Olá! Gostaria de agendar uma aula experimental de ${modalidade.titulo}.`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="modalidade-detalhes-container">
      {/* Hero Section */}
      <div className="modalidade-hero" style={{ backgroundImage: `url(${modalidade.imagens[0]})` }}>
        <div className="modalidade-hero-overlay"></div>
        <div className="container">
          <Link href="/#modalidades" className="btn-voltar">← Voltar</Link>
          <span className="modalidade-hero-subtitulo">{modalidade.subtitulo}</span>
          <h1 className="modalidade-hero-titulo">{modalidade.titulo}</h1>
          <p className="modalidade-hero-descricao">{modalidade.descricao}</p>
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-agendar-hero"
          >
            Agendar Aula Experimental
          </a>
        </div>
      </div>

      {/* Sistema de Graduação / Metodologia */}
      <section className="sistema-graduacao">
        <div className="container">
          <div className="graduacao-content">
            <div className="graduacao-info">
              <h2>
                {modalidade.metodologia.titulo.split(' ')[0]}{' '}
                <span className="highlight">{modalidade.metodologia.titulo.split(' ').slice(1).join(' ')}</span>
              </h2>
              <p className="graduacao-intro">{modalidade.metodologia.descricao}</p>
              {modalidade.metodologia.intro && (
                <p className="graduacao-intro">{modalidade.metodologia.intro}</p>
              )}
            </div>
            
            {modalidade.sistemaGraduacao && (
              <div className="graduacao-imagem">
                <Image
                  src={modalidade.sistemaGraduacao.imagem}
                  alt={`Sistema de graduação ${modalidade.titulo}`}
                  width={600}
                  height={800}
                  className="graduacao-img"
                  loading="lazy"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Pilares/Turmas */}
      {modalidade.pilares && (
        <section className="pilares-metodologia">
          <div className="pilares-container container">
            <h2>
              <span className="highlight">{slug === 'move-fight' ? 'PILARES DO TREINAMENTO' : 'Turmas'}</span>
            </h2>
            <p className="faixas-etarias-intro">
              {slug === 'move-fight' 
                ? 'Nosso programa é estruturado em pilares fundamentais que garantem um desenvolvimento completo e equilibrado.'
                : slug === 'jiu-jitsu'
                ? 'Contamos com 5 turmas organizadas por faixa etária, cada uma com metodologia exclusiva, pensada para potencializar o desenvolvimento em cada fase da vida.'
                : 'Nossas turmas são organizadas por faixa etária, com metodologia adaptada para cada fase do desenvolvimento.'}
            </p>
            
            {isMobile ? (
              <div className="pilares-carousel">
                <div 
                  className="pilares-carousel-track"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={() => handleTouchEnd(modalidade.pilares!.length)}
                >
                  <div 
                    className="pilares-carousel-inner"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {modalidade.pilares.map((pilar, idx) => (
                      <div key={idx} className={`pilar-card ${pilar.cor}`}>
                        <h3>{pilar.titulo}</h3>
                        <p className="pilar-foco">{pilar.foco}</p>
                        <ul>
                          {pilar.caracteristicas.map((caracteristica, cidx) => (
                            <li key={cidx}>{caracteristica}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="carousel-dots">
                  {modalidade.pilares.map((_, index) => (
                    <button
                      key={index}
                      className={`dot ${currentSlide === index ? 'active' : ''}`}
                      onClick={() => goToSlide(index)}
                      aria-label={`Ir para ${slug === 'move-fight' ? 'pilar' : 'turma'} ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="pilares-grid">
                {modalidade.pilares.map((pilar, idx) => (
                  <div key={idx} className={`pilar-card ${pilar.cor}`}>
                    <h3>{pilar.titulo}</h3>
                    <p className="pilar-foco">{pilar.foco}</p>
                    <ul>
                      {pilar.caracteristicas.map((caracteristica, cidx) => (
                        <li key={cidx}>{caracteristica}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Professores */}
      <section className="modalidade-professores">
        <div className="container">
          <h2>Nossos Professores e Instrutores</h2>
          <div className="professores-grid">
            {modalidade.professores.map((professor, index) => (
              <div 
                key={index} 
                className={`professor-card ${isMobile && !showAllProfessores && index > 0 ? 'hidden-mobile' : ''}`}
              >
                <div className="professor-foto-container">
                  <Image 
                    src={professor.imagem} 
                    alt={professor.nome} 
                    width={320}
                    height={320}
                    className="professor-foto"
                    loading="lazy"
                  />
                </div>
                <div className="professor-info">
                  <h3>{professor.nome}</h3>
                  <p className="especialidade">{professor.faixa}</p>
                </div>
              </div>
            ))}
          </div>
          {isMobile && modalidade.professores.length > 1 && (
            <div className="ver-mais-container">
              <button 
                className="btn-ver-mais" 
                onClick={() => setShowAllProfessores(!showAllProfessores)}
              >
                {showAllProfessores ? 'Ver menos' : `Ver mais (${modalidade.professores.length - 1})`}
              </button>
            </div>
          )}
        </div>
      </section>

      <Contato />
    </div>
  );
}
