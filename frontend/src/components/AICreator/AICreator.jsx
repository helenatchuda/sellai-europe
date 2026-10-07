import React from 'react';

export default function AICreator() {
  const steps = [
    {
      number: '01',
      title: 'Escreve uma frase',
      description: '"Quero vender um curso de inglês para profissionais." É suficiente para a IA criar tudo.',
    },
    {
      number: '02',
      title: 'A IA cria os activos',
      description: 'Landing page, copy persuasivo, sequência de 5 e-mails, script de vídeo e checkout. Em segundos.',
    },
    {
      number: '03',
      title: 'Revês e publicas',
      description: 'Editas o que quiseres ou publicas directamente. A tua página está online com checkout em euros.',
    },
  ];

  const generatedOutputs = [
    {
      icon: '🌐',
      title: 'Landing page completa',
      description: 'Headline, copywriting, social proof, FAQ e CTA optimizados para conversão.',
    },
    {
      icon: '📧',
      title: 'Sequência de e-mails',
      description: '5 e-mails: boas-vindas, valor, prova social, urgência e recuperação de abandono.',
    },
    {
      icon: '✍️',
      title: 'Copy de vendas',
      description: 'Texto persuasivo em PT, ES, FR, IT, DE. Optimizado para SEO e conversão.',
    },
    {
      icon: '🎬',
      title: 'Script de vídeo promo',
      description: 'Guião de 30–60 segundos para TikTok, Instagram Reels e YouTube Shorts.',
    },
    {
      icon: '🔄',
      title: 'Funil de vendas',
      description: 'Upsell, order bump, downsell e página de obrigado configurados automaticamente.',
    },
  ];

  return (
    <section id="ai-creator" className="creator-section">
      <div className="creator-container">
        
        {/* Lado Esquerdo: Passos & Ação */}
        <div className="creator-left">
          <div className="creator-badge">
            <span>🤖</span> AI Creator Studio
          </div>

          <h2 className="creator-title">
            De uma ideia a uma loja online em{' '}
            <span className="creator-title-highlight">menos de 5 minutos.</span>
          </h2>

          <p className="creator-description">
            Não precisas de designer, copywriter ou programador. A IA faz o trabalho de uma equipa inteira — tu só revês e publicas.
          </p>

          <div className="steps-list">
            {steps.map((step) => (
              <div key={step.number} className="step-item">
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-text">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="creator-btn">
            Experimentar gratuitamente &rarr;
          </button>
        </div>

        {/* Lado Direito: Ativos Gerados */}
        <div className="creator-right">
          <div className="generated-status">
            <span className="status-dot"></span>
            <span>O que a IA gera automaticamente</span>
          </div>

          <div className="generated-cards-list">
            {generatedOutputs.map((item, index) => (
              <div key={index} className="output-card">
                <div className="output-icon">{item.icon}</div>
                <div className="output-info">
                  <h4 className="output-title">{item.title}</h4>
                  <p className="output-text">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}