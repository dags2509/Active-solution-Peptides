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
  { q: 'Are these compounds for human use?', a: 'No. All compounds sold by Active Solution Peptides are strictly for laboratory and in-vitro research purposes only. They are not intended for human or veterinary consumption, diagnosis, treatment, or prevention of any condition.' },
  { q: 'What is the difference between peptides and steroids in research?', a: 'Peptides are short chains of amino acids that act as signaling molecules in biological research models. Steroids are lipid-based hormones with different mechanisms. Peptides are studied for their receptor selectivity in laboratory settings.' },
  { q: 'How do researchers select the right compound?', a: 'Compound selection depends on the biological pathway being studied. BPC-157 and TB-500 are used in tissue repair research. Epithalon and GHK-Cu are used in longevity models. Semax and Selank are used in neuropeptide research.' },
  { q: 'What purity standards do your compounds meet?', a: 'All research compounds are ≥99% purity, independently verified via HPLC (High-Performance Liquid Chromatography) and mass spectrometry testing on every batch.' },
  { q: 'Do you provide lab documentation?', a: 'Yes — every compound includes a Certificate of Analysis (CoA) with the lot number, purity percentage, and testing methodology. Available on request or included with your order.' },
]

export default function SciencePage() {
  return (
    <div className="science-page">
      <div className="page-hero">
        <div className="container">
          <div className="section-label">Research Information</div>
          <h1 className="page-title">The Science Behind<br/><span className="gradient-text">Peptide Research</span></h1>
          <p className="page-sub">
            Educational overview of peptide biology for research and informational purposes only. All compounds sold by Active Solution Peptides
            are strictly for laboratory and in-vitro research use. Not for human or veterinary consumption.
          </p>
        </div>
      </div>

      <div className="container">
        <section className="science-intro">
          <div className="intro-grid">
            <div className="intro-card">
              <div className="intro-icon">🧬</div>
              <h3>What Are Peptides?</h3>
              <p>Peptides are short chains of 2–50 amino acids linked by peptide bonds. Smaller than proteins, they are studied as biological signaling molecules in laboratory and in-vitro research settings. Not for human use.</p>
            </div>
            <div className="intro-card">
              <div className="intro-icon">⚙️</div>
              <h3>How Are They Studied?</h3>
              <p>In research models, peptides bind to specific receptors and trigger measurable downstream biological processes — making them valuable tools for studying repair mechanisms, inflammation, and growth signaling pathways.</p>
            </div>
            <div className="intro-card">
              <div className="intro-icon">🎯</div>
              <h3>Why Research-Grade Matters</h3>
              <p>High purity is critical in research settings. Our compounds are independently verified to ≥99% purity via HPLC and mass spectrometry, ensuring reliable, reproducible results in laboratory studies.</p>
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
