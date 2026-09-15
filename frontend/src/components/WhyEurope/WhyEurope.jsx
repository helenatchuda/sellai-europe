import React from 'react';


export default function WhyEurope() {
  const cards = [
    {
      icon: 'PT',
      isFlagText: true,
      title: 'Pagamentos que os europeus usam',
      description:
        'MB Way, Multibanco e Cartão disponíveis nativamente. Sem conversões de moeda, sem contas no Brasil, sem complicações.',
      tags: ['MB Way', 'Multibanco', 'Stripe', 'PayPal', 'Apple Pay'],
    },
    {
      icon: '🔒',
      isFlagText: false,
      title: 'RGPD e fiscalidade europeia',
      description:
        'Infraestrutura na EU (Frankfurt). Faturação automática conforme as regras portuguesas. IVA europeu calculado automaticamente.',
      tags: ['Servidores na EU', 'Faturação PT automática', 'IVA europeu', 'DPA incluído'],
    },
    {
      icon: '🌍',
      isFlagText: false,
      title: 'Construído para a Europa',
      description:
        'Interface, suporte e faturação em português. IA que escreve copy em PT, ES, FR, IT, DE sem precisar de tradutores.',
      tags: ['Suporte em PT', 'Copy em 5 línguas', 'Moeda €', 'Fuso horário EU'],
    },
  ];

  return (
    <section id="porque-europa" className="why-europe-section">
      <div className="why-europe-container">
        
        {/* Cabeçalho */}
        <div className="why-europe-header">
          <span className="why-europe-badge">Porquê Europa</span>
          <h2 className="why-europe-title">
            Não é uma plataforma <span className="why-europe-title-highlight">traduzida.</span>
            <br />
            É feita para aqui.
          </h2>
          <p className="why-europe-description">
            As plataformas americanas e brasileiras não foram desenhadas para o mercado europeu. A SellAI Europe foi.
          </p>
        </div>

        {/* Grelha dos 3 Cards */}
        <div className="why-europe-grid">
          {cards.map((card, index) => (
            <div key={index} className="why-europe-card">
              
              {/* Parte Superior: Ícone, Título e Descrição */}
              <div className="why-europe-card-top">
                <div className="why-europe-icon-box">
                  {card.icon}
                </div>
                <h3 className="why-europe-card-title">{card.title}</h3>
                <p className="why-europe-card-text">{card.description}</p>
              </div>

              {/* Parte Inferior: Badges / Tags */}
              <div className="why-europe-tags">
                {card.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="why-europe-tag">
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}