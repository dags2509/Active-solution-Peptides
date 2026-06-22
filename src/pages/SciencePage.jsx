import './SciencePage.css'

const compounds = [
  {
    name: 'BPC-157',
    headline: 'The Healing Peptide',
    color: '#00d4ff',
    summary: 'BPC-157 (Body Protection Compound 157) is a pentadecapeptide consisting of 15 amino acids, derived from a protective protein found in gastric juice. It has been the subject of numerous studies examining its remarkable regenerative properties.',
    effects: ['Accelerates tendon and ligament healing', 'Supports gut lining repair and GI health', 'Reduces systemic inflammation', 'Promotes angiogenesis (new blood vessel growth)', 'Shown to have neuroprotective effects in animal studies'],
    halfLife: '~4 hours',
    dosing: 'Common protocols: 200–400mcg daily',
    route: 'Subcutaneous or intramuscular',
  },
  {
    name: 'TB-500',
    headline: 'Tissue Regeneration',
    color: '#7c3aed',
    summary: 'TB-500 is a synthetic version of the naturally occurring peptide Thymosin Beta-4, which is present in virtually every human cell. It plays a central role in building new blood vessels, muscle tissue, skin, and more.',
    effects: ['Promotes muscle fiber growth and repair', 'Increases endurance and strength recovery', 'Reduces acute and chronic inflammation', 'Speeds healing of wounds and injuries', 'Improves flexibility through actin regulation'],
    halfLife: '~12–14 days',
    dosing: 'Common protocols: 2–2.5mg twice weekly',
    route: 'Subcutaneous injection',
  },
  {
    name: 'Epithalon',
    headline: 'Telomere Activator',
    color: '#10b981',
    summary: 'Epithalon is a synthetic tetrapeptide (Ala-Glu-Asp-Gly) derived from Epithalamin, a natural polypeptide produced by the pineal gland. Research from St. Petersburg\'s Institute of Gerontology has studied it extensively for longevity effects.',
    effects: ['Activates telomerase — the enzyme that lengthens telomeres', 'Normalizes circadian rhythm and melatonin production', 'Demonstrated lifespan extension in multiple animal studies', 'Antioxidant and anti-tumor properties', 'Improves sleep quality and hormonal balance'],
    halfLife: 'Short-acting peptide',
    dosing: 'Common protocols: 5–10mg daily for 10–20 day cycles',
    route: 'Subcutaneous or intravenous',
  },
  {
    name: 'Semax',
    headline: 'Cognitive Enhancement',
    color: '#f59e0b',
    summary: 'Semax is a synthetic heptapeptide derived from the adrenocorticotropic hormone (ACTH). Developed in Russia in the 1980s, it is approved as a drug in Russia and Ukraine, and has become popular in Western biohacker and nootropic communities.',
    effects: ['Significantly increases BDNF (Brain-Derived Neurotrophic Factor)', 'Enhances memory formation and recall', 'Improves focus and mental clarity', 'Neuroprotective against oxidative stress', 'Anti-anxiety effects without sedation'],
    halfLife: '~20 minutes (active up to several hours via BDNF cascade)',
    dosing: 'Common protocols: 200–400mcg 1–2x daily',
    route: 'Intranasal (most common) or subcutaneous',
  },
]

const faq = [
  { q: 'Are peptides safe?', a: 'Peptides are generally well-tolerated. They are naturally occurring amino acid chains that your body already produces. That said, quality, dosing, and individual biology all matter. Always consult a healthcare professional before use.' },
  { q: 'What\'s the difference between peptides and steroids?', a: 'Peptides are short chains of amino acids — they work by signaling your body\'s own processes. Steroids directly mimic or replace hormones. Peptides typically have fewer side effects and work through more targeted pathways.' },
  { q: 'How do I choose the right peptide?', a: 'Your goals determine which compound is most relevant. Recovery-focused? BPC-157 or TB-500. Longevity? Epithalon or GHK-Cu. Cognitive performance? Semax or Selank. Our team is happy to help guide your decision.' },
  { q: 'What purity levels do you carry?', a: 'All products are ≥99% purity, independently verified. We use HPLC (High-Performance Liquid Chromatography) and mass spectrometry testing on every batch.' },
  { q: 'Do you offer lab reports?', a: 'Yes — every product includes a Certificate of Analysis (CoA) with the lot number, purity percentage, and testing methodology. Available on request or included with your order.' },
]

export default function SciencePage() {
  return (
    <div className="science-page">
      <div className="page-hero">
        <div className="container">
          <div className="section-label">The Science</div>
          <h1 className="page-title">Understanding<br/><span className="gradient-text">Peptide Biology</span></h1>
          <p className="page-sub">
            Peptides aren't magic — they're molecular signals your body already uses. Here's the science
            behind the compounds we carry and why they've garnered so much attention from researchers and biohackers alike.
          </p>
        </div>
      </div>

      <div className="container">
        <section className="science-intro">
          <div className="intro-grid">
            <div className="intro-card">
              <div className="intro-icon">🧬</div>
              <h3>What Are Peptides?</h3>
              <p>Peptides are short chains of 2–50 amino acids linked by peptide bonds. They are smaller than proteins but function as powerful signaling molecules — telling your cells what to do and when to do it.</p>
            </div>
            <div className="intro-card">
              <div className="intro-icon">⚙️</div>
              <h3>How Do They Work?</h3>
              <p>Peptides bind to specific receptors on cell surfaces and trigger downstream biological processes. Depending on the peptide, this could mean stimulating repair, modulating inflammation, or activating growth pathways.</p>
            </div>
            <div className="intro-card">
              <div className="intro-icon">🎯</div>
              <h3>Why Are They Targeted?</h3>
              <p>Unlike broad-spectrum hormones or drugs, peptides are highly selective. Each one has a specific receptor affinity, meaning you can target recovery, cognition, or longevity independently with minimal systemic interference.</p>
            </div>
          </div>
        </section>

        <section className="compound-breakdowns">
          <h2 className="section-title">Compound Deep Dives</h2>
          {compounds.map((c, i) => (
            <div className="compound-card" key={i} style={{ '--cc': c.color }}>
              <div className="compound-header">
                <div>
                  <div className="compound-name" style={{ color: c.color }}>{c.name}</div>
                  <div className="compound-headline">{c.headline}</div>
                </div>
                <div className="compound-dot" style={{ background: c.color }}/>
              </div>
              <p className="compound-summary">{c.summary}</p>
              <div className="compound-body">
                <div>
                  <div className="compound-label">Key Effects</div>
                  <ul className="compound-effects">
                    {c.effects.map((e, j) => <li key={j}>{e}</li>)}
                  </ul>
                </div>
                <div className="compound-specs">
                  <div className="spec-item">
                    <span className="spec-label">Half-Life</span>
                    <span className="spec-val">{c.halfLife}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Dosing</span>
                    <span className="spec-val">{c.dosing}</span>
                  </div>
                  <div className="spec-item">
                    <span className="spec-label">Route</span>
                    <span className="spec-val">{c.route}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="science-faq">
          <h2 className="section-title">Common Questions</h2>
          {faq.map((item, i) => (
            <div className="faq-item" key={i}>
              <div className="faq-q">{item.q}</div>
              <div className="faq-a">{item.a}</div>
            </div>
          ))}
        </section>
      </div>
    </div>
  )
}
