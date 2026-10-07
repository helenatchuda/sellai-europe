import React, { useState } from 'react';

const EXAMPLES = [
  "Curso de inglês para profissionais B2",
  "E-book sobre finanças pessoais para freelancers",
  "Pack de prompts de IA para criadores de conteúdo",
  "Template de bio e captions para Instagram",
  "Curso de edição de vídeo para TikTok"
];

const OUTPUT_ITEMS = [
  {
    icon: '🌐',
    title: 'Landing page',
    description: 'Headline, bullets, prova social, FAQ, CTA — pronto a publicar.'
  },
  {
    icon: '📧',
    title: '5 e-mails de sequência',
    description: 'Boas-vindas, valor, prova social, urgência e recuperação.'
  },
  {
    icon: '✍️',
    title: 'Copy de vendas',
    description: 'Texto longo persuasivo para email e anúncios.'
  },
  {
    icon: '🎬',
    title: 'Script de vídeo 30s',
    description: 'Para TikTok, Instagram Reels e YouTube Shorts.'
  },
  {
    icon: '🔄',
    title: 'Funil de vendas',
    description: 'Order bump, upsell e página de obrigado.'
  },
  {
    icon: '💳',
    title: 'Checkout pronto',
    description: 'MB Way, Multibanco e Stripe configurados.'
  }
];

export default function AICreatorStudioPage() {
  const [prompt, setPrompt] = useState('');

  const handleSelectExample = (text) => {
    setPrompt(text);
  };

  return (
    <div className="studio-container">
      {/* Navbar Superior */}
      <header className="studio-header">
        <div className="studio-nav-left">
          <a href="/" className="studio-back-link">← Voltar</a>
          <span className="studio-divider">|</span>
          <div className="studio-brand">
            <span className="studio-logo-badge">S</span>
            <span className="studio-brand-name">SellAI.Europe</span>
          </div>
          <span className="studio-divider">|</span>
          <span className="studio-page-title">AI Creator Studio</span>
        </div>
      </header>

      {/* Hero Section */}
      <main className="studio-content">
        <div className="studio-badge">
          🤖 AI Creator Studio
        </div>

        <h1 className="studio-main-title">
          Descreve o teu produto.<br />
          <span className="gradient-text">A IA cria tudo em segundos.</span>
        </h1>

        <p className="studio-subtitle">
          Landing page · Copy · 5 e-mails · Script de vídeo · Funil de vendas
        </p>

        {/* Card do Formulário */}
        <div className="studio-card">
          <label className="studio-input-label">
            Descreve o teu produto numa frase
          </label>

          <textarea
            className="studio-textarea"
            placeholder="Ex: Quero vender um curso de inglês para profissionais que precisam de inglês no trabalho..."
            maxLength={300}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={4}
          />

          <div className="studio-card-footer">
            <span className="studio-char-count">
              {prompt.length}/300 · ⌘+Enter para gerar
            </span>
            <button 
              className="studio-submit-btn" 
              disabled={!prompt.trim()}
            >
              Gerar com IA →
            </button>
          </div>

          {/* Exemplos para Começar */}
          <div className="studio-examples-section">
            <span className="studio-examples-title">Exemplos para começar:</span>
            <div className="studio-chips-group">
              {EXAMPLES.map((ex, idx) => (
                <button
                  key={idx}
                  className="studio-chip-btn"
                  onClick={() => handleSelectExample(ex)}
                >
                  {ex}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Secção "O QUE A IA VAI CRIAR" */}
        <section className="studio-outputs-section">
          <h2 className="studio-section-label">O QUE A IA VAI CRIAR</h2>

          <div className="studio-outputs-grid">
            {OUTPUT_ITEMS.map((item, idx) => (
              <div key={idx} className="studio-output-card">
                <div className="studio-output-icon">{item.icon}</div>
                <div className="studio-output-details">
                  <h3 className="studio-output-title">{item.title}</h3>
                  <p className="studio-output-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Botão Flutuante de Suporte */}
      <button className="studio-help-btn" title="Ajuda">?</button>
    </div>
  );
}