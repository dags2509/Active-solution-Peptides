import { useState } from 'react'
import './Products.css'

const categories = ['All', 'Growth Factors', 'Signaling', 'Anti-aging', 'Cognitive', 'Recovery']

const products = [
  {
    id: 1,
    name: 'BPC-157',
    fullName: 'Body Protection Compound-157',
    category: 'Recovery',
    purity: '99.8%',
    size: '5mg / 10mg',
    color: '#00d4ff',
    desc: 'Pentadecapeptide derived from human gastric juice. Exceptional healing and protective properties in tissue repair research.',
    tags: ['Tissue Repair', 'GI Health', 'Anti-inflammatory'],
    badge: 'Best Seller',
  },
  {
    id: 2,
    name: 'TB-500',
    fullName: 'Thymosin Beta-4 Fragment',
    category: 'Recovery',
    purity: '99.5%',
    size: '5mg',
    color: '#7c3aed',
    desc: 'Synthetic version of the naturally occurring thymosin beta-4 peptide. Studied for tissue regeneration and wound healing.',
    tags: ['Wound Healing', 'Angiogenesis', 'Recovery'],
    badge: 'New',
  },
  {
    id: 3,
    name: 'Epithalon',
    fullName: 'Epithalamin Tetrapeptide',
    category: 'Anti-aging',
    purity: '99.9%',
    size: '10mg / 50mg',
    color: '#10b981',
    desc: 'A synthetic tetrapeptide regulator of telomerase activity. Extensively researched for its role in cellular aging processes.',
    tags: ['Telomerase', 'Longevity', 'Sleep'],
    badge: 'Premium',
  },
  {
    id: 4,
    name: 'Semax',
    fullName: 'ACTH(4-7) Pro-Gly-Pro',
    category: 'Cognitive',
    purity: '99.7%',
    size: '30mg',
    color: '#f59e0b',
    desc: 'Heptapeptide derived from ACTH. Extensively studied for neuroprotective and nootropic properties in research models.',
    tags: ['Nootropic', 'Neuroprotection', 'BDNF'],
    badge: null,
  },
  {
    id: 5,
    name: 'GHK-Cu',
    fullName: 'Copper Peptide Complex',
    category: 'Anti-aging',
    purity: '99.6%',
    size: '50mg / 200mg',
    color: '#ef4444',
    desc: 'Naturally occurring copper complex with tripeptide. Research focuses on collagen synthesis, wound healing, and antioxidant activity.',
    tags: ['Collagen', 'Skin Research', 'Antioxidant'],
    badge: null,
  },
  {
    id: 6,
    name: 'CJC-1295',
    fullName: 'Growth Hormone Releasing Factor',
    category: 'Growth Factors',
    purity: '99.4%',
    size: '2mg / 5mg',
    color: '#00d4ff',
    desc: 'Tetrasubstituted 30-amino acid peptide analog of GHRH. Studied for growth hormone pulse amplification in research settings.',
    tags: ['GH Axis', 'IGF-1', 'Growth Factor'],
    badge: null,
  },
]

export default function Products() {
  const [active, setActive] = useState('All')
  const [hovered, setHovered] = useState(null)

  const filtered = active === 'All' ? products : products.filter(p => p.category === active)

  return (
    <section className="products" id="products">
      <div className="container">
        <div className="section-label">Product Catalog</div>
        <h2 className="section-title">Research-Grade<br/><span className="gradient-text">Peptide Compounds</span></h2>
        <p className="section-sub">
          Every compound in our catalog undergoes rigorous analytical testing. HPLC purity reports,
          mass spectrometry data, and CoA documentation included with every order.
        </p>

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
              {p.badge && <div className="product-badge">{p.badge}</div>}

              <div className="product-atom">
                <div className="atom-core" style={{ background: p.color }}/>
                <div className="atom-ring ring1"/>
                <div className="atom-ring ring2"/>
                <div className="atom-ring ring3"/>
              </div>

              <div className="product-info">
                <div className="product-name">{p.name}</div>
                <div className="product-fullname">{p.fullName}</div>
                <p className="product-desc">{p.desc}</p>

                <div className="product-tags">
                  {p.tags.map(t => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>

                <div className="product-meta">
                  <div className="meta-item">
                    <span className="meta-label">Purity</span>
                    <span className="meta-val" style={{ color: p.color }}>{p.purity}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Available</span>
                    <span className="meta-val">{p.size}</span>
                  </div>
                </div>

                <button className="product-cta" style={{ borderColor: p.color, color: p.color }}>
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="products-cta">
          <p>Looking for a specific compound not listed here?</p>
          <button className="btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Request Custom Synthesis
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </section>
  )
}
