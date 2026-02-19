'use client';

import { useState, useEffect } from 'react';
import '../styles/horarios.css';

export default function Horarios() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const modalidades = [
    { id: 1, nome: 'JIU-JITSU', pdfUrl: '/horarios/jiu-jitsu.pdf', imagem: '/images/modalidades/jiu-jitsu.jpg' },
    { id: 2, nome: 'JUDÔ', pdfUrl: '/horarios/judo.pdf', imagem: '/images/modalidades/judo.jpg' },
    { id: 3, nome: 'TAEKWONDO', pdfUrl: '/horarios/taekwondo.pdf', imagem: '/images/modalidades/taekwondo.jpg' },
    { id: 4, nome: 'MOVE & FIGHT', pdfUrl: '/horarios/move-fight.pdf', imagem: '/images/modalidades/move-fight.jpg' }
  ];

  useEffect(() => {
    document.body.style.overflow = isPopupOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isPopupOpen]);

  const handleModalidadeClick = (pdfUrl: string) => {
    window.open(pdfUrl, '_blank');
    setIsPopupOpen(false);
  };

  return (
    <section className="horarios" id="horarios" aria-labelledby="horarios-title">
      <div className="container">
        <div className="horarios-header">
          <h2 className="section-title" id="horarios-title">HORÁRIOS</h2>
          <p className="section-subtitle">Confira todos os horários disponíveis!</p>
        </div>
        <div className="horarios-button-wrapper">
          <button className="horarios-btn" onClick={() => setIsPopupOpen(true)} aria-label="Ver horários completos">
            <div className="btn-icon">📅</div>
            <span className="btn-text">VER HORÁRIOS COMPLETOS</span>
            <svg className="btn-arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>

      {isPopupOpen && (
        <div className="horarios-popup-overlay" onClick={() => setIsPopupOpen(false)}>
          <div className="horarios-popup" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={() => setIsPopupOpen(false)} aria-label="Fechar">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
            <h3 className="popup-title">ESCOLHA A MODALIDADE</h3>
            <p className="popup-subtitle">Selecione para ver os horários específicos</p>
            <div className="popup-grid">
              {modalidades.map(modalidade => (
                <div
                  key={modalidade.id}
                  className="popup-card"
                  style={{ backgroundImage: `url(${modalidade.imagem})` }}
                  onClick={() => handleModalidadeClick(modalidade.pdfUrl)}
                >
                  <div className="popup-card-overlay"></div>
                  <div className="popup-card-content">
                    <h4 className="popup-card-titulo">{modalidade.nome}</h4>
                    <span className="popup-card-action">Ver horários →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
