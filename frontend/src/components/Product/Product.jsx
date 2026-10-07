
import React from 'react';

export default function Product() {
  const groups = [
    {
      title: 'Criar',
      features: [{
        icon: '🤖',
        title: 'AI Creator Studio',
        description: 'Uma frase é suficiente. A IA gera landing page, copy, sequência de e-mails, script de vídeo e funil de vendas.',
        href: '/ai-creator-studio',
      }],
    },
    {
      title: 'Vender',
      features: [
        {
          icon: '💳',
          title: 'Pagamentos europeus',
          description: 'MB WAY, Multibanco, cartão e carteiras digitais, com faturação, IVA europeu e checkout integrado.',
          href: '#pagamentos',
        },
        {
          icon: '🔗',
          title: 'Programa de afiliados',
          description: 'Define comissões, gera links exclusivos e acompanha o desempenho dos teus afiliados.',
          href: '/afiliados',
        },
      ],
    },
    {
      title: 'Crescer',
      features: [
        {
          icon: '📊',
          title: 'Analytics de vendas',
          description: 'Acompanha receita, conversão por produto, tráfego e desempenho de afiliados.',
          href: '/analytics',
        },
        {
          icon: '🌍',
          title: 'Multi-idioma com IA',
          description: 'Traduz páginas para espanhol, francês, italiano e alemão para vender por toda a Europa.',
          href: '/multi-idioma-ia',
        },
      ],
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

        <div className="product-groups">
          {groups.map((group) => (
            <section className="product-group" key={group.title}>
              <h3 className="product-group-title">{group.title}</h3>
              <div className="product-group-items">
                {group.features.map((feature) => (
                  <article key={feature.title} className="product-card">
                    <div className="product-icon-wrapper">{feature.icon}</div>
                    <h4 className="product-card-title">{feature.title}</h4>
                    <p className="product-card-text">{feature.description}</p>
                    <a className="product-card-link" href={feature.href}>
                      Explorar funcionalidade <span aria-hidden="true">→</span>
                    </a>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

      </div>
    </section>
  );
}
