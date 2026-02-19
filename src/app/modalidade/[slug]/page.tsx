import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Contato from '@/components/Contato';
import '@/styles/modalidade-detalhes.css';

interface Professor {
  nome: string;
  faixa: string;
  imagem: string;
}

interface Metodologia {
  titulo: string;
  descricao: string;
  topicos: string[];
}

interface ModalidadeData {
  titulo: string;
  subtitulo: string;
  descricao: string;
  imagens: string[];
  metodologia: Metodologia;
  professores: Professor[];
}

const modalidadesData: Record<string, ModalidadeData> = {
  'jiu-jitsu': {
    titulo: 'JIU-JITSU',
    subtitulo: 'Adulto e Infantil',
    descricao: 'O Jiu-Jitsu é uma arte marcial que enfatiza técnicas de solo, alavancas e estrangulamentos.',
    imagens: ['/images/modalidades/jiu-jitsu-banner.jpg'],
    metodologia: {
      titulo: 'Nossa Metodologia',
      descricao: 'Nosso programa de Jiu-Jitsu combina técnicas tradicionais com métodos modernos de ensino.',
      topicos: ['Fundamentos sólidos', 'Técnicas avançadas', 'Treino de competição', 'Autodefesa prática']
    },
    professores: [
      { nome: 'Professor Felipe Burille', faixa: 'Faixa Preta', imagem: '/images/professores/felipe-burille.webp' },
      { nome: 'Instrutor Pedro', faixa: 'Faixa Marrom', imagem: '/images/professores/pedro-ariel.webp' }
    ]
  },
  'taekwondo': {
    titulo: 'TAEKWONDO',
    subtitulo: 'Adulto e Infantil',
    descricao: 'O Taekwondo é uma arte marcial coreana conhecida por seus chutes espetaculares.',
    imagens: ['https://images.unsplash.com/photo-1555597408-26bc8e548a46?w=1200&q=80'],
    metodologia: {
      titulo: 'Nossa Metodologia',
      descricao: 'Seguimos os princípios tradicionais do Taekwondo.',
      topicos: ['Técnicas de chutes', 'Formas tradicionais', 'Combate esportivo', 'Quebramento']
    },
    professores: [
      { nome: 'Professor Rafael Sales', faixa: '3º Dan', imagem: '/images/professores/rafael-sales.webp' }
    ]
  },
  'judo': {
    titulo: 'JUDÔ',
    subtitulo: 'Adulto e Infantil',
    descricao: 'O Judô é uma arte marcial japonesa que enfatiza arremessos e imobilizações.',
    imagens: ['https://images.unsplash.com/photo-1517438476312-10d79c077509?w=1200&q=80'],
    metodologia: {
      titulo: 'Nossa Metodologia',
      descricao: 'Baseamos nosso ensino nos princípios do Judô.',
      topicos: ['Ukemi (quedas seguras)', 'Técnicas de arremesso', 'Técnicas de solo', 'Kata e competição']
    },
    professores: [
      { nome: 'Sensei Alex Bauer', faixa: 'Faixa Preta 3º Dan', imagem: '/images/professores/alex-bauer.webp' }
    ]
  },
  'move-fight': {
    titulo: 'MOVE FIGHT',
    subtitulo: 'Adulto',
    descricao: 'Move Fight é um programa intensivo que combina técnicas de várias artes marciais.',
    imagens: ['https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=1200&q=80'],
    metodologia: {
      titulo: 'Nossa Metodologia',
      descricao: 'Combinamos elementos de boxe, muay thai, jiu-jitsu e condicionamento funcional.',
      topicos: ['Striking e grappling', 'Condicionamento cardiovascular', 'Defesa pessoal', 'Treino funcional']
    },
    professores: [
      { nome: 'Professor Carlos', faixa: 'Instrutor de Muay-thai', imagem: '/images/professores/carlos.webp' }
    ]
  }
};

export async function generateStaticParams() {
  return Object.keys(modalidadesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const modalidade = modalidadesData[slug];
  
  if (!modalidade) {
    return { title: 'Modalidade não encontrada' };
  }

  return {
    title: `${modalidade.titulo} - Escola Burille | Pato Branco - PR`,
    description: modalidade.descricao,
  };
}

export default async function ModalidadeDetalhes({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const modalidade = modalidadesData[slug];

  if (!modalidade) {
    notFound();
  }

  return (
    <div className="modalidade-detalhes-container">
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

      <section className="metodologia-section">
        <div className="container">
          <h2>{modalidade.metodologia.titulo}</h2>
          <p>{modalidade.metodologia.descricao}</p>
          <ul>
            {modalidade.metodologia.topicos.map((topico, idx) => (
              <li key={idx}>{topico}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="professores-section">
        <div className="container">
          <h2>Professores</h2>
          <div className="professores-grid">
            {modalidade.professores.map((prof, idx) => (
              <div key={idx} className="professor-card">
                <Image 
                  src={prof.imagem} 
                  alt={prof.nome} 
                  width={300}
                  height={300}
                  loading="lazy"
                />
                <h3>{prof.nome}</h3>
                <p>{prof.faixa}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contato />
    </div>
  );
}
