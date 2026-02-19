'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Contato from '@/components/Contato';

interface Professor {
  nome: string;
  faixa: string;
  imagem: string;
}

interface Pilar {
  titulo: string;
  cor: string;
  foco: string;
  caracteristicas: string[];
}

interface ModalidadeData {
  titulo: string;
  subtitulo: string;
  descricao: string;
  imagens: string[];
  metodologia: {
    titulo: string;
    descricao: string;
    intro?: string;
  };
  professores: Professor[];
  sistemaGraduacao?: {
    imagem: string;
  };
  pilares?: Pilar[];
}

export const modalidadesData: Record<string, ModalidadeData> = {
  'jiu-jitsu': {
    titulo: 'JIU-JITSU',
    subtitulo: 'Adulto e Infantil',
    descricao: 'O Jiu-Jitsu é uma arte marcial que enfatiza técnicas de solo, alavancas e estrangulamentos. Desenvolve disciplina, autoconfiança e condicionamento físico.',
    imagens: ['/images/modalidades/jiu-jitsu-banner.jpg'],
    metodologia: {
      titulo: 'NOSSA METODOLOGIA',
      descricao: 'Nossa metodologia foi cuidadosamente desenvolvida para unir o ensino técnico do Jiu-Jitsu ao desenvolvimento de valores e virtudes essenciais para a formação humana. Mais do que ensinar golpes e posições, trabalhamos disciplina, respeito, responsabilidade, liderança e resiliência em todas as faixas etárias. Cada treino é planejado para promover evolução técnica, preparo físico adequado e fortalecimento mental, respeitando o nível e a maturidade de cada aluno.',
      intro: 'Acreditamos que o Jiu-Jitsu é uma ferramenta poderosa de transformação. Por isso, formamos crianças mais confiantes, jovens mais preparados para desafios e adultos mais fortes e equilibrados. Nosso objetivo é desenvolver não apenas atletas, mas pessoas com caráter, autocontrole e mentalidade vencedora — dentro e fora do tatame.'
    },
    professores: [
      { nome: 'Professor Felipe Burille', faixa: 'Faixa Preta', imagem: '/images/professores/felipe-burille.webp' },
      { nome: 'Instrutor Pedro', faixa: 'Faixa Marrom', imagem: '/images/professores/pedro-ariel.webp' },
      { nome: 'Instrutor Thais', faixa: 'Faixa Marrom', imagem: '/images/professores/thais.webp' },
      { nome: 'Instrutor Matheus', faixa: 'Faixa Roxa', imagem: '/images/professores/matheus-burille.webp' },
      { nome: 'Instrutor Néia', faixa: 'Faixa Azul', imagem: '/images/professores/neia.webp' }
    ],
    sistemaGraduacao: {
      imagem: '/images/modalidades/sistema-graduacao-jiu-jitsu.jpg'
    },
    pilares: [
      {
        titulo: 'BABY',
        cor: 'azul',
        foco: 'Foco na disciplina',
        caracteristicas: [
          'Desenvolver coordenação motora',
          'Desenvolvimento da disciplina básica',
          'Convivência em grupo',
          'Aulas lúdicas',
          'Foco em brincadeiras'
        ]
      },
      {
        titulo: 'INFANTIL I',
        cor: 'amarelo',
        foco: 'Foco no respeito',
        caracteristicas: [
          'Introduzir a técnica do Jiu-Jitsu',
          'Respeitar a todos',
          'Desenvolver a escuta ativa',
          'Reforçar a disciplina',
          'Trabalho em equipe',
          'Controle emocional inicial'
        ]
      },
      {
        titulo: 'INFANTIL II',
        cor: 'vermelho',
        foco: 'Foco na autoconfiança',
        caracteristicas: [
          'Desenvolver técnica com consciência corporal',
          'Introduzir noções de estratégia',
          'Ter boas notas escolares',
          'Desenvolver a autoconfiança',
          'Trabalho de companheirismo',
          'Respeitar as regras da escola'
        ]
      },
      {
        titulo: 'INFANTO-JUVENIL',
        cor: 'verde',
        foco: 'Foco na sabedoria',
        caracteristicas: [
          'Aprimorar técnica',
          'Fortalecer virtudes pessoais e sociais',
          'Introduzir rolas mais competitivos',
          'Controle emocional sob pressão',
          'Desenvolvimento da liderança',
          'Humildade'
        ]
      },
      {
        titulo: 'ADULTO E JUVENIL',
        cor: 'roxo',
        foco: 'Foco na perseverança',
        caracteristicas: [
          'Manter a consistência nos treinos',
          'Superar desafios com determinação',
          'Respeitar hierarquia e tradições',
          'Praticar técnicas com dedicação',
          'Demonstrar resiliência nas dificuldades',
          'Buscar evolução constante'
        ]
      }
    ]
  },
  'taekwondo': {
    titulo: 'TAEKWONDO',
    subtitulo: 'Adulto e Infantil',
    descricao: 'O Taekwondo é uma arte marcial coreana conhecida por seus chutes espetaculares e técnicas de combate dinâmicas. Desenvolve flexibilidade, força e disciplina mental.',
    imagens: ['/images/modalidades/taekwondo.jpg'],
    metodologia: {
      titulo: 'NOSSA METODOLOGIA',
      descricao: 'Nossa metodologia de Taekwondo é baseada nos cinco princípios fundamentais: Cortesia (Ye Ui), Integridade (Yom Chi), Perseverança (In Nae), Autocontrole (Guk Gi) e Espírito Indomável (Baekjul Boolgool). Cada treino é cuidadosamente planejado para desenvolver não apenas as habilidades técnicas características do Taekwondo, mas também fortalecer o caráter e a disciplina mental dos praticantes.',
      intro: 'Acreditamos que o Taekwondo é uma arte marcial completa que transforma vidas. Formamos praticantes que dominam técnicas espetaculares de chutes e socos, mas que também carregam valores de respeito, humildade e determinação. Nosso objetivo é desenvolver campeões na vida, pessoas preparadas para superar desafios com coragem e integridade.'
    },
    professores: [
      { nome: 'Professor Rafael Sales', faixa: '3º Dan', imagem: '/images/professores/rafael-sales.webp' }
    ],
    pilares: [
      {
        titulo: 'BABY TAEKWONDO',
        cor: 'azul',
        foco: 'Foco na cortesia',
        caracteristicas: [
          'Desenvolver coordenação e equilíbrio',
          'Aprender cumprimentos e respeito',
          'Movimentos básicos de chutes e socos',
          'Atividades lúdicas e divertidas',
          'Socialização e trabalho em grupo'
        ]
      },
      {
        titulo: 'INFANTIL',
        cor: 'amarelo',
        foco: 'Foco na integridade',
        caracteristicas: [
          'Técnicas fundamentais de chutes',
          'Formas básicas (Poomsae)',
          'Desenvolvimento da flexibilidade',
          'Valores de honestidade e respeito',
          'Primeiras competições',
          'Quebramento básico'
        ]
      },
      {
        titulo: 'INFANTO-JUVENIL',
        cor: 'vermelho',
        foco: 'Foco na perseverança',
        caracteristicas: [
          'Técnicas avançadas de chutes',
          'Poomsae intermediário e avançado',
          'Combate esportivo (Kyorugi)',
          'Superação de limites',
          'Preparação para competições',
          'Quebramento avançado'
        ]
      },
      {
        titulo: 'ADULTO',
        cor: 'verde',
        foco: 'Foco no autocontrole',
        caracteristicas: [
          'Refinamento técnico constante',
          'Condicionamento físico intenso',
          'Domínio de Poomsae avançados',
          'Combate de alto nível',
          'Controle emocional e mental',
          'Defesa pessoal aplicada'
        ]
      }
    ]
  },
  'judo': {
    titulo: 'JUDÔ',
    subtitulo: 'Adulto e Infantil',
    descricao: 'O Judô é uma arte marcial japonesa que enfatiza arremessos, imobilizações e técnicas de controle. Promove respeito, disciplina e desenvolvimento físico completo.',
    imagens: ['/images/modalidades/judo.jpg'],
    metodologia: {
      titulo: 'NOSSA METODOLOGIA',
      descricao: 'Nossa metodologia de Judô é fundamentada nos princípios tradicionais japoneses, unindo técnica, filosofia e formação de caráter. Seguimos os ensinamentos de Jigoro Kano, criador do Judô, que buscava não apenas desenvolver habilidades físicas, mas também formar cidadãos íntegros e respeitosos. Cada treino é estruturado para promover o desenvolvimento técnico, físico e mental, sempre respeitando a individualidade e o ritmo de cada praticante.',
      intro: 'Acreditamos que o Judô é uma jornada de autoconhecimento e superação. Formamos judocas que compreendem os valores de respeito, humildade e perseverança. Nosso objetivo é desenvolver não apenas competidores, mas pessoas equilibradas, disciplinadas e preparadas para os desafios da vida — dentro e fora do tatame.'
    },
    professores: [
      { nome: 'Sensei Alex Bauer', faixa: 'Faixa Preta 3º Dan', imagem: '/images/professores/alex-bauer.webp' }
    ],
    sistemaGraduacao: {
      imagem: '/images/modalidades/sistema-graduacao-judo.jpg'
    },
    pilares: [
      {
        titulo: 'BABY JUDÔ',
        cor: 'azul',
        foco: 'Foco na coordenação motora',
        caracteristicas: [
          'Desenvolver equilíbrio e coordenação',
          'Aprender quedas seguras (Ukemi)',
          'Convivência e respeito em grupo',
          'Atividades lúdicas e recreativas',
          'Introdução aos valores do Judô'
        ]
      },
      {
        titulo: 'INFANTIL',
        cor: 'amarelo',
        foco: 'Foco no respeito e disciplina',
        caracteristicas: [
          'Técnicas básicas de arremesso',
          'Respeito ao sensei e colegas',
          'Etiqueta do tatame (Reishiki)',
          'Desenvolvimento da concentração',
          'Trabalho em equipe',
          'Primeiras competições'
        ]
      },
      {
        titulo: 'INFANTO-JUVENIL',
        cor: 'vermelho',
        foco: 'Foco na técnica e estratégia',
        caracteristicas: [
          'Aprimoramento técnico avançado',
          'Desenvolvimento de estratégias de combate',
          'Preparação para competições',
          'Fortalecimento físico e mental',
          'Liderança e responsabilidade',
          'Estudo de Kata'
        ]
      },
      {
        titulo: 'ADULTO',
        cor: 'verde',
        foco: 'Foco na excelência técnica',
        caracteristicas: [
          'Refinamento técnico constante',
          'Condicionamento físico completo',
          'Preparação para competições de alto nível',
          'Estudo aprofundado de Kata',
          'Desenvolvimento de mentalidade vencedora',
          'Filosofia e história do Judô'
        ]
      }
    ]
  },
  'move-fight': {
    titulo: 'MOVE FIGHT',
    subtitulo: 'Adulto',
    descricao: 'Move Fight é um programa intensivo que combina técnicas de várias artes marciais com condicionamento físico de alta intensidade. Ideal para quem busca defesa pessoal e fitness.',
    imagens: ['/images/modalidades/move-fight.jpg'],
    metodologia: {
      titulo: 'NOSSA METODOLOGIA',
      descricao: 'O Move Fight é um programa exclusivo que combina o melhor de várias artes marciais com treinamento funcional de alta intensidade. Nossa metodologia integra técnicas de striking (boxe, muay thai, kickboxing), grappling (jiu-jitsu, luta livre) e condicionamento físico avançado. Cada aula é estruturada para desenvolver força, resistência, agilidade e habilidades de combate real, sempre com foco em segurança e progressão individual.',
      intro: 'Acreditamos que o Move Fight é mais do que um treino — é uma transformação completa. Formamos praticantes confiantes, preparados fisicamente e mentalmente para qualquer desafio. Nosso objetivo é desenvolver pessoas fortes, resilientes e capazes de se defender, enquanto alcançam seus objetivos de fitness e bem-estar.'
    },
    professores: [
      { nome: 'Professor Carlos', faixa: 'Instrutor de Muay-thai', imagem: '/images/professores/carlos.webp' }
    ],
    pilares: [
      {
        titulo: 'STRIKING',
        cor: 'azul',
        foco: 'Técnicas de golpes',
        caracteristicas: [
          'Boxe - socos e movimentação',
          'Muay Thai - chutes, joelhadas e cotoveladas',
          'Kickboxing - combinações dinâmicas',
          'Defesa e esquivas',
          'Trabalho de saco e manoplas'
        ]
      },
      {
        titulo: 'GRAPPLING',
        cor: 'amarelo',
        foco: 'Técnicas de luta agarrada',
        caracteristicas: [
          'Jiu-Jitsu - controle e finalizações',
          'Luta livre - quedas e transições',
          'Defesa pessoal no solo',
          'Escape de situações de perigo',
          'Condicionamento específico'
        ]
      },
      {
        titulo: 'CONDICIONAMENTO',
        cor: 'vermelho',
        foco: 'Preparo físico intenso',
        caracteristicas: [
          'Treino funcional de alta intensidade',
          'Desenvolvimento cardiovascular',
          'Força e potência muscular',
          'Agilidade e coordenação',
          'Resistência e explosão'
        ]
      },
      {
        titulo: 'DEFESA PESSOAL',
        cor: 'verde',
        foco: 'Aplicação prática',
        caracteristicas: [
          'Situações reais de confronto',
          'Defesa contra múltiplos oponentes',
          'Técnicas de desarmamento',
          'Controle de distância e timing',
          'Mentalidade de autodefesa'
        ]
      }
    ]
  }
};

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
          <button className="btn-agendar-hero">Agendar Aula Experimental</button>
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
