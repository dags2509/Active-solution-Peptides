import { useState } from 'react'
import { Link } from 'react-router-dom'
import './AffiliatePage.css'

const steps = [
  { n: '01', title: 'Sign Up Free', desc: 'Create your affiliate account in under 2 minutes. No approval wait, no minimum followers required. Just sign up and get your unique link.' },
  { n: '02', title: 'Share Your Link', desc: 'Post on social media, your blog, YouTube, TikTok, or send directly to friends. Your unique tracking link follows every click for 30 days.' },
  { n: '03', title: 'Earn 20% Commission', desc: 'Every purchase made through your link puts 20% directly in your pocket. No cap on earnings. No hidden fees.' },
  { n: '04', title: 'Get Paid Weekly', desc: 'Commissions paid every Friday via PayPal, Venmo, or bank transfer. Minimum payout of $25. Track everything in your real-time dashboard.' },
]

const tiers = [
  { name: 'Starter', commission: '20%', monthly: '$0–$1,000', perks: ['Unique tracking link', 'Real-time dashboard', 'Weekly payouts', 'Email support'], color: '#64748b' },
  { name: 'Silver', commission: '22%', monthly: '$1,001–$5,000', perks: ['Everything in Starter', 'Priority support', 'Exclusive product previews', 'Custom discount code for your audience'], color: '#94a3b8', highlight: false },
  { name: 'Gold', commission: '25%', monthly: '$5,001+', perks: ['Everything in Silver', 'Dedicated account manager', 'Co-marketing opportunities', 'Free product samples monthly', 'Commission bump to 25%'], color: '#f59e0b', highlight: true },
]

const niches = [
  { icon: '🏋️', label: 'Fitness & Bodybuilding' },
  { icon: '🧘', label: 'Biohacking & Longevity' },
  { icon: '🎙️', label: 'Podcast & YouTube' },
  { icon: '📸', label: 'Health Influencers' },
  { icon: '🩺', label: 'Wellness Coaches' },
  { icon: '📝', label: 'Bloggers & Writers' },
]

