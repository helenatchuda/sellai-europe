import React, { useState, useEffect } from "react";

const Navbar = () => {
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

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <a href="/" className="web_site" aria-label="SellAI Europe home">
          <span className="logo-mark">S</span>
          <span className="logo-text">
            SellAI<span>Europe</span>
          </span>
        </a>

        <nav className="navbar-links">
          <a href="#produto">Produto</a>
          <a href="#porque-europa">Porquê Europa</a>
          <a href="#precos">Preços</a>
          <a href="#faq">FAQ</a>
        </nav>

        <div className="navbar-actions">
          <a href="#login" className="login">
            Entrar
          </a>

          <a href="#access" className="request_access">
            Pedir Acesso
          </a>
        </div>

        <button
          className="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-menu">
          <a href="#produto" onClick={() => setMobileMenuOpen(false)}>
            Produto
          </a>
          <a href="#porque-europa" onClick={() => setMobileMenuOpen(false)}>
            Porquê Europa
          </a>
          <a href="#precos" onClick={() => setMobileMenuOpen(false)}>
            Preços
          </a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)}>
            FAQ
          </a>
          <a href="#login" onClick={() => setMobileMenuOpen(false)}>
            Entrar
          </a>
          <a
            href="#access"
            className="request_access"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pedir Acesso
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;