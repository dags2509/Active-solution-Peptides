import { Link } from 'react-router-dom'
import './AboutPage.css'

const team = [
  { name: 'Marcus Webb', role: 'Founder & CEO', bg: '#00d4ff', initials: 'MW', bio: '15+ years in peptide chemistry. Former research lead at a top biotech firm. Founded ASP to make premium compounds accessible.' },
  { name: 'Sarah Lim', role: 'Head of Quality Control', bg: '#7c3aed', initials: 'SL', bio: 'Biochemistry graduate from UC San Diego. Oversees all testing protocols and batch certification.' },
  { name: 'Jake Torres', role: 'Head of Customer Success', bg: '#10b981', initials: 'JT', bio: 'Former competitive bodybuilder and peptide protocol advisor. Helps customers find the right compounds for their goals.' },
  { name: 'Priya Nair', role: 'Scientific Advisor', bg: '#f59e0b', initials: 'PN', bio: 'Background in Molecular Biology. Advises on compound selection, research updates, and safety standards.' },
]

const values = [
  { icon: '🔬', title: 'Research-Grade Purity', desc: 'Every batch independently tested to ≥99% purity via HPLC and mass spectrometry. Certificate of Analysis included with every order.' },
  { icon: '🤝', title: 'Full Transparency', desc: 'Lab reports available for every compound. No undisclosed additives. Just clean, verified research-grade peptides.' },
  { icon: '📦', title: 'Reliable Fulfillment', desc: 'Fast shipping on catalog orders. Discreet packaging. Real tracking. All compounds shipped from Guilford, CT.' },
  { icon: '💬', title: 'Research Support', desc: "Our team understands peptide chemistry. Contact us with compound questions and we'll provide knowledgeable, research-focused guidance." },
]

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="page-hero">
        <div className="container">
          <div className="section-label">Our Story</div>
          <h1 className="page-title">Built for Researchers<br/><span className="gradient-text">By Researchers</span></h1>
          <p className="page-sub">
            Active Solution Peptides was founded to supply the research community with consistently pure, independently verified peptide compounds.
            All products are for laboratory and research use only — not for human or veterinary consumption.
          </p>
        </div>
      </div>

      <div className="container">

        <section className="about-mission">
          <div className="mission-grid">
            <div>
              <div className="section-label">Our Mission</div>
              <h2 className="section-title" style={{ marginBottom: '20px' }}>Supplying the Research<br/><span className="gradient-text">Community Since 2018</span></h2>
              <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#64748b', marginBottom: '20px' }}>
                Active Solution Peptides exists to provide researchers, laboratory professionals, and the scientific community with reliable, high-purity peptide compounds for in-vitro and laboratory research purposes.
              </p>
              <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#64748b', marginBottom: '32px' }}>
                Every compound is independently tested, documented with a Certificate of Analysis, and shipped from our facility in Guilford, CT. All products are strictly for research use only — not for human or veterinary consumption.
              </p>
              <Link to="/products" className="btn-primary">
                Shop Our Products
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
            <div className="mission-stats-col">
              {[
                { val: '2018', label: 'Founded' },
                { val: '50,000+', label: 'Customers Served' },
                { val: '99.9%', label: 'Avg Purity Rating' },
                { val: 'Guilford, CT', label: 'Headquarters' },
              ].map((s, i) => (
                <div className="mission-stat" key={i}>
                  <span className="mission-val">{s.val}</span>
                  <span className="mission-label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about-values">
          <div className="section-label">What We Stand For</div>
          <h2 className="section-title">Our Core<br/><span className="gradient-text">Values</span></h2>
          <div className="values-grid">
            {values.map((v, i) => (
              <div className="value-card" key={i}>
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="about-team">
          <div className="section-label">The Team</div>
          <h2 className="section-title">The People<br/><span className="gradient-text">Behind ASP</span></h2>
          <div className="team-grid">
            {team.map((m, i) => (
              <div className="team-card" key={i}>
                <div className="team-avatar" style={{ background: m.bg }}>{m.initials}</div>
                <div className="team-name">{m.name}</div>
                <div className="team-role">{m.role}</div>
                <p className="team-bio">{m.bio}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="about-cta">
          <div className="cta-card">
            <h2>Ready to Get Started?</h2>
            <p>Explore our full catalog or reach out to our team with any questions.</p>
            <div className="cta-buttons">
              <Link to="/products" className="btn-primary">Browse Products</Link>
              <Link to="/contact" className="btn-secondary">Contact Us</Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
