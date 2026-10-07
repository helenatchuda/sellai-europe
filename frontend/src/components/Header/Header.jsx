import React, { useState, useEffect } from "react";

function Header({ onOpenLogin, onOpenRegister }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLoginClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (onOpenLogin) {
      onOpenLogin();
    }
  };

  const handleRegisterClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onOpenRegister?.();
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <a href="/" className="web_site" aria-label="SellAI Europe home">
          <span className="logo-mark">S</span>
          <span className="logo-text">SellAI<span>Europe</span></span>
        </a>

        <nav className="navbar-links">
          <a href="#produto">Funcionalidades</a>
          <a href="#pagamentos">Pagamentos</a>
          <a href="#precos">Preços</a>
          <a href="#faq">FAQ</a>
        </nav>

        <div className="navbar-actions">
          <button onClick={handleLoginClick} className="login-button" type="button">
            Entrar
          </button>

          <a href="#access" className="request_access" onClick={handleRegisterClick}>
            Começar grátis
          </a>
        </div>

        <button
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={mobileMenuOpen}
          type="button"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <a href="#produto" onClick={() => setMobileMenuOpen(false)}>
            Funcionalidades
          </a>
          <a href="#pagamentos" onClick={() => setMobileMenuOpen(false)}>
            Pagamentos
          </a>
          <a href="#precos" onClick={() => setMobileMenuOpen(false)}>
            Preços
          </a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)}>
            FAQ
          </a>
          <button onClick={handleLoginClick} className="login-button" type="button">
            Entrar
          </button>
          <a
            href="#access"
            className="request_access"
            onClick={handleRegisterClick}
          >
            Começar grátis
          </a>
        </div>
      )}
    </header>
  );
}

export default Header;
