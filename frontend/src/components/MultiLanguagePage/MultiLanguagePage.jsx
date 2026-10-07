import React, { useState } from 'react';

const LANGUAGES = [
  { code: 'PT', name: 'Português', native: 'Português', quality: 100, source: true },
  { code: 'ES', name: 'Espanhol', native: 'Español', quality: 98 },
  { code: 'FR', name: 'Francês', native: 'Français', quality: 96 },
  { code: 'DE', name: 'Alemão', native: 'Deutsch', quality: 94 },
  { code: 'IT', name: 'Italiano', native: 'Italiano', quality: 95 },
  { code: 'GB', name: 'Inglês', native: 'English', quality: 99 },
  { code: 'NL', name: 'Neerlandês', native: 'Nederlands', quality: 91 },
  { code: 'PL', name: 'Polaco', native: 'Polski', quality: 89 },
];

const TABS = [
  { id: 'translate', label: 'Traduzir produto', icon: '🌍' },
  { id: 'preview', label: 'Preview por idioma', icon: '👁️' },
  { id: 'custom', label: 'Tradução personalizada', icon: '✍️' },
  { id: 'seo', label: 'SEO multilíngue', icon: '🔍' },
];

const CONTENT_TYPES = [
  { icon: '🌐', title: 'Landing page completa', description: 'Headline, bullets, FAQ, prova social' },
  { icon: '✍️', title: 'Copy de vendas', description: 'Adaptado ao mercado-alvo, não literal' },
  { icon: '📧', title: 'Sequência de e-mails', description: 'Todos os 5 e-mails da sequência' },
  { icon: '🎬', title: 'Script de vídeo', description: 'Adaptado à cultura local' },
  { icon: '💳', title: 'Checkout', description: 'Textos, labels e mensagens de erro' },
  { icon: '📄', title: 'Termos & Políticas', description: 'Documentos legais localizados' },
];

const PREVIEWS = {
  PT: {
    title: 'Transforma a tua carreira com o Curso de Copywriting',
    body: 'O curso mais completo do mercado português para quem quer escrever copy que vende.',
    cta: 'Comprar agora por €197',
  },
  ES: {
    title: 'Transforma tu carrera con el Curso de Copywriting',
    body: 'El curso más completo del mercado ibérico para quienes quieren escribir copy que vende.',
    cta: 'Comprar ahora por €197',
  },
  FR: {
    title: 'Transformez votre carrière avec le cours de Copywriting',
    body: 'Le cours complet pour apprendre à écrire des textes qui donnent envie d’agir.',
    cta: 'Acheter maintenant pour 197 €',
  },
  DE: {
    title: 'Verändere deine Karriere mit dem Copywriting-Kurs',
    body: 'Der umfassende Kurs für Texte, die Vertrauen schaffen und sich verkaufen.',
    cta: 'Jetzt für 197 € kaufen',
  },
  IT: {
    title: 'Dai una svolta alla tua carriera con il corso di Copywriting',
    body: 'Il corso completo per scrivere testi capaci di vendere.',
    cta: 'Acquista ora a 197 €',
  },
  GB: {
    title: 'Transform your career with the Copywriting Course',
    body: 'The complete course for writing copy that sells.',
    cta: 'Buy now for €197',
  },
  NL: {
    title: 'Geef je carrière een boost met de copywritingcursus',
    body: 'De complete cursus voor teksten die overtuigen en verkopen.',
    cta: 'Koop nu voor €197',
  },
  PL: {
    title: 'Rozwiń karierę dzięki kursowi copywritingu',
    body: 'Kompletny kurs pisania tekstów, które sprzedają.',
    cta: 'Kup teraz za 197 €',
  },
};

const SEO_SLUGS = {
  PT: 'curso-copywriting',
  ES: 'curso-copywriting',
  FR: 'cours-copywriting',
  DE: 'copywriting-kurs',
  IT: 'corso-copywriting',
  GB: 'copywriting-course',
  NL: 'cursus-copywriting',
  PL: 'kurs-copywritingu',
};

const INITIAL_ACTIVE = ['PT', 'ES', 'FR', 'DE'];

