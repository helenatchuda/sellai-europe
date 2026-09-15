import React from 'react';


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Parte Superior */}
        <div className="footer-top">
          
          {/* Marca / Redes Sociais */}
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <span className="footer-logo-badge">S</span>
              SellAI<span style={{ color: '#6366F1' }}>.Europe</span>
            </a>

            <p className="footer-brand-text">
              A plataforma de AI Commerce construída para a Europa.
            </p>

            <div className="footer-socials">
              <a href="#" className="footer-social-btn">X</a>
              <a href="#" className="footer-social-btn">LinkedIn</a>
              <a href="#" className="footer-social-btn">Instagram</a>
            </div>
          </div>

          {/* Colunas de Navegação */}
          <div className="footer-nav-grid">
            
            {/* Coluna 1: Produto */}
            <div>
              <h4 className="footer-column-title">PRODUTO</h4>
              <ul className="footer-links">
                <li><a href="#funcionalidades" className="footer-link">Funcionalidades</a></li>
                <li><a href="#ai-creator-studio" className="footer-link">AI Creator Studio</a></li>
                <li><a href="#afiliados" className="footer-link">Afiliados</a></li>
                <li><a href="#integracoes" className="footer-link">Integrações</a></li>
                <li><a href="#precos" className="footer-link">Preços</a></li>
              </ul>
            </div>

            {/* Coluna 2: Empresa */}
            <div>
              <h4 className="footer-column-title">EMPRESA</h4>
              <ul className="footer-links">
                <li><a href="#sobre" className="footer-link">Sobre nós</a></li>
                <li><a href="#blog" className="footer-link">Blog</a></li>
                <li><a href="#carreiras" className="footer-link">Carreiras</a></li>
                <li><a href="#contacto" className="footer-link">Contacto</a></li>
                <li><a href="#imprensa" className="footer-link">Imprensa</a></li>
              </ul>
            </div>

            {/* Coluna 3: Legal */}
            <div>
              <h4 className="footer-column-title">LEGAL</h4>
              <ul className="footer-links">
                <li><a href="#privacidade" className="footer-link">Política de Privacidade</a></li>
                <li><a href="#termos" className="footer-link">Termos de Serviço</a></li>
                <li><a href="#cookies" className="footer-link">Política de Cookies</a></li>
                <li><a href="#rgpd" className="footer-link">RGPD</a></li>
                <li><a href="#dpa" className="footer-link">DPA</a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Parte Inferior */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} SellAI Europe, Lda. Feito em Portugal 🇵🇹
          </p>

          <div className="footer-languages">
            <button className="footer-lang-btn active">PT</button>
            <button className="footer-lang-btn">ES</button>
            <button className="footer-lang-btn">FR</button>
            <button className="footer-lang-btn">DE</button>
            <button className="footer-lang-btn">IT</button>
          </div>
        </div>

      </div>
    </footer>
  );
}