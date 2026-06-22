import { useState } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    name: 'Ryan M.',
    role: 'Independent Researcher',
    avatar: 'RM',
    color: '#00d4ff',
    quote: 'Ordered BPC-157 for in-vitro tissue repair research. Purity verified against the CoA — matched exactly. Shipping was fast and packaging was professional. Reliable supplier for our lab.',
    rating: 5,
  },
  {
    name: 'Jessica T.',
    role: 'Laboratory Professional',
    avatar: 'JT',
    color: '#7c3aed',
    quote: 'We have sourced from five different suppliers. ASP is consistently the most reliable — the certificates of analysis are accurate, turnaround is quick, and the compounds perform as expected in our research models.',
    rating: 5,
  },
  {
    name: 'Marcus L.',
    role: 'Research Affiliate',
    avatar: 'ML',
    color: '#10b981',
    quote: 'I refer researchers to ASP regularly. TB-500 and BPC-157 are go-to compounds in our research community. Purity and documentation are consistent every order — exactly what lab work requires.',
    rating: 5,
  },
  {
    name: 'Dana K.',
    role: 'Independent Research Buyer',
    avatar: 'DK',
    color: '#f59e0b',
    quote: 'Have been sourcing Epithalon for longevity research for two years now. Documentation is thorough, purity is consistent, and the team responds quickly to compound-specific questions.',
    rating: 5,
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-label">Customer Reviews</div>
        <h2 className="section-title">What Our Customers<br/><span className="gradient-text">Are Saying</span></h2>

        <div className="testimonials-layout">
          <div className="testimonial-main">
            <div className="quote-mark">"</div>
            <blockquote>{testimonials[active].quote}</blockquote>
            <div className="testimonial-author">
              <div className="author-avatar" style={{ background: testimonials[active].color }}>
                {testimonials[active].avatar}
              </div>
              <div>
                <div className="author-name">{testimonials[active].name}</div>
                <div className="author-role">{testimonials[active].role}</div>
              </div>
              <div className="stars">{'★'.repeat(testimonials[active].rating)}</div>
            </div>
          </div>

          <div className="testimonial-list">
            {testimonials.map((t, i) => (
              <button
                key={i}
                className={`testimonial-thumb ${i === active ? 'active' : ''}`}
                onClick={() => setActive(i)}
                style={{ '--t-color': t.color }}
              >
                <div className="thumb-avatar" style={{ background: t.color }}>{t.avatar}</div>
                <div>
                  <div className="thumb-name">{t.name}</div>
                  <div className="thumb-role">{t.role}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="trust-logos">
          {['50,000+ Customers', 'USA Made', '3rd Party Tested', 'Fast Shipping', '99%+ Purity', 'Weekly Payouts'].map(name => (
            <div className="trust-logo" key={name}>{name}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
