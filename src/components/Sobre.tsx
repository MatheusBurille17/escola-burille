import '../styles/sobre.css';

export default function Sobre() {
  return (
    <section className="sobre" id="sobre" aria-labelledby="sobre-title">
      <div className="container">
        <div className="sobre-content">
          <div className="sobre-texto">
            <h2 className="section-title" id="sobre-title">SOBRE A ESCOLA</h2>
            <p>
              Fundada em 2025 por Felipe Burille e Jairo Toss, a Escola Burille nasceu do sonho de levar 
              as artes marciais para toda a comunidade.
            </p>
            <p>
              Hoje, somos referência em ensino de artes marciais, formando não apenas 
              atletas, mas cidadãos conscientes, disciplinados e preparados para os 
              desafios da vida. Nossa metodologia une tradição milenar com técnicas 
              modernas de ensino.
            </p>
            <p>
              Acreditamos que as artes marciais vão muito além do tatame. Elas ensinam 
              respeito, perseverança, autocontrole e confiança. Cada aluno é único, e 
              nosso compromisso é desenvolver o melhor de cada um.
            </p>
          </div>
          
          <div className="sobre-valores">
            <div className="valor-card">
              <span className="valor-icon">🎯</span>
              <div className="valor-content">
                <h3>MISSÃO</h3>
                <p>
                  Formar cidadãos através das artes marciais, desenvolvendo não apenas 
                  habilidades físicas, mas também valores essenciais como disciplina, 
                  respeito e perseverança.
                </p>
              </div>
            </div>
            
            <div className="valor-card">
              <span className="valor-icon">💎</span>
              <div className="valor-content">
                <h3>VALORES</h3>
                <p>
                  Respeito, disciplina, perseverança, humildade, excelência e espírito 
                  de equipe. Estes são os pilares que guiam cada aula e cada interação 
                  em nossa escola.
                </p>
              </div>
            </div>
            
            <div className="valor-card">
              <span className="valor-icon">🚀</span>
              <div className="valor-content">
                <h3>VISÃO</h3>
                <p>
                  Ser referência em ensino de artes marciais, reconhecida pela qualidade 
                  técnica, formação de campeões e impacto positivo na vida de nossos alunos 
                  e comunidade.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <blockquote className="citacao">
          &ldquo;O tatame é o lugar onde aprendemos a cair para poder levantar mais fortes.&rdquo;
        </blockquote>
      </div>
    </section>
  );
}