export default function MultiLanguagePage() {
  const [activeLanguages, setActiveLanguages] = useState(INITIAL_ACTIVE);
  const [activeTab, setActiveTab] = useState('translate');
  const [previewLanguage, setPreviewLanguage] = useState('ES');
  const [customText, setCustomText] = useState('');
  const [customTargets, setCustomTargets] = useState(['ES', 'FR', 'DE', 'IT', 'GB']);
  const [customTranslated, setCustomTranslated] = useState(false);
  const [translationComplete, setTranslationComplete] = useState(false);

  const toggleLanguage = (code) => {
    if (code === 'PT') return;
    setActiveLanguages((current) => current.includes(code)
      ? current.filter((language) => language !== code)
      : [...current, code]);
    setTranslationComplete(false);
  };

  const toggleCustomTarget = (code) => {
    setCustomTargets((current) => current.includes(code)
      ? current.filter((language) => language !== code)
      : [...current, code]);
    setCustomTranslated(false);
  };

  const translatedCount = activeLanguages.filter((code) => code !== 'PT').length;
  const preview = PREVIEWS[previewLanguage];

  return (
    <main className="multilang-page">
      <header className="multilang-header">
        <a className="multilang-back" href="/">← Voltar ao início</a>
        <a className="multilang-brand" href="/" aria-label="SellAI Europe, início">
          <span className="multilang-brand-mark">S</span>
          <span>SellAI<span className="multilang-brand-accent">Europe</span></span>
        </a>
        <span className="multilang-header-label">Estúdio de localização</span>
      </header>

      <div className="multilang-content">
        <section className="multilang-intro">
          <span className="multilang-eyebrow">🌐 Multi-idioma</span>
          <h1>Vende em 8 idiomas europeus <span>sem tradutores.</span></h1>
          <p>A IA traduz a tua página de vendas, copy, e-mails e checkout. Não é uma tradução literal: é copy adaptado a cada cultura.</p>
        </section>

        <section className="multilang-stats" aria-label="Resumo da tradução">
          <article className="multilang-stat"><span>Idiomas disponíveis</span><strong className="stat-violet">8</strong><small>UE + inglês</small></article>
          <article className="multilang-stat"><span>Qualidade média</span><strong className="stat-green">95%</strong><small>Avaliado por nativos</small></article>
          <article className="multilang-stat"><span>Tempo de tradução</span><strong className="stat-blue">&lt; 30s</strong><small>Página completa</small></article>
          <article className="multilang-stat"><span>Mercado potencial</span><strong className="stat-purple">350M+</strong><small>Consumidores europeus</small></article>
        </section>

        <nav className="multilang-tabs" aria-label="Ferramentas de tradução">
          {TABS.map((tab) => (
            <button
              className={`multilang-tab${activeTab === tab.id ? ' is-active' : ''}`}
              key={tab.id}
              type="button"
              aria-pressed={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              <span aria-hidden="true">{tab.icon}</span>{tab.label}
            </button>
          ))}
        </nav>

        {activeTab === 'translate' && (
          <section className="multilang-translate-view">
            <div className="multilang-language-area">
              <h2 className="multilang-section-title">Idiomas ativos para o teu produto</h2>
              <div className="multilang-language-grid">
                {LANGUAGES.map((language) => {
                  const isActive = activeLanguages.includes(language.code);
                  return (
                    <article className={`multilang-language${isActive ? ' is-enabled' : ''}`} key={language.code}>
                      <span className="multilang-code">{language.code}</span>
                      <div className="multilang-language-copy">
                        <strong>{language.name}</strong>
                        <span>{language.source ? language.native : `${language.native} · ${language.quality}% qualidade`}</span>
                      </div>
                      {language.source ? <span className="multilang-source">Fonte</span> : (
                        <button
                          className={`multilang-switch${isActive ? ' is-on' : ''}`}
                          type="button"
                          role="switch"
                          aria-checked={isActive}
                          aria-label={`${isActive ? 'Desativar' : 'Ativar'} ${language.name}`}
                          onClick={() => toggleLanguage(language.code)}
                        ><span /></button>
                      )}
                    </article>
                  );
                })}
              </div>
              <button
                className="multilang-primary"
                type="button"
                disabled={translatedCount === 0}
                onClick={() => setTranslationComplete(true)}
              >
                🌍 Traduzir para {translatedCount} {translatedCount === 1 ? 'idioma' : 'idiomas'}
              </button>
              {translationComplete && <p className="multilang-success" role="status">✓ Traduções prontas para {translatedCount} idiomas.</p>}
            </div>
            <aside className="multilang-content-types">
              <h2 className="multilang-section-title">O que é traduzido</h2>
              <div className="multilang-type-list">
                {CONTENT_TYPES.map((item) => (
                  <article className="multilang-type" key={item.title}>
                    <span aria-hidden="true">{item.icon}</span>
                    <div><strong>{item.title}</strong><small>{item.description}</small></div>
                  </article>
                ))}
              </div>
            </aside>
          </section>
        )}

        {activeTab === 'preview' && (
          <section className="multilang-preview-view">
            <div className="multilang-preview-picker" aria-label="Escolher idioma">
              {LANGUAGES.map((language) => (
                <button
                  className={`multilang-picker-option${previewLanguage === language.code ? ' is-selected' : ''}`}
                  type="button"
                  key={language.code}
                  onClick={() => setPreviewLanguage(language.code)}
                  aria-pressed={previewLanguage === language.code}
                >
                  <span>{language.code}</span><span><strong>{language.name}</strong><small>{language.source ? 'Original' : `${language.quality}%`}</small></span>
                </button>
              ))}
            </div>
            <article className="multilang-preview-card">
              <header><span>PT　 Português (original)</span></header>
              <div className="multilang-preview-body">
                <h3>{PREVIEWS.PT.title}</h3><p>{PREVIEWS.PT.body}</p>
                <button type="button">{PREVIEWS.PT.cta}</button>
              </div>
            </article>
            <article className="multilang-preview-card is-localized">
              <header><span>{previewLanguage}　{LANGUAGES.find((language) => language.code === previewLanguage)?.name}</span><strong>{LANGUAGES.find((language) => language.code === previewLanguage)?.quality}%</strong></header>
              <div className="multilang-preview-body">
                <h3>{preview.title}</h3><p>{preview.body}</p>
                <button type="button">{preview.cta}</button>
              </div>
            </article>
          </section>
        )}

        {activeTab === 'custom' && (
          <section className="multilang-custom-view">
            <div className="multilang-custom-panel">
              <h2 className="multilang-section-title">Traduzir texto personalizado</h2>
              <label htmlFor="multilang-custom-text">Texto em português</label>
              <textarea
                id="multilang-custom-text"
                value={customText}
                onChange={(event) => { setCustomText(event.target.value); setCustomTranslated(false); }}
                placeholder="Cola aqui qualquer texto que queiras traduzir: headline, e-mail, descrição de produto, etc."
                rows={5}
              />
              <fieldset className="multilang-targets">
                <legend>Traduzir para</legend>
                {LANGUAGES.filter((language) => !language.source).map((language) => (
                  <label key={language.code}>
                    <input type="checkbox" checked={customTargets.includes(language.code)} onChange={() => toggleCustomTarget(language.code)} />
                    <span>{language.code}</span>{language.name}
                  </label>
                ))}
              </fieldset>
              <button
                className="multilang-primary"
                type="button"
                disabled={!customText.trim() || customTargets.length === 0}
                onClick={() => setCustomTranslated(true)}
              >
                🌍 Traduzir para {customTargets.length} idiomas
              </button>
              {customTranslated && (
                <div className="multilang-custom-result" role="status">
                  <strong>Texto enviado para tradução</strong>
                  <p>{customText}</p>
                  <small>Pré-visualização do protótipo · {customTargets.map((code) => LANGUAGES.find((language) => language.code === code)?.name).join(', ')}</small>
                </div>
              )}
            </div>
          </section>
        )}

        {activeTab === 'seo' && (
          <section className="multilang-seo-view">
            <div>
              <h2 className="multilang-section-title">Meta tags por idioma <span>(automático)</span></h2>
              <div className="multilang-meta-list">
                {LANGUAGES.filter((language) => activeLanguages.includes(language.code)).map((language) => {
                  const localized = PREVIEWS[language.code];
                  return (
                    <article className="multilang-meta-card" key={language.code}>
                      <h3><span>{language.code}</span>{language.name}</h3>
                      <code>&lt;title&gt;{localized.title}&lt;/title&gt;<br /><span>&lt;meta name="description" content="{localized.body}"&gt;</span></code>
                    </article>
                  );
                })}
              </div>
            </div>
            <div className="multilang-url-column">
              <h2 className="multilang-section-title">URLs por idioma</h2>
              <div className="multilang-url-list">
                {LANGUAGES.filter((language) => activeLanguages.includes(language.code)).map((language) => (
                  <article className="multilang-url" key={language.code}>
                    <strong>{language.code}</strong><code>sellai.eu/{language.code === 'PT' ? '' : `${language.code.toLowerCase()}/`}p/{SEO_SLUGS[language.code]}</code><span>Ativo</span>
                  </article>
                ))}
              </div>
              <p className="multilang-seo-note"><span aria-hidden="true">🔎</span><span>Cada idioma tem a sua própria URL, <strong>hreflang</strong> e <strong>sitemap.xml</strong>, otimizado para o Google de cada país.</span></p>
            </div>
          </section>
        )}
      </div>
      <a className="multilang-help" href="mailto:suporte@sellai.eu" aria-label="Contactar suporte">?</a>
    </main>
  );
}