import { useState } from 'react';
import {
  ArrowLeft,
  BarChart3,
  Eye,
  Globe2,
  Link2,
  Package,
  Smartphone,
} from 'lucide-react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import '../../blocks/analytics.css';

const periods = ['7d', '30d', '90d', '1a'];
const tabs = [
  { id: 'overview', label: 'Visão geral', icon: BarChart3 },
  { id: 'products', label: 'Produtos', icon: Package },
  { id: 'traffic', label: 'Tráfego', icon: Globe2 },
  { id: 'affiliates', label: 'Afiliados', icon: Link2 },
];

const demoRevenue = [
  { month: 'Jan', revenue: 420 },
  { month: 'Fev', revenue: 680 },
  { month: 'Mar', revenue: 540 },
  { month: 'Abr', revenue: 920 },
  { month: 'Mai', revenue: 760 },
  { month: 'Jun', revenue: 1180 },
  { month: 'Jul', revenue: 980 },
  { month: 'Ago', revenue: 1460 },
  { month: 'Set', revenue: 1720 },
];

const demoProducts = [
  { name: 'Curso de Copywriting', revenue: '€2.940', sales: 42, growth: '+18%' },
  { name: 'Pack de Prompts IA', revenue: '€1.410', sales: 30, growth: '+12%' },
  { name: 'E-book Finanças', revenue: '€760', sales: 40, growth: '+8%' },
];

const demoTraffic = [
  { page: '/curso-copywriting', visits: '1.284', share: '42%' },
  { page: '/pack-prompts-ia', visits: '936', share: '31%' },
  { page: '/ebook-financas', visits: '824', share: '27%' },
];

function Metric({ label, value, note, emphasized = false }) {
  return (
    <article className="analytics-metric">
      <span>{label}</span>
      <strong className={emphasized ? 'is-emphasized' : ''}>{value}</strong>
      <small>{note}</small>
    </article>
  );
}

