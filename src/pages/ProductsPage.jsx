import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ProductsPage.css'

const categories = ['All', 'Recovery', 'Longevity', 'Cognitive', 'Performance', 'Hormones']

const products = [
  {
    id: 1, name: 'BPC-157', fullName: 'Body Protection Compound-157',
    category: 'Recovery', purity: '99.8%', sizes: ['5mg', '10mg', '20mg'],
    price: '$49', color: '#00d4ff', badge: '🏆 Best Seller',
    desc: 'The most popular healing peptide. Studied extensively for gut repair, tendon healing, and full-body recovery. A staple compound for athletes and biohackers.',
    tags: ['Gut Health', 'Tendon Repair', 'Anti-inflammatory', 'Recovery'],
  },
  {
    id: 2, name: 'TB-500', fullName: 'Thymosin Beta-4 Fragment',
    category: 'Recovery', purity: '99.5%', sizes: ['5mg', '10mg'],
    price: '$59', color: '#7c3aed', badge: '⚡ Top Rated',
    desc: 'Synthetic thymosin beta-4 — the peptide found naturally in nearly every cell. Known for accelerating wound healing, reducing inflammation, and promoting muscle repair.',
    tags: ['Wound Healing', 'Muscle Repair', 'Inflammation', 'Flexibility'],
  },
  {
    id: 3, name: 'Epithalon', fullName: 'Epithalamin Tetrapeptide',
    category: 'Longevity', purity: '99.9%', sizes: ['10mg', '50mg'],
    price: '$69', color: '#10b981', badge: '⏳ Longevity',
    desc: 'A tetrapeptide that activates telomerase — the enzyme that maintains telomere length. Associated with improved sleep, anti-aging effects, and life extension research.',
    tags: ['Telomere Health', 'Anti-Aging', 'Sleep Quality', 'Longevity'],
  },
  {
    id: 4, name: 'Semax', fullName: 'ACTH(4-7) Pro-Gly-Pro',
    category: 'Cognitive', purity: '99.7%', sizes: ['30mg', '60mg'],
    price: '$54', color: '#f59e0b', badge: '🧠 Nootropic',
    desc: 'A neuropeptide originally developed in Russia, now popular in nootropic communities. Increases BDNF, supports memory formation, and provides mental clarity without stimulant effects.',
    tags: ['Focus', 'Memory', 'BDNF', 'Neuroprotection'],
  },
  {
    id: 5, name: 'GHK-Cu', fullName: 'Copper Peptide Complex',
    category: 'Longevity', purity: '99.6%', sizes: ['50mg', '200mg'],
    price: '$44', color: '#ef4444', badge: '✨ Skin & Repair',
    desc: 'A naturally occurring copper-binding peptide with powerful regenerative properties. Studied for collagen production, skin renewal, and wound healing at the cellular level.',
    tags: ['Collagen', 'Skin Health', 'Hair Growth', 'Wound Repair'],
  },
  {
    id: 6, name: 'CJC-1295', fullName: 'Growth Hormone Releasing Factor',
    category: 'Performance', purity: '99.4%', sizes: ['2mg', '5mg'],
    price: '$64', color: '#00d4ff', badge: '💪 Performance',
    desc: 'A modified version of GHRH that significantly extends the half-life of growth hormone pulses. Used by athletes for muscle gain, fat loss, and improved recovery.',
    tags: ['GH Pulse', 'Muscle Growth', 'Fat Loss', 'Recovery'],
  },
  {
    id: 7, name: 'Ipamorelin', fullName: 'Growth Hormone Secretagogue',
    category: 'Performance', purity: '99.3%', sizes: ['2mg', '5mg'],
    price: '$52', color: '#7c3aed', badge: '🔥 Stack Pick',
    desc: 'A selective GH secretagogue with minimal side effects. Often stacked with CJC-1295 for synergistic growth hormone release. Clean compound with no cortisol spike.',
    tags: ['GH Release', 'Clean Energy', 'Sleep Quality', 'Lean Muscle'],
  },
  {
    id: 8, name: 'PT-141', fullName: 'Bremelanotide',
    category: 'Hormones', purity: '99.2%', sizes: ['10mg', '20mg'],
    price: '$74', color: '#10b981', badge: '❤️ Vitality',
    desc: 'A melanocortin receptor agonist studied for its effects on libido, sexual function, and desire in both men and women. Works centrally through the nervous system.',
    tags: ['Libido', 'Sexual Health', 'Hormone Support', 'Vitality'],
  },
  {
    id: 9, name: 'Selank', fullName: 'Heptapeptide Anxiolytic',
    category: 'Cognitive', purity: '99.5%', sizes: ['5mg', '15mg'],
    price: '$48', color: '#f59e0b', badge: '😌 Calm & Focus',
    desc: 'A synthetic analogue of tuftsin with anxiolytic and nootropic properties. Reduces stress without sedation, improves memory, and supports immune function.',
    tags: ['Anxiety Relief', 'Memory', 'Mood', 'Immune Support'],
  },
]

export default function ProductsPage() {
  const [active, setActive] = useState('All')
  const [hovered, setHovered] = useState(null)

  const filtered = active === 'All' ? products : products.filter(p => p.category === active)

  return (
    <div className="products-page">
      <div className="page-hero">
        <div className="container">
          <div className="section-label">Our Catalog</div>
          <h1 className="page-title">Premium<br/><span className="gradient-text">Peptide Compounds</span></h1>
          <p className="page-sub">
            High-purity peptides backed by extensive research. Each batch tested to ≥99% purity.
            Trusted by athletes, biohackers, and wellness enthusiasts worldwide.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="product-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${active === cat ? 'active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filtered.map((p) => (
            <div
              key={p.id}
              className={`product-card ${hovered === p.id ? 'hovered' : ''}`}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              style={{ '--card-color': p.color }}
            >
              <div className="product-badge-row">
                <span className="product-badge">{p.badge}</span>
                <span className="product-price">{p.price}</span>
              </div>

              <div className="product-atom">
                <div className="atom-core" style={{ background: p.color }}/>
                <div className="atom-ring ring1"/>
                <div className="atom-ring ring2"/>
                <div className="atom-ring ring3"/>
              </div>

              <div className="product-name">{p.name}</div>
              <div className="product-fullname">{p.fullName}</div>
              <p className="product-desc">{p.desc}</p>

              <div className="product-tags">
                {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
              </div>

              <div className="product-meta">
                <div className="meta-item">
                  <span className="meta-label">Purity</span>
                  <span className="meta-val" style={{ color: p.color }}>{p.purity}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Sizes</span>
                  <span className="meta-val">{p.sizes.join(', ')}</span>
                </div>
              </div>

              <button className="product-cta" style={{ borderColor: p.color, color: p.color }}>
                Order Now →
              </button>
            </div>
          ))}
        </div>

        <div className="products-bottom">
          <p>Need help choosing the right compound?</p>
          <Link to="/contact" className="btn-primary">
            Talk to Our Team
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
