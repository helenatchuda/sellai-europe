import React, { useState } from 'react';

function Pricing({ onOpenRegister }) {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Grátis',
      subtitle: 'Para validar a tua ideia.',
      monthlyPrice: 0,
      annualPrice: 0,
      fee: '10% por venda',
      featured: false,
      buttonText: 'Começar grátis',
      features: [
        '3 produtos activos',
        'Checkout em euros (MB Way, Stripe)',
        'Área de membros',
        'Copy gerado por IA (básico)',
        'Suporte por e-mail',
      ],
    },
    {
      name: 'Pro',
      subtitle: 'Para criadores a crescer.',
      monthlyPrice: 29,
      annualPrice: 21.75,
      fee: '5% por venda',
      featured: true,
      popularLabel: 'Mais popular',
      buttonText: 'Experimentar 14 dias grátis',
      features: [
        'Produtos ilimitados',
        'AI Creator Studio completo',
        'Programa de afiliados',
        'E-mail marketing (até 2.000 contactos)',
        'Domínio personalizado',
        'Analytics avançado',
        'Suporte prioritário',
      ],
    },
    {
      name: 'Business',
      subtitle: 'Para equipas e empresas.',
      monthlyPrice: 79,
      annualPrice: 59.25,
      fee: '2% por venda',
      featured: false,
      buttonText: 'Falar com a equipa',
      features: [
        'Tudo no Pro',
        'Geração de vídeo com IA',
        'Automações WhatsApp & SMS',
        'API + Webhooks',
        'Multi-utilizador (5 contas)',
        'Gestor de conta dedicado',
        'SLA 99,9% uptime',
      ],
    },
  ];

  return (
    <section id="precos" className="pricing-section">
      <div className="pricing-container">
        
        {/* Cabeçalho */}
        <div className="pricing-header">
          <span className="pricing-badge">💰 Preços</span>
          <h2 className="pricing-title">
            Simples e transparente.
            <br />
            <span className="pricing-title-highlight">Sem surpresas.</span>
          </h2>
          <p className="pricing-description">
            Todos os planos incluem checkout em euros, área de membros e suporte em português.
          </p>
        </div>

        {/* Toggle Mensal / Anual */}
        <div className="billing-toggle-container">
          <div className="billing-toggle">
            <button
              className={`toggle-btn ${!isAnnual ? 'active' : ''}`}
              onClick={() => setIsAnnual(false)}
              aria-pressed={!isAnnual}
              type="button"
            >
              Mensal
            </button>
            <button
              className={`toggle-btn ${isAnnual ? 'active' : ''}`}
              onClick={() => setIsAnnual(true)}
              aria-pressed={isAnnual}
              type="button"
            >
              Anual <span className="discount-badge">-25%</span>
            </button>
          </div>
        </div>

        {/* Grelha dos 3 Planos */}
        <div className="pricing-grid">
          {plans.map((plan, index) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const annualTotal = price * 12;
            
            return (
              <div
                key={index}
                className={`pricing-card ${plan.featured ? 'featured' : ''}`}
              >
                {plan.popularLabel && (
                  <div className="popular-badge">{plan.popularLabel}</div>
                )}

                <div>
                  <div className="plan-header">
                    <h3 className="plan-name">{plan.name}</h3>
                    <p className="plan-subtitle">{plan.subtitle}</p>
                  </div>

                  <div className="plan-price-box">
                    <div className="plan-price">
                      €{price.toLocaleString('pt-PT', { minimumFractionDigits: price % 1 ? 2 : 0 })}
                      <span className="plan-period">/mês</span>
                    </div>
                    {isAnnual && price > 0 && (
                      <span className="plan-billing-note">
                        €{annualTotal.toLocaleString('pt-PT', { minimumFractionDigits: 0 })} cobrados por ano
                      </span>
                    )}
                    <span className="plan-fee">{plan.fee}</span>
                  </div>

                  <ul className="plan-features">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="feature-item">
                        <span className="check-icon">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {plan.name === 'Business' ? (
                  <a className="plan-btn" href="mailto:suporte@sellai.eu?subject=Plano%20Business">
                    {plan.buttonText}
                  </a>
                ) : (
                  <button className="plan-btn" onClick={onOpenRegister} type="button">
                    {plan.buttonText}
                  </button>
                )}
              </div>
            );
          })}
        </div>

        <p className="pricing-footer-note">
          Sem cartão de crédito para começar. Cancela quando quiseres.
        </p>

      </div>
    </section>
  );
}

export default Pricing;