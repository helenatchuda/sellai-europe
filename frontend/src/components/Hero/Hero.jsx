import React, { useState } from 'react';
import AICreatorStudioCard from './AICreatorStudioCard';

function Hero({ onOpenLogin }) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    
    if (onOpenLogin) {
      onOpenLogin();
    }
  };

  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <h1 className="hero-title">
            <span>A <span className="hero-accent">plataforma de AI</span></span>
            <span>Commerce</span>
            <span>construída para a</span>
            <span>Europa.</span>
          </h1>

          <p className="hero-text">
            Descreve o teu produto. A IA gera a página de vendas, copy, funil de e-mails e vídeo automaticamente. Recebe em euros com MB Way, Multibanco e Stripe.
          </p>

          <form className="hero-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="o-teu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">
              {submitted ? 'Obrigado! ✓' : 'Pedir Acesso'} <span aria-hidden="true">→</span>
            </button>
          </form>

          <div className="hero-features">
            <span>✓ Sem cartão de crédito</span>
            <span>✓ RGPD Compliant</span>
            <span>✓ Feito em Portugal</span>
          </div>
        </div>

        <AICreatorStudioCard />
      </div>
    </section>
  );
}

export default Hero;