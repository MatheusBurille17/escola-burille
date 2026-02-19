'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import '../styles/header.css';

export default function Header() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'modalidades', 'horarios', 'planos', 'professores', 'sobre', 'contato'];
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleNavClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    
    if (pathname !== '/') {
      router.push(`/#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname !== '/') {
      router.push('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const whatsappMessage = 'Olá! Gostaria de agendar uma aula experimental.';
    const phone = '554699295745';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="header" role="navigation">
        <div className="header-container">
          <a 
            href="#inicio" 
            className="logo" 
            onClick={handleLogoClick}
            aria-label="Voltar ao início"
          >
            BURILLE
          </a>
          <nav className="nav-desktop" aria-label="Navegação principal">
            <a 
              href="#modalidades" 
              className={activeSection === 'modalidades' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, 'modalidades')}
            >
              Modalidades
            </a>
            <a 
              href="#horarios" 
              className={activeSection === 'horarios' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, 'horarios')}
            >
              Horários
            </a>
            <a 
              href="#planos" 
              className={activeSection === 'planos' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, 'planos')}
            >
              Planos
            </a>
            <a 
              href="#professores" 
              className={activeSection === 'professores' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, 'professores')}
            >
              Professores
            </a>
            <a 
              href="#sobre" 
              className={activeSection === 'sobre' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, 'sobre')}
            >
              Sobre
            </a>
            <a 
              href="#contato" 
              className={activeSection === 'contato' ? 'active' : ''}
              onClick={(e) => handleNavClick(e, 'contato')}
            >
              Contato
            </a>
            <a 
              href="https://wa.me/554699295745" 
              className="btn-agendar"
              onClick={handleWhatsAppClick}
            >
              Aula experimental
            </a>
          </nav>
          <button 
            className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
        <nav 
          id="mobile-menu"
          className={`nav-mobile ${isMenuOpen ? 'open' : ''}`}
          aria-label="Menu de navegação"
        >
          <a 
            href="#modalidades" 
            className={activeSection === 'modalidades' ? 'active' : ''}
            onClick={(e) => handleNavClick(e, 'modalidades')}
          >
            Modalidades
          </a>
          <a 
            href="#horarios" 
            className={activeSection === 'horarios' ? 'active' : ''}
            onClick={(e) => handleNavClick(e, 'horarios')}
          >
            Horários
          </a>
          <a 
            href="#planos" 
            className={activeSection === 'planos' ? 'active' : ''}
            onClick={(e) => handleNavClick(e, 'planos')}
          >
            Planos
          </a>
          <a 
            href="#professores" 
            className={activeSection === 'professores' ? 'active' : ''}
            onClick={(e) => handleNavClick(e, 'professores')}
          >
            Professores
          </a>
          <a 
            href="#sobre" 
            className={activeSection === 'sobre' ? 'active' : ''}
            onClick={(e) => handleNavClick(e, 'sobre')}
          >
            Sobre
          </a>
          <a 
            href="#contato" 
            className={activeSection === 'contato' ? 'active' : ''}
            onClick={(e) => handleNavClick(e, 'contato')}
          >
            Contato
          </a>
          <a 
            href="https://wa.me/554699295745" 
            className="btn-agendar-mobile"
            onClick={handleWhatsAppClick}
          >
            Aula experimental
          </a>
        </nav>
      </header>
      
      <a 
        href="https://wa.me/554699295745" 
        className="btn-agendar-fixed-mobile"
        onClick={handleWhatsAppClick}
        aria-label="Agendar aula experimental"
      >
        CLIQUE AQUI - AGENDE SUA AULA
      </a>
    </>
  );
}
