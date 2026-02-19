'use client';

import { useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/planos.css';

type Plano = {
  id: number;
  nome: string;
  preco: number;
  popular: boolean;
  beneficios: string[];
};

export default function Planos() {
  const planosPorCategoria: Record<string, Plano[]> = {
    infantil: [
      { id: 1, nome: 'INFANTIL Mensal', preco: 150, popular: false, beneficios: ['1 modalidade', 'Acesso ilimitado', 'Aulas em grupo', 'Diversão no tatame!'] },
      { id: 2, nome: 'INFANTIL Trimestral', preco: 135, popular: false, beneficios: ['1 modalidade', 'Acesso ilimitado', 'Aulas em grupo', '3x no cartão ou recorrente', 'Diversão no tatame por 3 meses!'] },
      { id: 3, nome: 'INFANTIL Semestral', preco: 127, popular: false, beneficios: ['1 modalidade', 'Acesso ilimitado', 'Aulas em grupo', '6x no cartão ou recorrente', 'Diversão no tatame por 6 meses!'] },
      { id: 4, nome: 'INFANTIL Anual', preco: 120, popular: true, beneficios: ['1 modalidade', 'Acesso ilimitado', 'Aulas em grupo', '12x no cartão ou recorrente', 'Diversão no tatame o ano inteiro!'] }
    ],
    adulto: [
      { id: 5, nome: 'ADULTO Mensal', preco: 180, popular: false, beneficios: ['1 modalidade', 'Acesso ilimitado', 'Aulas em grupo'] },
      { id: 6, nome: 'ADULTO Trimestral', preco: 162, popular: false, beneficios: ['1 modalidade', 'Acesso ilimitado', 'Aulas em grupo', '3x no cartão ou recorrente'] },
      { id: 7, nome: 'ADULTO Semestral', preco: 153, popular: false, beneficios: ['1 modalidade', 'Acesso ilimitado', 'Aulas em grupo', '6x no cartão ou recorrente'] },
      { id: 8, nome: 'ADULTO Anual', preco: 144, popular: true, beneficios: ['1 modalidade', 'Acesso ilimitado', 'Aulas em grupo', '12x no cartão ou recorrente'] }
    ],
    particulares: [
      { id: 9, nome: 'AULA PARTICULAR', preco: 200, popular: false, beneficios: ['Aula individual', 'Horário flexível', 'Atenção exclusiva', 'Treino personalizado', 'Evolução acelerada'] },
      { id: 10, nome: 'AULA PARTICULAR', preco: 300, popular: false, beneficios: ['Aula individual', 'Horário flexível', 'Atenção exclusiva', 'Treino personalizado', 'Evolução acelerada'] },
      { id: 11, nome: 'AULA PARTICULAR', preco: 400, popular: false, beneficios: ['Aula individual', 'Horário flexível', 'Atenção exclusiva', 'Treino personalizado', 'Evolução acelerada'] }
    ],
    visitas: [
      { id: 12, nome: 'AULA EXPERIMENTAL', preco: 0, popular: true, beneficios: ['Aula gratuita', 'Conheça a escola', 'Experimente a modalidade', 'Sem compromisso', 'Conheça os professores', 'Tire suas dúvidas'] },
      { id: 13, nome: 'HORA AULA', preco: 25, popular: false, beneficios: ['1 aula coletiva', 'Todas as modalidades', 'Conheça os professores', 'Use as instalações'] },
      { id: 14, nome: 'Semanal', preco: 300, popular: false, beneficios: ['1 modalidade', 'Aulas coletiva', 'Conheça os professores', 'Use as instalações'] }
    ]
  };

  const [categoriaAtiva, setCategoriaAtiva] = useState('infantil');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [gridRef, isGridVisible] = useScrollAnimation({ threshold: 0.1 });
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const planosAtuais = planosPorCategoria[categoriaAtiva];
  const minSwipeDistance = 50;

  const handlePlanoClick = (nomePlano: string) => {
    const whatsappMessage = `Olá! Gostaria de saber mais sobre o plano ${nomePlano}.`;
    const phone = '554699295745';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const nextSlide = () => setCurrentIndex((prev) => (prev === planosAtuais.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? planosAtuais.length - 1 : prev - 1));
  const goToSlide = (index: number) => setCurrentIndex(index);

  const handleCategoriaChange = (categoria: string) => {
    setCategoriaAtiva(categoria);
    setCurrentIndex(0);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsAutoPlaying(false);
  };

  const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) nextSlide();
    else if (distance < -minSwipeDistance) prevSlide();
    setTouchStart(null);
    setTouchEnd(null);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  useEffect(() => {
    if (!isAutoPlaying || planosAtuais.length <= 1) return;
    const interval = setInterval(() => setCurrentIndex((prev) => (prev === planosAtuais.length - 1 ? 0 : prev + 1)), 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, planosAtuais.length]);

  const getVisiblePlanos = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      let index = currentIndex + i;
      if (index < 0) index = planosAtuais.length + index;
      if (index >= planosAtuais.length) index = index - planosAtuais.length;
      visible.push({ ...planosAtuais[index], position: i });
    }
    return visible;
  };

  return (
    <section className="planos" id="planos" aria-labelledby="planos-title">
      <div className="container">
        <h2 className="section-title" id="planos-title">NOSSOS PLANOS</h2>
        
        <div className="categorias-tabs" role="tablist" aria-label="Categorias de planos">
          {['infantil', 'adulto', 'particulares', 'visitas'].map(cat => (
            <button
              key={cat}
              className={`categoria-tab ${categoriaAtiva === cat ? 'active' : ''}`}
              onClick={() => handleCategoriaChange(cat)}
              role="tab"
              aria-selected={categoriaAtiva === cat}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="planos-slider-container" ref={gridRef}>
          <button className="slider-btn prev" onClick={prevSlide} aria-label="Plano anterior">‹</button>
          
          <div 
            className="planos-carousel"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {getVisiblePlanos().map((plano, idx) => (
              <div 
                key={`${plano.id}-${plano.position}-${idx}`}
                className={`plano-card animate-on-scroll ${isGridVisible ? 'visible' : ''} ${
                  plano.position === 0 ? 'center' : plano.position === -1 ? 'left' : 'right'
                } ${plano.popular ? 'popular' : ''}`}
                onClick={() => plano.position !== 0 && goToSlide(planosAtuais.findIndex(p => p.id === plano.id))}
              >
                {plano.popular && <div className="badge-popular">POPULAR</div>}
                <h3>{plano.nome}</h3>
                <div className="preco">
                  {plano.preco === 0 ? (
                    <span className="valor gratis">GRÁTIS</span>
                  ) : (
                    <>
                      <span className="valor">R$ {plano.preco}</span>
                      <span className="periodo">
                        {categoriaAtiva === 'particulares' ? '/aula' : categoriaAtiva === 'visitas' ? '' : '/mês'}
                      </span>
                    </>
                  )}
                </div>
                <ul className="beneficios">
                  {plano.beneficios.map((beneficio, idx) => (
                    <li key={idx}>✓ {beneficio}</li>
                  ))}
                </ul>
                <button 
                  className="btn-plano" 
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePlanoClick(plano.nome);
                  }}
                >
                  COMEÇAR AGORA
                </button>
              </div>
            ))}
          </div>

          <button className="slider-btn next" onClick={nextSlide} aria-label="Próximo plano">›</button>
        </div>
      </div>
    </section>
  );
}
