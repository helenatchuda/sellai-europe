import React, { useState } from 'react';

export default function WhyEurope() {
  const [activeTab, setActiveTab] = useState('Preview do checkout');
  const [selectedMethods, setSelectedMethods] = useState(['mbway']);
  const [selectedCountry, setSelectedCountry] = useState('PT');
  const [selectedPreviewMethod, setSelectedPreviewMethod] = useState('mbway');
  const [selectedPhoneCountry, setSelectedPhoneCountry] = useState('PT');
  const [isPaymentConfirmed, setIsPaymentConfirmed] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
  });
  const [invoice, setInvoice] = useState({
    companyName: 'Mariana Costa — Criadora de Conteúdo',
    nif: 'PT123456789',
    fiscalAddress: 'Rua das Flores, 123, Lisboa',
    email: 'faturas@minha-marca.pt',
    autoEmail: true,
    safT: true,
  });

  const activeMethodsCount = selectedMethods.length;
  const tabs = ['Métodos de pagamento', 'Faturação automática', 'IVA & Impostos', 'Preview do checkout'];

  const toggleMethod = (methodId) => {
    setSelectedMethods((current) => {
      if (current.includes(methodId)) {
        return current.filter((id) => id !== methodId);
      }

      return [...current, methodId];
    });
  };

  const previewMethods = [
    { id: 'mbway', label: 'MB', name: 'MB Way' },
    { id: 'multibanco', label: 'Multibanco', name: 'Multibanco' },
    { id: 'cartao', label: 'Cartão', name: 'Cartão' },
  ];

  const phoneCountries = [
    { code: 'PT', label: 'PT', prefix: '+351' },
    { code: 'ES', label: 'ES', prefix: '+34' },
    { code: 'FR', label: 'FR', prefix: '+33' },
    { code: 'DE', label: 'DE', prefix: '+49' },
    { code: 'IT', label: 'IT', prefix: '+39' },
  ];

  const handleInvoiceChange = (field) => (event) => {
    const value = event.target.value;
    setInvoice((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const handlePayment = () => {
    setIsPaymentConfirmed(true);
  };

  const handleCardChange = (field) => (event) => {
    setCardDetails((current) => ({
      ...current,
      [field]: event.target.value,
    }));
  };

  const handleResetDemo = () => {
    setIsPaymentConfirmed(false);
    setActiveTab('Preview do checkout');
    setSelectedMethods(['mbway']);
    setSelectedPreviewMethod('mbway');
    setSelectedCountry('PT');
    setSelectedPhoneCountry('PT');
    setInvoice({
      companyName: 'Mariana Costa — Criadora de Conteúdo',
      nif: 'PT123456789',
      fiscalAddress: 'Rua das Flores, 123, Lisboa',
      email: 'faturas@minha-marca.pt',
      autoEmail: true,
      safT: true,
    });
  };

  const toggleInvoiceFlag = (field) => {
    setInvoice((current) => ({
      ...current,
      [field]: !current[field],
    }));
  };

  const vatRates = [
    { code: 'PT', country: 'Portugal', flag: 'PT', type: 'Produtos digitais', rate: 23, label: 'IVA normal', note: 'IVA incluído no preço' },
    { code: 'ES', country: 'Espanha', flag: 'ES', type: 'Serviços electrónicos', rate: 21, label: 'IVA', note: 'IVA incluído no preço' },
    { code: 'FR', country: 'França', flag: 'FR', type: 'Serviços electrónicos', rate: 20, label: 'TVA', note: 'IVA incluído no preço' },
    { code: 'DE', country: 'Alemanha', flag: 'DE', type: 'Serviços electrónicos', rate: 19, label: 'MwSt', note: 'IVA incluído no preço' },
    { code: 'IT', country: 'Itália', flag: 'IT', type: 'Serviços electrónicos', rate: 22, label: 'IVA', note: 'IVA incluído no preço' },
    { code: 'NL', country: 'Países Baixos', flag: 'NL', type: 'Serviços electrónicos', rate: 21, label: 'BTW', note: 'IVA incluído no preço' },
  ];

  const paymentMethods = [
    {
      id: 'mbway',
      name: 'MB Way',
      badge: 'Popular',
      country: 'PT',
      description: 'Pagamento instantâneo pelo telemóvel',
      icon: '💳',
    },
    {
      id: 'multibanco',
      name: 'Multibanco',
      badge: 'PT',
      country: 'Portugal',
      description: 'Referência gerada automaticamente (72h)',
      icon: 'ATM',
    },
    {
      id: 'cartao',
      name: 'Cartão (Visa/MC/Amer)',
      badge: 'Global',
      country: 'Stripe — PCI DSS Nível 1',
      description: 'Pagamento seguro com cartão europeu',
      icon: '💳',
    },
    {
      id: 'paypal',
      name: 'PayPal',
      badge: 'Global',
      country: 'Disponível em 200+ países',
      description: 'Pagamento rápido e familiar para clientes internacionais',
      icon: 'P',
    },
    {
      id: 'applepay',
      name: 'Apple Pay / Google Pay',
      badge: 'Mobile',
      country: 'Touch & Face ID',
      description: 'Pagamento em um toque a partir do telemóvel',
      icon: '🍏',
    },
    {
      id: 'sepa',
      name: 'SEPA Débito Direto',
      badge: 'EU',
      country: 'Para subscrições e planos recorrentes',
      description: 'Cobrança direta recorrente com controlo europeu',
      icon: '🏦',
    },
  ];

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
    <>
      <section id="pagamentos" className="why-europe-section checkout-europe-section">
        <div className="why-europe-container checkout-europe-container">
          <div className="checkout-header">
            <span className="checkout-badge">Pagamentos europeus</span>
            <h2 className="checkout-title">
              Pagamentos e checkout feitos para o <span className="why-europe-title-highlight">mercado europeu.</span>
            </h2>
            <p className="checkout-subtitle">
              MB Way, Multibanco, Stripe, PayPal — prontos a usar. Faturação automática, IVA europeu e conformidade legal incluídos.
            </p>
          </div>

          <div className="checkout-metrics">
            <div className="checkout-stat-card">
              <span className="checkout-stat-label">Conversão média</span>
              <strong className="checkout-stat-value green">4,2%</strong>
              <small>Checkouts com MB Way</small>
            </div>
            <div className="checkout-stat-card">
              <span className="checkout-stat-label">Métodos activos</span>
              <strong className="checkout-stat-value blue">{activeMethodsCount}/6</strong>
              <small>{activeMethodsCount > 0 ? 'Método selecionado e pronto' : 'Configurados e prontos'}</small>
            </div>
            <div className="checkout-stat-card">
              <span className="checkout-stat-label">Tempo de setup</span>
              <strong className="checkout-stat-value cyan">&lt; 5 min</strong>
              <small>Sem código necessário</small>
            </div>
            <div className="checkout-stat-card">
              <span className="checkout-stat-label">Pagamento em</span>
              <strong className="checkout-stat-value purple">2–3 dias</strong>
              <small>Diretamente na tua conta</small>
            </div>
          </div>

          <div className="checkout-tabs" role="tablist" aria-label="Checkout options">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                className={`checkout-tab ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
                role="tab"
                aria-selected={activeTab === tab}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === 'Métodos de pagamento' && (
            <>
              <div className="checkout-payment-grid">
                {paymentMethods.map((method) => {
                  const isSelected = selectedMethods.includes(method.id);

                  return (
                    <button
                      key={method.id}
                      type="button"
                      className={`checkout-payment-card ${isSelected ? 'selected' : ''}`}
                      onClick={() => toggleMethod(method.id)}
                    >
                      <div className="checkout-payment-info">
                        <div className="checkout-payment-brand">
                          <span className="checkout-payment-icon">{method.icon}</span>
                          <div className="checkout-payment-meta">
                            <div className="checkout-payment-name-row">
                              <span className="checkout-payment-name">{method.name}</span>
                              {method.badge && <span className="checkout-payment-badge">{method.badge}</span>}
                            </div>
                            <span className="checkout-payment-country">{method.country}</span>
                          </div>
                        </div>
                        <p className="checkout-payment-description">{method.description}</p>
                      </div>
                      <span className={`checkout-switch ${isSelected ? 'selected' : ''}`} aria-hidden="true" />
                    </button>
                  );
                })}
              </div>

              <div className="checkout-info-banner">
                <span className="checkout-info-icon">i</span>
                <p>
                  As comissões Stripe são 1,4% + €0,25 para cartões europeus. MB Way e Multibanco têm custo fixo de €0,10 por transação. Sem mensalidade adicional.
                </p>
              </div>
            </>
          )}

          {activeTab === 'Faturação automática' && (
            <div className="checkout-invoice-layout">
              <div className="checkout-invoice-form">
                <div className="checkout-invoice-section-title">Configuração da fatura</div>

                <div className="checkout-form-group">
                  <label htmlFor="companyName">Nome da empresa / marca</label>
                  <input
                    id="companyName"
                    type="text"
                    value={invoice.companyName}
                    onChange={handleInvoiceChange('companyName')}
                  />
                </div>

                <div className="checkout-form-group">
                  <label htmlFor="nif">NIF</label>
                  <input
                    id="nif"
                    type="text"
                    value={invoice.nif}
                    onChange={handleInvoiceChange('nif')}
                  />
                </div>

                <div className="checkout-form-group">
                  <label htmlFor="fiscalAddress">Morada fiscal</label>
                  <input
                    id="fiscalAddress"
                    type="text"
                    value={invoice.fiscalAddress}
                    onChange={handleInvoiceChange('fiscalAddress')}
                  />
                </div>

                <div className="checkout-form-group">
                  <label htmlFor="invoiceEmail">E-mail para faturação</label>
                  <input
                    id="invoiceEmail"
                    type="email"
                    value={invoice.email}
                    onChange={handleInvoiceChange('email')}
                  />
                </div>

                <div className="checkout-toggle-row">
                  <div>
                    <h4>Fatura automática por e-mail</h4>
                    <p>Enviada ao comprador imediatamente após o pagamento</p>
                  </div>
                  <button
                    type="button"
                    className={`checkout-toggle ${invoice.autoEmail ? 'on' : ''}`}
                    onClick={() => toggleInvoiceFlag('autoEmail')}
                    aria-label="Alternar faturação automática"
                  >
                    <span />
                  </button>
                </div>

                <div className="checkout-toggle-row">
                  <div>
                    <h4>Fatura no SAF-T (AT Portugal)</h4>
                  </div>
                  <button
                    type="button"
                    className={`checkout-toggle ${invoice.safT ? 'on' : ''}`}
                    onClick={() => toggleInvoiceFlag('safT')}
                    aria-label="Alternar SAF-T"
                  >
                    <span />
                  </button>
                </div>
              </div>

              <aside className="checkout-invoice-preview">
                <div className="checkout-invoice-preview-title">Preview da fatura</div>

                <div className="checkout-preview-card">
                  <div className="checkout-preview-header">
                    <div className="checkout-preview-company">{invoice.companyName}</div>
                    <div className="checkout-preview-invoice-number">FATURA <span>#2024-0142</span></div>
                  </div>

                  <div className="checkout-preview-meta">
                    <div>
                      <span className="preview-label">NIF:</span>
                      <strong>{invoice.nif}</strong>
                    </div>
                    <div>
                      <span className="preview-label">Local:</span>
                      <strong>Lisboa, Portugal</strong>
                    </div>
                  </div>

                  <div className="checkout-preview-body">
                    <div className="checkout-preview-row">
                      <span>Curso de Copywriting PT</span>
                      <strong>€99</strong>
                    </div>
                    <div className="checkout-preview-row muted">
                      <span>IVA 23%</span>
                      <strong>€00.00</strong>
                    </div>
                  </div>

                  <div className="checkout-preview-total">
                    <span>Total</span>
                    <strong>€00.00</strong>
                  </div>

                  <div className="checkout-preview-footer">
                    Pago via MB Way · 24/09/2026
                  </div>
                </div>
              </aside>
            </div>
          )}

          {activeTab === 'IVA & Impostos' && (
            <div className="checkout-vat-section">
              <div className="checkout-vat-summary-grid">
                <div className="checkout-vat-summary-card">
                  <h3>IVA incluído no preço</h3>
                  <p>O cliente vê €00,00. O IVA está dentro. Recomendado para B2C.</p>
                </div>
                <div className="checkout-vat-summary-card">
                  <h3>IVA acrescentado no checkout</h3>
                  <p>O cliente vê €0,00 + IVA. Recomendado para B2B / empresas.</p>
                </div>
              </div>

              <div className="checkout-vat-list-wrapper">
                <h3>Taxas de IVA por país (automático)</h3>

                <div className="checkout-vat-list">
                  {vatRates.map((item) => {
                    const isSelected = selectedCountry === item.code;

                    return (
                      <button
                        key={item.code}
                        type="button"
                        className={`checkout-vat-row ${isSelected ? 'selected' : ''}`}
                        onClick={() => setSelectedCountry(item.code)}
                      >
                        <span className="checkout-vat-country">
                          <span className="checkout-vat-flag">{item.flag}</span>
                          {item.country}
                        </span>

                        <span className="checkout-vat-value">
                          <span className="checkout-vat-type">{item.type}</span>
                          <span className="checkout-vat-rate">{item.rate}%</span>
                          <span className="checkout-vat-badge">{item.label}</span>
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="checkout-vat-footer-row">
                  <span className="checkout-vat-country">{vatRates.find((item) => item.code === selectedCountry)?.country}</span>
                  <span className="checkout-vat-value">
                    <span className="checkout-vat-type">{vatRates.find((item) => item.code === selectedCountry)?.type}</span>
                    <span className="checkout-vat-rate">{vatRates.find((item) => item.code === selectedCountry)?.rate}%</span>
                    <span className="checkout-vat-badge">{vatRates.find((item) => item.code === selectedCountry)?.label}</span>
                  </span>
                </div>

                <p className="checkout-vat-note">
                  Taxa calculada automaticamente com base na localização IP do comprador · OSS/IOSS registado
                </p>
              </div>
            </div>
          )}

          {activeTab === 'Preview do checkout' && (
            isPaymentConfirmed ? (
              <div className="checkout-success-screen">
                <div className="checkout-success-window">
                  <div className="checkout-success-header">
                    <div className="checkout-browser-dots">
                      <span className="dot red" />
                      <span className="dot yellow" />
                      <span className="dot green" />
                    </div>
                    <div className="checkout-preview-url">checkout.sellai.eu/p/curso-copywriting</div>
                    <div className="checkout-preview-lock">🔒</div>
                  </div>

                  <div className="checkout-success-content">
                    <div className="checkout-success-icon" aria-label="Pagamento confirmado">
                      <span>✓</span>
                    </div>

                    <h3 className="checkout-success-title">Pagamento confirmado!</h3>
                    <p className="checkout-success-message">O teu acesso ao curso foi ativado.</p>
                    <p className="checkout-success-email">Fatura enviada para {invoice.email || 'o-teu@email.com'}</p>

                    <button
                      type="button"
                      className="checkout-success-link"
                      onClick={handleResetDemo}
                    >
                      Recomeçar demo →
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="checkout-preview-layout">
                <div className="checkout-preview-main">
                  <div className="checkout-preview-head">
                    <div className="checkout-browser-dots">
                      <span className="dot red" />
                      <span className="dot yellow" />
                      <span className="dot green" />
                    </div>
                    <div className="checkout-preview-url">checkout.sellai.eu/p/curso-copywriting</div>
                    <div className="checkout-preview-lock">🔒</div>
                  </div>

                  <div className="checkout-product-card">
                    <div className="checkout-product-visual" aria-hidden="true">◫</div>
                    <div className="checkout-product-copy">
                      <h4>Curso de Copywriting PT</h4>
                      <p>Acesso vitalício • PDF + Vídeos</p>
                    </div>
                    <div className="checkout-product-price">€99</div>
                  </div>

                  <div className="checkout-form-block">
                    <label>Contacto</label>
                    <div className="checkout-input-field">{invoice.email || 'o-teu@email.com'}</div>
                  </div>

                  <div className="checkout-form-block">
                    <label>Forma de pagamento</label>
                    <div className="checkout-method-row">
                      {previewMethods.map((method) => (
                        <button
                          key={method.id}
                          type="button"
                          className={`checkout-method ${selectedPreviewMethod === method.id ? 'active' : ''}`}
                          onClick={() => setSelectedPreviewMethod(method.id)}
                        >
                          {method.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {selectedPreviewMethod === 'mbway' && (
                    <div className="checkout-payment-detail mbway-detail">
                      <div className="checkout-payment-detail-icon">MB</div>
                      <div>
                        <strong>Pagamento por MB WAY</strong>
                        <p>Introduz o teu número. Vais receber uma notificação na app MB WAY para confirmares.</p>
                      </div>
                    </div>
                  )}

                  {selectedPreviewMethod === 'multibanco' && (
                    <div className="checkout-payment-detail multibanco-detail">
                      <div className="checkout-payment-detail-icon">ATM</div>
                      <div>
                        <strong>Referência Multibanco</strong>
                        <p>Depois de clicar em pagar, geramos uma referência válida durante 72 horas.</p>
                      </div>
                    </div>
                  )}

                  {selectedPreviewMethod === 'cartao' && (
                    <div className="checkout-card-form">
                      <div className="checkout-card-field full-width">
                        <label htmlFor="cardNumber">Número do cartão</label>
                        <input
                          id="cardNumber"
                          type="text"
                          inputMode="numeric"
                          placeholder="1234 1234 1234 1234"
                          value={cardDetails.number}
                          onChange={handleCardChange('number')}
                        />
                      </div>
                      <div className="checkout-card-field">
                        <label htmlFor="cardExpiry">Validade</label>
                        <input
                          id="cardExpiry"
                          type="text"
                          inputMode="numeric"
                          placeholder="MM/AA"
                          value={cardDetails.expiry}
                          onChange={handleCardChange('expiry')}
                        />
                      </div>
                      <div className="checkout-card-field">
                        <label htmlFor="cardCvc">CVC</label>
                        <input
                          id="cardCvc"
                          type="text"
                          inputMode="numeric"
                          placeholder="123"
                          value={cardDetails.cvc}
                          onChange={handleCardChange('cvc')}
                        />
                      </div>
                      <div className="checkout-card-field full-width">
                        <label htmlFor="cardName">Nome no cartão</label>
                        <input
                          id="cardName"
                          type="text"
                          placeholder="Nome completo"
                          value={cardDetails.name}
                          onChange={handleCardChange('name')}
                        />
                      </div>
                    </div>
                  )}

                  <div className="checkout-form-block">
                    <label>Número de telemóvel</label>
                    <div className="checkout-phone-input">
                      <select
                        className="checkout-phone-country-select"
                        value={selectedPhoneCountry}
                        onChange={(event) => setSelectedPhoneCountry(event.target.value)}
                        aria-label="Selecionar país do telefone"
                      >
                        {phoneCountries.map((country) => (
                          <option key={country.code} value={country.code}>
                            {country.label} {country.prefix}
                          </option>
                        ))}
                      </select>
                      <span className="placeholder">9xxx xxxx</span>
                    </div>
                  </div>

                  <div className="checkout-totals">
                    <div className="checkout-total-row">
                      <span>Subtotal</span>
                      <strong>00,00</strong>
                    </div>
                    <div className="checkout-total-row">
                      <span>IVA 23%</span>
                      <strong>€00,00</strong>
                    </div>
                    <div className="checkout-total-row grand-total">
                      <span>Total</span>
                      <strong>€00,00</strong>
                    </div>
                  </div>

                  <button type="button" className="checkout-pay-button" onClick={handlePayment}>
                    Pagar €197,00 com {previewMethods.find((method) => method.id === selectedPreviewMethod)?.name || 'MB Way'} <span aria-hidden="true">→</span>
                  </button>

                  <div className="checkout-security-note">
                    🔒 Pagamento seguro por SellAI Europe
                  </div>
                </div>

                <aside className="checkout-features-panel">
                  <div className="checkout-features-header">Funcionalidades do checkout</div>

                  <div className="checkout-feature-card">
                    <div className="feature-icon purple">⚡</div>
                    <div className="feature-copy">
                      <h4>MB Way instantâneo</h4>
                      <p>Notificação push — cliente confirma em segundos.</p>
                    </div>
                  </div>

                  <div className="checkout-feature-card">
                    <div className="feature-icon blue">ATM</div>
                    <div className="feature-copy">
                      <h4>Referência Multibanco</h4>
                      <p>Validade de 72h. Confirmação automática.</p>
                    </div>
                  </div>

                  <div className="checkout-feature-card">
                    <div className="feature-icon cyan">◫</div>
                    <div className="feature-copy">
                      <h4>Order bumps integrados</h4>
                      <p>Oferta extra no checkout que aumenta o ticket médio.</p>
                    </div>
                  </div>

                  <div className="checkout-feature-card">
                    <div className="feature-icon gray">🛡️</div>
                    <div className="feature-copy">
                      <h4>Prevenção de fraude</h4>
                      <p>3DS2, Radar e CVV — para cartões europeus.</p>
                    </div>
                  </div>

                  <div className="checkout-feature-card">
                    <div className="feature-icon gray">◌</div>
                    <div className="feature-copy">
                      <h4>Recuperação de carrinho</h4>
                      <p>E-mail automático 1h depois se não concluir.</p>
                    </div>
                  </div>
                </aside>
              </div>
            )
          )}
        </div>
      </section>

      <section id="porque-europa" className="why-europe-section">
        <div className="why-europe-container">
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

          <div className="why-europe-grid">
            {cards.map((card, index) => (
              <div key={index} className="why-europe-card">
                <div className="why-europe-card-top">
                  <div className="why-europe-icon-box">{card.icon}</div>
                  <h3 className="why-europe-card-title">{card.title}</h3>
                  <p className="why-europe-card-text">{card.description}</p>
                </div>

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
    </>
  );
}