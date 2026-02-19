'use client';

import Link from 'next/link';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../styles/modalidades.css';

export default function Modalidades() {
  const modalidades = [
    {
      id: 1,
      subtitulo: 'Adulto e Infantil',
      titulo: 'JIU-JITSU',
      slug: 'jiu-jitsu',
      imagem: '/images/modalidades/jiu-jitsu.jpg'
    },
    {
      id: 2,
      subtitulo: 'Adulto e Infantil',
      titulo: 'TAEKWONDO',
      slug: 'taekwondo',
      imagem: '/images/modalidades/taekwondo.jpg'
    },
    {
      id: 3,
      subtitulo: 'Adulto e Infantil',
      titulo: 'JUDÔ',
      slug: 'judo',
      imagem: '/images/modalidades/judo.jpg'
    },
    {
      id: 4,
      subtitulo: 'Adulto',
      titulo: 'MOVE FIGHT',
      slug: 'move-fight',
      imagem: '/images/modalidades/move-fight.jpg'
    }
  ];

  const [gridRef, isGridVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="modalidades" id="modalidades" aria-labelledby="modalidades-title">
      <div className="container">
        <h2 className="section-title" id="modalidades-title">ESCOLHA SEU CAMINHO</h2>
        <p className="section-subtitle">
          Oferecemos modalidades para todas as idades e objetivos. Encontre a arte marcial perfeita para você.
        </p>
        <div className="modalidades-grid" ref={gridRef}>
          {modalidades.map(modalidade => (
            <Link 
              key={modalidade.id}
              href={`/modalidade/${modalidade.slug}`}
              className={`modalidade-card animate-on-scroll ${isGridVisible ? 'visible' : ''}`}
              style={{ backgroundImage: `url(${modalidade.imagem})` }}
            >
              <div className="modalidade-overlay"></div>
              <div className="modalidade-content">
                <span className="modalidade-subtitulo">{modalidade.subtitulo}</span>
                <h3 className="modalidade-titulo">{modalidade.titulo}</h3>
                <span className="modalidade-saiba-mais">Saiba mais →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
