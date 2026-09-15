
import React from 'react';

export default function Product() {
  const features = [
    {
      icon: '🤖',
      title: 'AI Creator Studio',
      description:
        'Uma frase é suficiente. A IA gera landing page, copy, sequência de e-mails, script de vídeo e checkout — em menos de um minuto.',
    },
    {
      icon: '💶',
      title: 'Checkout europeu nativo',
      description:
        'MB Way, Multibanco, Stripe e PayPal prontos a usar. Faturação automática conforme a legislação portuguesa e o IVA europeu.',
    },
    {
      icon: '🔗',
      title: 'Programa de afiliados',
      description:
        'Cada produto tem o seu programa de afiliados integrado. Define a comissão, gera o link e a plataforma trata de tudo o resto.',
    },
    {
      icon: '📊',
      title: 'Analytics de vendas',
      description:
        'Dashboard em tempo real com receita, conversão por produto, cliques de afiliados e comportamento de compra.',
    },
    {
      icon: '🔒',
      title: 'RGPD nativo',
      description:
        'Infraestrutura na União Europeia. Políticas de privacidade, consentimentos e DPA incluídos automaticamente em todos os planos.',
    },
    {
      icon: '🌍',
      title: 'Multi-idioma com IA',
      description:
        'Traduz automaticamente as tuas páginas para espanhol, francês, italiano e alemão. Expande para a Europa sem esforço.',
    },
  ];

  return (
    <section id="produto" className="product-section">
      <div className="product-container">
        
        {/* Cabeçalho */}
        <div className="product-header">
          <span className="product-badge">Produto</span>
          <h2 className="product-title">
            Um estúdio completo de{' '}
            <span className="product-title-gradient">AI Commerce</span>
          </h2>
          <p className="product-description">
            Tudo o que precisas para criar, vender e crescer — num só lugar. Sem ferramentas separadas.
          </p>
        </div>

        {/* Grelha dos 6 Cards */}
        <div className="product-grid">
          {features.map((feature, index) => (
            <div key={index} className="product-card">
              <div className="product-icon-wrapper">
                {feature.icon}
              </div>
              <h3 className="product-card-title">{feature.title}</h3>
              <p className="product-card-text">{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
