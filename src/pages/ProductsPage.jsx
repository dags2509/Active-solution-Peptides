import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ProductsPage.css'

const categories = ['All', 'Recovery', 'Longevity', 'Cognitive', 'Performance', 'Hormones']

const products = [
  {
    id: 1, name: 'BPC-157', fullName: 'Body Protection Compound-157',
    category: 'Recovery', purity: '99.8%', sizes: ['5mg', '10mg', '20mg'],
    price: '$49', color: '#00d4ff', badge: '🔬 Research Grade',
    desc: 'Pentadecapeptide studied in laboratory models for GI mucosal protection, tendon healing mechanisms, and anti-inflammatory signaling. For research use only. Not for human consumption.',
    tags: ['GI Research', 'Tendon Models', 'Inflammation Study', 'In-Vitro'],
  },
  {
    id: 2, name: 'TB-500', fullName: 'Thymosin Beta-4 Fragment',
    category: 'Recovery', purity: '99.5%', sizes: ['5mg', '10mg'],
    price: '$59', color: '#7c3aed', badge: '⚡ Research Grade',
    desc: 'Synthetic Thymosin Beta-4 fragment studied for actin-binding properties and tissue regeneration in laboratory models. Not intended for human or veterinary use.',
    tags: ['Actin Binding', 'Tissue Models', 'Inflammation', 'In-Vitro'],
  },
  {
    id: 3, name: 'Epithalon', fullName: 'Epithalamin Tetrapeptide',
    category: 'Longevity', purity: '99.9%', sizes: ['10mg', '50mg'],
    price: '$69', color: '#10b981', badge: '🧬 Research Grade',
    desc: 'Tetrapeptide studied for telomerase activation and pineal gland regulation in research models. Used in longevity and anti-aging research settings. Not for human use.',
    tags: ['Telomerase Study', 'Pineal Research', 'Aging Models', 'In-Vitro'],
  },
  {
    id: 4, name: 'Semax', fullName: 'ACTH(4-7) Pro-Gly-Pro',
    category: 'Cognitive', purity: '99.7%', sizes: ['30mg', '60mg'],
    price: '$54', color: '#f59e0b', badge: '🧠 Research Grade',
    desc: 'Heptapeptide studied for BDNF upregulation and neuroprotective mechanisms in laboratory research. Used in neuropeptide and cognitive biology studies. Not for human consumption.',
    tags: ['BDNF Research', 'Neuroprotection', 'Cognitive Models', 'In-Vitro'],
  },
  {
    id: 5, name: 'GHK-Cu', fullName: 'Copper Peptide Complex',
    category: 'Longevity', purity: '99.6%', sizes: ['50mg', '200mg'],
    price: '$44', color: '#ef4444', badge: '🔬 Research Grade',
    desc: 'Copper-binding tripeptide studied for collagen synthesis stimulation and wound healing mechanisms in cell culture and laboratory models. For research use only.',
    tags: ['Collagen Synthesis', 'Cell Culture', 'Wound Models', 'In-Vitro'],
  },
  {
    id: 6, name: 'CJC-1295', fullName: 'Growth Hormone Releasing Factor',
    category: 'Performance', purity: '99.4%', sizes: ['2mg', '5mg'],
    price: '$64', color: '#00d4ff', badge: '⚗️ Research Grade',
    desc: 'Modified GHRH analogue studied for extended GH pulse half-life in endocrine research models. Used in growth hormone signaling pathway research. Not for human use.',
    tags: ['GHRH Research', 'Endocrine Models', 'GH Signaling', 'In-Vitro'],
  },
  {
    id: 7, name: 'Ipamorelin', fullName: 'Growth Hormone Secretagogue',
    category: 'Performance', purity: '99.3%', sizes: ['2mg', '5mg'],
    price: '$52', color: '#7c3aed', badge: '⚗️ Research Grade',
    desc: 'Selective GH secretagogue studied for ghrelin receptor activity with high selectivity in laboratory settings. Used in endocrine and metabolic research. Not for human consumption.',
    tags: ['Ghrelin Receptor', 'GH Secretagogue', 'Metabolic Research', 'In-Vitro'],
  },
  {
    id: 8, name: 'PT-141', fullName: 'Bremelanotide',
    category: 'Hormones', purity: '99.2%', sizes: ['10mg', '20mg'],
    price: '$74', color: '#10b981', badge: '🔬 Research Grade',
    desc: 'Melanocortin receptor agonist studied for central nervous system signaling pathways in research models. Used in melanocortin system research. For research purposes only.',
    tags: ['Melanocortin', 'CNS Research', 'Receptor Binding', 'In-Vitro'],
  },
  {
    id: 9, name: 'Selank', fullName: 'Heptapeptide Anxiolytic',
    category: 'Cognitive', purity: '99.5%', sizes: ['5mg', '15mg'],
    price: '$48', color: '#f59e0b', badge: '🧠 Research Grade',
    desc: 'Synthetic tuftsin analogue studied for anxiolytic mechanisms and immune modulation in laboratory research models. Used in anxiety pathway and cognitive biology studies. Not for human use.',
    tags: ['Anxiolytic Models', 'Immune Research', 'Cognitive Biology', 'In-Vitro'],
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
          <div className="section-label">Research Catalog</div>
          <h1 className="page-title">Research-Grade<br/><span className="gradient-text">Peptide Compounds</span></h1>
          <p className="page-sub">
            High-purity peptides for laboratory and in-vitro research purposes only. Each batch independently tested to ≥99% purity.
            Not for human or veterinary use. For research purposes only.
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
          <p>All compounds are for research use only. Not for human or veterinary consumption.</p>
          <Link to="/contact" className="btn-primary">
            Talk to Our Team
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
