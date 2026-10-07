import { useState } from 'react';
import '../../blocks/affiliates.css';
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  Clipboard,
  Handshake,
  Landmark,
  Link2,
  MousePointerClick,
  ShoppingBag,
  TrendingUp,
} from 'lucide-react';

const products = [
  { id: 'copywriting', category: 'Curso', title: 'Curso de Copywriting para Criadores', creator: 'Mariana Costa', commission: 40, price: 197, earnings: 79, rating: '4.9', sales: 312 },
  { id: 'prompts-pro', category: 'Pack', title: 'Pack de Prompts ChatGPT Pro', creator: 'João Ferreira', commission: 35, price: 47, earnings: 16, rating: '4.8', sales: 891 },
  { id: 'creator-bundle', category: 'Template', title: 'Template Creator Bundle Instagram', creator: 'Ana Rodrigues', commission: 30, price: 27, earnings: 8, rating: '4.7', sales: 1240 },
  { id: 'financas', category: 'E-book', title: 'E-book Finanças para Freelancers', creator: 'Pedro Silva', commission: 50, price: 19, earnings: 10, rating: '4.9', sales: 567 },
  { id: 'instagram-negocios', category: 'Curso', title: 'Curso Instagram para Negócios', creator: 'Sofia Martins', commission: 45, price: 97, earnings: 44, rating: '4.8', sales: 203 },
  { id: 'lightroom', category: 'Preset', title: 'Preset Pack Lightroom Lifestyle', creator: 'Rui Alves', commission: 25, price: 17, earnings: 4, rating: '4.6', sales: 445 },
];

const categories = ['Todos', 'Curso', 'E-book', 'Pack', 'Template', 'Preset'];
const dashboardTabs = [
  { id: 'products', label: 'Produtos para promover', icon: ShoppingBag },
  { id: 'links', label: 'Os meus links', icon: Link2 },
  { id: 'earnings', label: 'Ganhos', icon: TrendingUp },
  { id: 'payments', label: 'Pagamentos', icon: Landmark },
];

const formatEuro = (value) => `€${value.toLocaleString('pt-PT')}`;

