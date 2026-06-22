import { useRef, useEffect } from 'react'
import './About.css'

const features = [
  {
    icon: '🔬',
    title: 'Research Grade Quality',
    desc: 'Every peptide synthesized to ≥99% purity with comprehensive analytical testing including HPLC, MS, and NMR validation.'
  },
  {
    icon: '⚗️',
    title: 'Custom Synthesis',
    desc: 'Bespoke peptide design and synthesis for your specific research needs — from milligram to kilogram scale production.'
  },
  {
    icon: '🧬',
    title: 'Bioactive Compounds',
    desc: 'Extensive library of bioactive peptides including signaling molecules, enzyme inhibitors, and receptor ligands.'
  },
  {
    icon: '🏭',
    title: 'GMP Facilities',
    desc: 'State-of-the-art cGMP-compliant manufacturing facilities meeting international pharmaceutical standards.'
  },
]

export default function About() {
  const sectionRef = useRef()

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="container">
        <div className="section-label">Who We Are</div>
        <h2 className="section-title">
          Pioneering Peptide Science<br/>
          <span className="gradient-text">Since 2010</span>
        </h2>
        <p className="section-sub">
          Active Solution Peptides is a leading peptide research organization dedicated to advancing biomedical
          science through precision molecular engineering. Our team of PhDs and industry veterans drives
          innovation at the intersection of chemistry and biology.
        </p>

        <div className="about-grid">
          {features.map((f, i) => (
            <div className="about-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="card-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
              <div className="card-glow"/>
            </div>
          ))}
        </div>

        <div className="about-visual">
          <div className="dna-helix">
            {Array.from({ length: 12 }).map((_, i) => (
              <div className="helix-pair" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="helix-node left" style={{ background: i % 3 === 0 ? '#00d4ff' : i % 3 === 1 ? '#7c3aed' : '#10b981' }}/>
                <div className="helix-rung"/>
                <div className="helix-node right" style={{ background: i % 3 === 0 ? '#10b981' : i % 3 === 1 ? '#00d4ff' : '#7c3aed' }}/>
              </div>
            ))}
          </div>
          <div className="about-text-block">
            <h3>Our Mission</h3>
            <p>
              We believe that peptides are nature's most versatile molecules. Our mission is to unlock
              their potential through rigorous research, innovative synthesis techniques, and unwavering
              commitment to scientific excellence.
            </p>
            <ul className="mission-points">
              <li><span className="check">✓</span> ISO 9001:2015 Certified</li>
              <li><span className="check">✓</span> FDA-registered facility</li>
              <li><span className="check">✓</span> 15+ years of expertise</li>
              <li><span className="check">✓</span> Global research network</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
