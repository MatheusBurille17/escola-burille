import '../styles/footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>BURILLE</h3>
            <p>Escola de Artes Marciais</p>
          </div>
          <div className="footer-social">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-bottom">
          <p>© 2026 Escola Burille. Todos os direitos reservados.</p>
          <p>Desenvolvido com ❤️ para nossa comunidade</p>
        </div>
      </div>
    </footer>
  );
}