export default function AffiliatePage() {
  const [form, setForm] = useState({ name: '', email: '', platform: '', audience: '', niche: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => { e.preventDefault(); setSent(true) }

  return (
    <div className="affiliate-page">
      {/* Hero */}
      <div className="aff-hero">
        <div className="aff-hero-glow"/>
        <div className="container">
          <div className="section-label">Affiliate Program</div>
          <h1 className="page-title">Turn Your Audience<br/><span className="gradient-text">Into Income</span></h1>
          <p className="page-sub">
            Join our affiliate program and earn 20% commission on every sale you refer.
            No experience needed. Completely free to join. Weekly payouts.
          </p>
          <div className="aff-hero-metrics">
            <div className="aff-metric"><span className="aff-val">20%</span><span className="aff-label">Base Commission</span></div>
            <div className="aff-divider"/>
            <div className="aff-metric"><span className="aff-val">30</span><span className="aff-label">Day Cookie</span></div>
            <div className="aff-divider"/>
            <div className="aff-metric"><span className="aff-val">$0</span><span className="aff-label">To Join</span></div>
            <div className="aff-divider"/>
            <div className="aff-metric"><span className="aff-val">Weekly</span><span className="aff-label">Payouts</span></div>
          </div>
          <a href="#signup" className="btn-primary aff-hero-cta">
            Start Earning Today
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>

      <div className="container">

        {/* How It Works */}
        <section className="aff-section">
          <div className="section-label">How It Works</div>
          <h2 className="section-title">Start Earning in<br/><span className="gradient-text">4 Simple Steps</span></h2>
          <div className="steps-grid">
            {steps.map((s, i) => (
              <div className="step-card" key={i}>
                <div className="step-number">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Who It's For */}
        <section className="aff-section">
          <div className="section-label">Who It's For</div>
          <h2 className="section-title">Perfect For<br/><span className="gradient-text">Every Creator</span></h2>
          <div className="niches-grid">
            {niches.map((n, i) => (
              <div className="niche-card" key={i}>
                <span className="niche-icon">{n.icon}</span>
                <span>{n.label}</span>
              </div>
            ))}
          </div>
          <p className="niche-note">
            Whether you have 500 followers or 500,000 — if your audience cares about health, performance, or longevity, there's money to be made. Our average affiliate earns <strong>$340/month</strong>. Our top affiliates earn over <strong>$8,000/month</strong>.
          </p>
        </section>

        {/* Earnings Calculator */}
        <section className="aff-section">
          <div className="section-label">Earnings Potential</div>
          <h2 className="section-title">See What You<br/><span className="gradient-text">Could Earn</span></h2>
          <div className="calculator-grid">
            {[
              { referrals: 10, avg: 65, monthly: 130, label: 'Casual Promoter' },
              { referrals: 50, avg: 65, monthly: 650, label: 'Active Creator' },
              { referrals: 200, avg: 65, monthly: 2600, label: 'Power Affiliate' },
              { referrals: 500, avg: 65, monthly: 6500, label: 'Top Earner', hot: true },
            ].map((row, i) => (
              <div className={`calc-card ${row.hot ? 'hot' : ''}`} key={i}>
                {row.hot && <div className="hot-badge">🔥 Top Tier</div>}
                <div className="calc-label">{row.label}</div>
                <div className="calc-referrals">{row.referrals} sales/mo</div>
                <div className="calc-earning">${row.monthly.toLocaleString()}<span>/mo</span></div>
                <div className="calc-sub">At 20% of avg ${row.avg} order</div>
              </div>
            ))}
          </div>
        </section>

        {/* Commission Tiers */}
        <section className="aff-section">
          <div className="section-label">Commission Tiers</div>
          <h2 className="section-title">Grow Your<br/><span className="gradient-text">Earnings Over Time</span></h2>
          <div className="tiers-grid">
            {tiers.map((t, i) => (
              <div className={`tier-card ${t.highlight ? 'highlighted' : ''}`} key={i} style={{ '--tc': t.color }}>
                {t.highlight && <div className="tier-best">Most Reached</div>}
                <div className="tier-name" style={{ color: t.color }}>{t.name}</div>
                <div className="tier-commission">{t.commission}</div>
                <div className="tier-monthly">Monthly Earnings: {t.monthly}</div>
                <ul className="tier-perks">
                  {t.perks.map((p, j) => <li key={j}>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Sign Up Form */}
        <section className="aff-section" id="signup">
          <div className="signup-wrap">
            <div className="signup-left">
              <div className="section-label">Join Now</div>
              <h2 className="section-title" style={{ marginBottom: '16px' }}>Apply in<br/><span className="gradient-text">2 Minutes</span></h2>
              <p style={{ color: '#64748b', fontSize: '15px', lineHeight: '1.7', marginBottom: '32px' }}>
                No gatekeeping. No minimum audience size. Fill out the form and receive your tracking link within 24 hours.
              </p>
              <div className="signup-guarantees">
                {['Instant approval for most applicants', 'No minimum audience size', 'Custom discount code for your followers', 'Dedicated affiliate support'].map((g, i) => (
                  <div className="guarantee-item" key={i}>
                    <span className="g-check">✓</span>
                    <span>{g}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="signup-right">
              {sent ? (
                <div className="success-state">
                  <div className="success-icon">✓</div>
                  <h3>Application Received!</h3>
                  <p>You'll receive your unique affiliate link and dashboard access within 24 hours. Welcome to the team!</p>
                </div>
              ) : (
                <form className="affiliate-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
                    </div>
                    <div className="form-group">
                      <label>Email *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@email.com" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Primary Platform</label>
                    <select name="platform" value={form.platform} onChange={handleChange}>
                      <option value="">Where do you promote?</option>
                      <option>Instagram</option>
                      <option>TikTok</option>
                      <option>YouTube</option>
                      <option>Blog / Website</option>
                      <option>Podcast</option>
                      <option>Twitter / X</option>
                      <option>Email Newsletter</option>
                      <option>Facebook Group</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Audience Size (Approximate)</label>
                    <select name="audience" value={form.audience} onChange={handleChange}>
                      <option value="">Select range...</option>
                      <option>Under 1,000</option>
                      <option>1,000 – 10,000</option>
                      <option>10,000 – 50,000</option>
                      <option>50,000 – 100,000</option>
                      <option>100,000+</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Your Niche / Content Type</label>
                    <input name="niche" value={form.niche} onChange={handleChange} placeholder="e.g. Fitness, Biohacking, Longevity, MMA..." />
                  </div>
                  <button type="submit" className="btn-primary form-submit">
                    Apply Now — It's Free
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
