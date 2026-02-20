'use client';

import Image from 'next/image';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useState, useEffect } from 'react';
import '../styles/professores.css';

export default function Professores() {
  const [showAllProfessores, setShowAllProfessores] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const professores = [
    { id: 1, nome: 'Felipe Burille', especialidade: 'Professor de Jiu-jitsu', experiencia: '14 anos', descricao: 'Fundador da escola, faixa preta em Jiu-Jitsu.', foto: '/images/professores/felipe-burille.webp', instagram: 'https://www.instagram.com/felipe.burille/' },
    { id: 2, nome: 'Rafael Sales', especialidade: 'professor de Taekwondo', experiencia: '15 anos', descricao: 'Campeão estadual de Taekwondo.', foto: '/images/professores/rafael-sales.webp', instagram: 'https://www.instagram.com/_rafael_sales/' },
    { id: 3, nome: 'Alex Bauer', especialidade: 'professor de Judô', experiencia: '30 anos', descricao: 'Faixa preta em Judô e jiu-jitsu.', foto: '/images/professores/alex-bauer.webp', instagram: 'https://www.instagram.com/baueralexsandro/' },
    { id: 4, nome: 'Carlos Blonkoski', especialidade: 'professor de Move & Fight', experiencia: '2 anos', descricao: 'Especialista em defesa pessoal.', foto: '/images/professores/carlos.webp', instagram: 'https://www.instagram.com/blonkoski.carlos/' },
    { id: 5, nome: 'Pedro Ariel', especialidade: 'Instrutor de Jiu-jitsu', experiencia: '2 anos', descricao: 'Instrutor dedicado.', foto: '/images/professores/pedro-ariel.webp', instagram: 'https://www.instagram.com/pedroarieldasilva/' },
    { id: 6, nome: 'Thais', especialidade: 'Instrutora de Jiu-jitsu', experiencia: '2 anos', descricao: 'Instrutora experiente.', foto: '/images/professores/thais.webp', instagram: 'https://www.instagram.com/thaispiovezana/' },
    { id: 7, nome: 'Matheus Burille', especialidade: 'Instrutor de Jiu-jitsu', experiencia: '2 anos', descricao: 'Instrutor qualificado.', foto: '/images/professores/matheus-burille.webp', instagram: 'https://www.instagram.com/matheus.burille/' },
    { id: 8, nome: 'Néia', especialidade: 'Instrutora de Jiu-jitsu', experiencia: '2 anos', descricao: 'Instrutora dedicada.', foto: '/images/professores/neia.webp', instagram: 'https://www.instagram.com/laudineiateixeira/' },
    { id: 9, nome: 'Fabiolla', especialidade: 'Atendimento e professora de Move & Fight', experiencia: '2 anos', descricao: 'Atendimento e instrução.', foto: '/images/professores/fabiolla.webp', instagram: '#' },
    { id: 10, nome: 'Luciana', especialidade: 'Atendimento', experiencia: '2 anos', descricao: 'Atendimento ao cliente.', foto: '/images/professores/luciana.webp', instagram: '#' },
    { id: 11, nome: 'Jairo Toss', especialidade: 'Gerente', experiencia: '2 anos', descricao: 'Gerente da escola.', foto: '/images/professores/jairo.webp', instagram: '#' },
  ];

  const [gridRef, isGridVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="professores" id="professores" aria-labelledby="professores-title">
      <div className="container">
        <h2 className="section-title" id="professores-title">Nossa equipe</h2>
        <p className="section-subtitle">
          Conheça nossa equipe de instrutores e atendentes qualificados e apaixonados pelo ensino
        </p>
        <div className="professores-grid" ref={gridRef}>
          {professores.map((prof, index) => (
            <div 
              key={prof.id} 
              className={`professor-card animate-on-scroll ${isGridVisible ? 'visible' : ''} ${isMobile && !showAllProfessores && index > 2 ? 'hidden-mobile' : ''}`}
            >
              <div className="professor-foto-container">
                <Image 
                  src={prof.foto} 
                  alt={`Foto de ${prof.nome}`}
                  className="professor-foto"
                  width={300}
                  height={300}
                  loading="lazy"
                />
              </div>
              <div className="professor-info">
                <h3>{prof.nome}</h3>
                <p className="especialidade">{prof.especialidade}</p>
                <a href={prof.instagram} className="instagram-link" aria-label={`Instagram de ${prof.nome}`} target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        {isMobile && professores.length > 3 && (
          <div className="ver-mais-container">
            <button className="btn-ver-mais" onClick={() => setShowAllProfessores(!showAllProfessores)}>
              {showAllProfessores ? 'Ver menos' : `Ver mais (${professores.length - 3})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