function EmptyState({ icon: Icon, title, description }) {
  return (
    <div className="analytics-empty-state">
      <Icon size={34} strokeWidth={1.8} aria-hidden="true" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function AnalyticsPage() {
  const [period, setPeriod] = useState('7d');
  const [activeTab, setActiveTab] = useState('overview');
  const [demo, setDemo] = useState(false);

  const currency = new Intl.NumberFormat('pt-PT', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  });

  return (
    <main className="analytics-page">
      <nav className="analytics-topbar" aria-label="Navegação principal">
        <a href="/" className="analytics-back-link"><ArrowLeft size={16} aria-hidden="true" /> Voltar</a>
        <span className="analytics-topbar-divider" />
        <a href="/" className="analytics-brand"><span className="analytics-logo">S</span>SellAI.Europe</a>
        <span className="analytics-topbar-divider" />
        <span className="analytics-page-name">Analytics de Vendas</span>
      </nav>

      <div className="analytics-shell">
        <header className="analytics-heading">
          <div className="analytics-heading-copy">
            <span className="analytics-badge"><BarChart3 size={15} aria-hidden="true" /> Analytics</span>
            <h1>Dashboard de <span>vendas em tempo real.</span></h1>
            <p>Receita, conversão, afiliados e comportamento de compra — tudo num só lugar.</p>
          </div>
          <div className="analytics-controls">
            <div className="analytics-periods" aria-label="Período de análise">
              {periods.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={period === item ? 'active' : ''}
                  onClick={() => setPeriod(item)}
                  aria-pressed={period === item}
                >
                  {item}
                </button>
              ))}
            </div>
            <button className={`analytics-demo-button ${demo ? 'active' : ''}`} type="button" onClick={() => setDemo((value) => !value)} aria-pressed={demo}>
              <Eye size={15} aria-hidden="true" /> {demo ? 'Desativar demo' : 'Ver demo'}
            </button>
          </div>
        </header>

        <section className="analytics-metrics" aria-label="Resumo de vendas">
          <Metric label="Receita total" value={demo ? currency.format(7280) : '€0,00'} note={demo ? '+12,8% face ao período anterior' : 'Começa a vender para ver dados'} />
          <Metric label="Vendas" value={demo ? '112' : '0'} note={demo ? '18 vendas neste período' : 'Começa a vender para ver dados'} emphasized />
          <Metric label="Conversão" value={demo ? '3,42%' : '—'} note={demo ? '+0,6% face ao período anterior' : 'Começa a vender para ver dados'} />
          <Metric label="Ticket médio" value={demo ? currency.format(65) : '—'} note={demo ? 'Valor médio por encomenda' : 'Começa a vender para ver dados'} />
        </section>

        <nav className="analytics-tabs" aria-label="Relatórios de vendas">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button key={id} type="button" className={`analytics-tab ${activeTab === id ? 'active' : ''}`} onClick={() => setActiveTab(id)} aria-current={activeTab === id ? 'page' : undefined}>
              <Icon size={15} aria-hidden="true" /> {label}
            </button>
          ))}
        </nav>

        {activeTab === 'overview' && (
          <section className="analytics-overview">
            <article className="analytics-panel analytics-revenue-panel">
              <div className="analytics-panel-heading">
                <div><h2>Receita mensal</h2><p>{demo ? 'Janeiro → Setembro 2026' : 'Acompanha a evolução das tuas vendas'}</p></div>
                {!demo && <span className="analytics-demo-hint">Ativa o modo demo para ver o potencial</span>}
              </div>
              {demo ? (
                <div className="analytics-chart">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={demoRevenue} margin={{ top: 18, right: 12, left: 0, bottom: 0 }}>
                      <CartesianGrid stroke="#252832" strokeDasharray="4 5" vertical={false} />
                      <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#788397', fontSize: 12 }} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fill: '#788397', fontSize: 12 }} tickFormatter={(value) => `€${value}`} width={54} />
                      <Tooltip formatter={(value) => [currency.format(value), 'Receita']} contentStyle={{ background: '#14171e', border: '1px solid #303642', borderRadius: 8, color: '#f8fafc' }} />
                      <Line type="monotone" dataKey="revenue" stroke="#7781ff" strokeWidth={3} dot={{ r: 3, fill: '#a3a7ff', strokeWidth: 0 }} activeDot={{ r: 5 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              ) : (
                <div className="analytics-chart-empty" aria-hidden="true">
                  {['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set'].map((month) => <span key={month}>{month}</span>)}
                </div>
              )}
            </article>
            <div className="analytics-side-panels">
              <article className="analytics-panel analytics-side-panel">
                <h2>Fontes de tráfego</h2>
                {demo ? <ul className="analytics-source-list"><li><span>Direto</span><strong>46%</strong></li><li><span>Redes sociais</span><strong>34%</strong></li><li><span>Pesquisa</span><strong>20%</strong></li></ul> : <p>Dados disponíveis quando tiveres visitas</p>}
              </article>
              <article className="analytics-panel analytics-side-panel">
                <h2>Top países</h2>
                {demo ? <ul className="analytics-source-list"><li><span>🇵🇹 Portugal</span><strong>58%</strong></li><li><span>🇪🇸 Espanha</span><strong>24%</strong></li><li><span>🇫🇷 França</span><strong>18%</strong></li></ul> : <p>Nenhuma visita ainda</p>}
              </article>
            </div>
          </section>
        )}

        {activeTab === 'products' && (
          <section className="analytics-panel analytics-table-panel">
            <div className="analytics-table-header"><span>Produto</span><span>Receita</span><span>Vendas</span><span>Crescimento</span></div>
            {demo ? demoProducts.map((product) => <div className="analytics-table-row" key={product.name}><strong>{product.name}</strong><span>{product.revenue}</span><span>{product.sales}</span><span className="analytics-growth">{product.growth}</span></div>) : <EmptyState icon={Package} title="Nenhum produto vendido ainda" description="Publica o teu primeiro produto para ver dados aqui" />}
          </section>
        )}

        {activeTab === 'traffic' && (
          <section className="analytics-two-panels">
            <article className="analytics-panel analytics-detail-panel">
              <h2><Globe2 size={17} aria-hidden="true" /> Páginas mais visitadas</h2>
              {demo ? <div className="analytics-detail-list">{demoTraffic.map((item) => <div key={item.page}><span>{item.page}</span><strong>{item.visits} <small>{item.share}</small></strong></div>)}</div> : <EmptyState icon={Globe2} title="Nenhuma visita registada" description="As páginas mais visitadas vão aparecer aqui" />}
            </article>
            <article className="analytics-panel analytics-detail-panel">
              <h2><Smartphone size={17} aria-hidden="true" /> Dispositivos</h2>
              {demo ? <div className="analytics-device-bars"><p><span>Telemóvel</span><strong>68%</strong></p><div><i style={{ width: '68%' }} /></div><p><span>Computador</span><strong>25%</strong></p><div><i style={{ width: '25%' }} /></div><p><span>Tablet</span><strong>7%</strong></p><div><i style={{ width: '7%' }} /></div></div> : <EmptyState icon={Smartphone} title="Sem dados de dispositivos" description="Os dispositivos dos teus visitantes aparecem aqui" />}
            </article>
          </section>
        )}

        {activeTab === 'affiliates' && (
          <section className="analytics-panel analytics-affiliate-panel">
            <h2>Performance de afiliados</h2>
            {demo ? <div className="analytics-table-header analytics-affiliate-table-header"><span>Afiliado</span><span>Cliques</span><span>Vendas</span><span>Comissões</span></div> : <EmptyState icon={Link2} title="Nenhum afiliado ativo" description="Ativa o programa de afiliados no teu produto para ver dados aqui" />}
            {demo && <div className="analytics-table-row analytics-affiliate-table-header"><strong>Mariana Costa</strong><span>284</span><span>19</span><span>€374</span></div>}
          </section>
        )}
      </div>

      <button className="analytics-help-button" type="button" aria-label="Ajuda" title="Ajuda">?</button>
    </main>
  );
}