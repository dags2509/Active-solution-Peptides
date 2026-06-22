import { Suspense } from 'react'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Testimonials from '../components/Testimonials'
import { Link } from 'react-router-dom'
import './HomePage.css'

const benefits = [
  { icon: '⚡', title: 'Faster Recovery', desc: 'Bounce back quicker from training, injury, or surgery with compounds studied for accelerated tissue repair.' },
  { icon: '🧬', title: 'Cellular Regeneration', desc: 'Support your body at the cellular level — targeting collagen, muscle fibers, and connective tissue.' },
  { icon: '🧠', title: 'Cognitive Edge', desc: 'Nootropic peptides studied for focus, memory, and neuroprotection. Think sharper, perform better.' },
  { icon: '🔥', title: 'Body Composition', desc: 'Compounds that support fat loss, lean muscle retention, and metabolic optimization.' },
  { icon: '⏳', title: 'Longevity & Anti-Aging', desc: 'Peptides linked to telomere health, cellular aging pathways, and long-term vitality.' },
  { icon: '😴', title: 'Sleep & Hormones', desc: 'Optimize deep sleep cycles and support healthy hormone balance from the ground up.' },
]

export default function HomePage() {
  return (
    <>
      <Suspense fallback={<div className="loader"><div className="loader-ring"/></div>}>
        <Hero />
      </Suspense>

      <section className="home-benefits">
        <div className="container">
          <div className="section-label">Why Peptides</div>
          <h2 className="section-title">What Can Peptides<br/><span className="gradient-text">Do For You?</span></h2>
          <p className="section-sub">
            Peptides are short chains of amino acids that signal your body to perform specific functions —
            recovery, growth, cognition, and more. Used by elite athletes, biohackers, and longevity enthusiasts worldwide.
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
              Browse All Products
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link to="/science" className="btn-secondary">See the Science</Link>
          </div>
        </div>
      </section>

      <Stats />

      <section className="home-featured">
        <div className="container">
          <div className="section-label">Top Sellers</div>
          <h2 className="section-title">Most Popular<br/><span className="gradient-text">Compounds</span></h2>
          <div className="featured-grid">
            {[
              { name: 'BPC-157', tag: 'Recovery', desc: 'The gold standard for healing and gut repair. One of the most studied peptides for injury recovery.', color: '#00d4ff', badge: '🏆 #1 Best Seller' },
              { name: 'TB-500', tag: 'Recovery', desc: 'Thymosin Beta-4 fragment — trusted by athletes for rapid tissue regeneration and reduced inflammation.', color: '#7c3aed', badge: '⚡ Fast Acting' },
              { name: 'Epithalon', tag: 'Longevity', desc: 'Telomerase activator linked to cellular lifespan, sleep quality, and anti-aging mechanisms.', color: '#10b981', badge: '🔬 Editor\'s Pick' },
              { name: 'Semax', tag: 'Cognitive', desc: 'Neuropeptide used for focus, memory, and BDNF upregulation. Popular in biohacker communities.', color: '#f59e0b', badge: '🧠 Nootropic' },
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
              <p>Join hundreds of content creators, coaches, and health influencers earning passive income sharing products they love.</p>
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
