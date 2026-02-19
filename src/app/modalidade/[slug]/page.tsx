import { notFound } from 'next/navigation';
import '@/styles/modalidade-detalhes.css';
import ModalidadeDetalhesClient, { modalidadesData } from './ModalidadeDetalhesClient';

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
  
  if (!modalidadesData[slug]) {
    notFound();
  }

  return <ModalidadeDetalhesClient slug={slug} />;
}