export default function AffiliatesPage() {
  const [activeTab, setActiveTab] = useState('products');
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [affiliateLinks, setAffiliateLinks] = useState([]);
  const [copiedLink, setCopiedLink] = useState('');

  const visibleProducts = products.filter((product) => (
    activeCategory === 'Todos' || product.category === activeCategory
  ));

  const createAffiliateLink = (product) => {
    const link = `https://sellai.eu/a/mariana-${product.id}`;
    setAffiliateLinks((current) => (
      current.some((item) => item.productId === product.id)
        ? current
        : [...current, { productId: product.id, title: product.title, link, commission: product.commission }]
    ));
    setActiveTab('links');
  };

  const copyLink = async (link) => {
    try {
      await navigator.clipboard.writeText(link);
      setCopiedLink(link);
      window.setTimeout(() => setCopiedLink(''), 1800);
    } catch {
      setCopiedLink('');
    }
  };

  return (
    <main className="affiliate-page">
      <div className="affiliate-shell">
        <a className="affiliate-back-link" href="/">
          <ArrowLeft size={16} aria-hidden="true" />
          SellAI Europe
        </a>

        <header className="affiliate-header">
          <span className="affiliate-badge"><Handshake size={15} aria-hidden="true" /> Afiliados</span>
          <h1>Ganha comissões a promover<br /><span>produtos que já existem.</span></h1>
          <p>Escolhe um produto, gera o teu link exclusivo e começa a promover. Comissões pagas semanalmente por IBAN.</p>
        </header>

        <section className="affiliate-metrics" aria-label="Resumo de desempenho">
          <article className="affiliate-metric">
            <span>Comissões totais</span>
            <strong className="is-muted">—</strong>
            <small>Começa a promover para ganhar</small>
          </article>
          <article className="affiliate-metric">
            <span>Cliques totais</span>
            <strong className="is-blue">{affiliateLinks.length * 24}</strong>
            <small>Links ativos: {affiliateLinks.length}</small>
          </article>
          <article className="affiliate-metric">
            <span>Taxa de conversão</span>
            <strong className="is-muted">—</strong>
            <small>Média da plataforma: 2,8%</small>
          </article>
          <article className="affiliate-metric">
            <span>Próximo pagamento</span>
            <strong className="is-muted">—</strong>
            <small>Pagamentos às sextas-feiras</small>
          </article>
        </section>

        <nav className="affiliate-tabs" aria-label="Área de afiliados">
          {dashboardTabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              className={`affiliate-tab ${activeTab === id ? 'active' : ''}`}
              onClick={() => setActiveTab(id)}
              aria-current={activeTab === id ? 'page' : undefined}
            >
              <Icon size={15} aria-hidden="true" />
              {label}
            </button>
          ))}
        </nav>

        {activeTab === 'products' && (
          <section className="affiliate-catalog" aria-label="Produtos para promover">
            <div className="affiliate-categories" aria-label="Filtrar por categoria">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`affiliate-category ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="affiliate-product-grid">
              {visibleProducts.map((product) => (
                <article className="affiliate-product-card" key={product.id}>
                  <div className="affiliate-product-topline">
                    <span className="affiliate-product-category">{product.category}</span>
                    <span className="affiliate-rating"><span aria-hidden="true">★</span> {product.rating} <small>({product.sales} vendas)</small></span>
                  </div>
                  <h2>{product.title}</h2>
                  <p className="affiliate-creator">por {product.creator}</p>
                  <div className="affiliate-commission">
                    <div>
                      <strong>Comissão: {product.commission}%</strong>
                      <span>Preço de venda: {formatEuro(product.price)}</span>
                    </div>
                    <div className="affiliate-commission-amount">
                      <strong>{formatEuro(product.earnings)}</strong>
                      <span>por venda</span>
                    </div>
                  </div>
                  <button className="affiliate-generate-button" type="button" onClick={() => createAffiliateLink(product)}>
                    Gerar link de afiliado <ArrowRight size={17} aria-hidden="true" />
                  </button>
                </article>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'links' && (
          <section className={`affiliate-content-panel ${affiliateLinks.length === 0 ? 'is-empty' : ''}`}>
            {affiliateLinks.length === 0 ? (
              <div className="affiliate-links-empty-state">
                <Link2 size={44} strokeWidth={2.5} aria-hidden="true" />
                <h2>Ainda não tens links ativos</h2>
                <p>Vai ao separador “Produtos” e gera o teu primeiro link de afiliado.</p>
                <button type="button" className="affiliate-generate-button" onClick={() => setActiveTab('products')}>
                  Ver produtos disponíveis <ArrowRight size={17} aria-hidden="true" />
                </button>
              </div>
            ) : (
              <div>
                <div className="affiliate-section-heading">
                  <div><h2>Os meus links</h2><p>Links de afiliado criados para os teus produtos.</p></div>
                  <button type="button" className="affiliate-secondary-button" onClick={() => setActiveTab('products')}>
                    Explorar produtos <ArrowRight size={15} aria-hidden="true" />
                  </button>
                </div>
                <div className="affiliate-link-list">
                  {affiliateLinks.map((item) => (
                    <article className="affiliate-link-row" key={item.productId}>
                      <div><strong>{item.title}</strong><span>{item.commission}% de comissão</span></div>
                      <code>{item.link}</code>
                      <button type="button" className="affiliate-copy-button" onClick={() => copyLink(item.link)} aria-label="Copiar link de afiliado">
                        {copiedLink === item.link ? <Check size={16} /> : <Clipboard size={16} />}
                        {copiedLink === item.link ? 'Copiado' : 'Copiar'}
                      </button>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {activeTab === 'earnings' && (
          <section className="affiliate-content-panel">
            <div className="affiliate-section-heading"><div><h2>Ganhos</h2><p>Acompanha comissões geradas pelas tuas recomendações.</p></div></div>
            <div className="affiliate-empty-state"><MousePointerClick size={25} aria-hidden="true" /><p>As vendas e comissões aparecem aqui depois dos teus links começarem a converter.</p></div>
          </section>
        )}

        {activeTab === 'payments' && (
          <section className="affiliate-content-panel">
            <div className="affiliate-section-heading"><div><h2>Pagamentos</h2><p>Histórico e calendário de pagamentos das tuas comissões.</p></div></div>
            <div className="affiliate-payment-info">
              <CalendarDays size={20} aria-hidden="true" />
              <div><strong>Pagamentos semanais</strong><span>As comissões aprovadas são pagas às sextas-feiras por transferência bancária.</span></div>
            </div>
            <div className="affiliate-empty-state"><Landmark size={25} aria-hidden="true" /><p>Ainda não há pagamentos. Os pagamentos concluídos serão listados aqui.</p></div>
          </section>
        )}
      </div>
    </main>
  );
}