import { Suspense } from 'react'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Testimonials from '../components/Testimonials'
import { Link } from 'react-router-dom'
import './HomePage.css'

const benefits = [
  { icon: '⚡', title: 'Tissue Repair Research', desc: 'Compounds studied in laboratory settings for their role in accelerated tissue and tendon repair mechanisms.' },
  { icon: '🧬', title: 'Cellular Biology', desc: 'Research into peptide signaling at the cellular level — targeting collagen synthesis, fibroblast activity, and connective tissue models.' },
  { icon: '🧠', title: 'Neuropeptide Research', desc: 'In-vitro studies on neuropeptides for focus, memory formation, and neuroprotective pathways.' },
  { icon: '🔥', title: 'Metabolic Studies', desc: 'Laboratory compounds used in research on metabolic pathways, fat oxidation, and body composition models.' },
  { icon: '⏳', title: 'Longevity Research', desc: 'Peptides studied for their relationship to telomere health, cellular aging mechanisms, and lifespan extension in research models.' },
  { icon: '😴', title: 'Endocrine Research', desc: 'Compounds used in laboratory studies of sleep cycle regulation and hormonal signaling pathways.' },
]

export default function HomePage() {
  return (
    <>
      <Suspense fallback={<div className="loader"><div className="loader-ring"/></div>}>
        <Hero />
      </Suspense>

      <section className="home-benefits">
        <div className="container">
          <div className="section-label">Research Applications</div>
          <h2 className="section-title">What Are Peptides<br/><span className="gradient-text">Used to Study?</span></h2>
          <p className="section-sub">
            Peptides are short chains of amino acids used in laboratory research to study biological signaling pathways.
            All compounds are supplied strictly for in-vitro and research use only — not for human consumption.
          </p>
          <div className="benefits-grid">
            {benefits.map((b, i) => (
              <div className="benefit-card" key={i}>
                <div className="benefit-icon">{b.icon}</div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
          <div className="benefits-cta">
            <Link to="/products" className="btn-primary">
              Browse Research Catalog
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link to="/science" className="btn-secondary">View the Science</Link>
          </div>
        </div>
      </section>

      <Stats />

      <section className="home-featured">
        <div className="container">
          <div className="section-label">Most Researched</div>
          <h2 className="section-title">Highly Studied<br/><span className="gradient-text">Research Compounds</span></h2>
          <div className="featured-grid">
            {[
              { name: 'BPC-157', tag: 'Tissue Research', desc: 'Widely studied pentadecapeptide. Research focuses on GI and musculoskeletal tissue repair models. For research use only.', color: '#00d4ff', badge: '🔬 Most Researched' },
              { name: 'TB-500', tag: 'Regeneration Research', desc: 'Synthetic Thymosin Beta-4 fragment studied for actin regulation and tissue regeneration in laboratory models. Not for human use.', color: '#7c3aed', badge: '⚡ High Demand' },
              { name: 'Epithalon', tag: 'Longevity Research', desc: 'Tetrapeptide studied for telomerase activation and circadian rhythm regulation in in-vitro and animal research settings.', color: '#10b981', badge: '🧬 Research Grade' },
              { name: 'Semax', tag: 'Neuropeptide Research', desc: 'Heptapeptide studied for BDNF upregulation and neuroprotective effects in laboratory models. Research purposes only.', color: '#f59e0b', badge: '🧠 Neuropeptide' },
            ].map((p, i) => (
              <div className="featured-card" key={i} style={{ '--fc': p.color }}>
                <div className="featured-badge">{p.badge}</div>
                <div className="featured-name">{p.name}</div>
                <div className="featured-tag">{p.tag}</div>
                <p>{p.desc}</p>
                <Link to="/products" className="featured-link" style={{ color: p.color }}>
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="home-affiliate-banner">
        <div className="container">
          <div className="affiliate-banner">
            <div className="affiliate-banner-content">
              <div className="affiliate-banner-label">Affiliate Program</div>
              <h2>Earn 20% on Every Sale<br/><span className="gradient-text">You Refer</span></h2>
              <p>Join our affiliate program and earn commission sharing research-grade peptide compounds with your audience of researchers, lab professionals, and science enthusiasts.</p>
              <Link to="/affiliate" className="btn-primary">
                Join Free Today
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
            <div className="affiliate-banner-stats">
              <div className="ab-stat"><span className="ab-val">20%</span><span className="ab-label">Commission Rate</span></div>
              <div className="ab-stat"><span className="ab-val">$0</span><span className="ab-label">To Join</span></div>
              <div className="ab-stat"><span className="ab-val">30d</span><span className="ab-label">Cookie Window</span></div>
              <div className="ab-stat"><span className="ab-val">Weekly</span><span className="ab-label">Payouts</span></div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
