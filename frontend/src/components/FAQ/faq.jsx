import React, { useState } from 'react';


export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    
    {
      question: 'Preciso de saber programar?',
      answer:
        'Não, de todo. A SellAI Europe foi construída para que qualquer pessoa consiga criar páginas, configurar produtos e aceitar pagamentos em minutos sem escrever uma única linha de código.',
    },
    {
      question: 'Como funciona o pagamento em Portugal?',
      answer:
        'Oferecemos integração nativa com MB Way, Multibanco, Cartão de Crédito e Apple Pay através de parceiros europeus (como a Stripe). O dinheiro cai diretamente na tua conta bancária sem conversões de moeda.',
    },
    {
      question: 'A plataforma é compatível com o RGPD?',
      answer:
        'Sim, a 100%. Todos os nossos servidores estão localizados na UE (Frankfurt), cumprimos estritamente o RGPD e fornecemos os termos de processamento de dados (DPA) necessários para operar legalmente.',
    },
    {
      question: 'O programa de afiliados funciona automaticamente?',
      answer:
        'Sim. Podes criar links de afiliados para os teus parceiros e a plataforma atribui as comissões e gere o acompanhamento de vendas de forma totalmente automatizada.',
    },
    {
      question: 'Posso migrar de outra plataforma?',
      answer:
        'Sim! Temos ferramentas de importação direta para migrar os teus produtos, contactos e cursos a partir de plataformas como Teachable, Hotmart, Kajabi ou WordPress.',
    },
  ];

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        
        {/* Cabeçalho */}
        <div className="faq-header">
          <span className="faq-badge">FAQ</span>
          <h2 className="faq-title">
            Perguntas <span className="faq-title-highlight">frequentes</span>
          </h2>
          <p className="faq-subtitle">Tudo o que precisas de saber.</p>
        </div>

        {/* Lista de perguntas */}
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`faq-item ${isOpen ? 'open' : ''}`}
              >
                <button
                  className="faq-question-btn"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon-circle">+</span>
                </button>

                <div className="faq-answer-wrapper">
                  <p className="faq-answer">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}