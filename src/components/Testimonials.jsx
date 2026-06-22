import { useState } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    name: 'Ryan M.',
    role: 'Competitive CrossFit Athlete',
    avatar: 'RM',
    color: '#00d4ff',
    quote: 'BPC-157 completely changed my recovery. I had a nagging shoulder injury for months — within 3 weeks of running a protocol I was back to full training. The quality is clearly top tier.',
    rating: 5,
  },
  {
    name: 'Jessica T.',
    role: 'Biohacker & Podcast Host',
    avatar: 'JT',
    color: '#7c3aed',
    quote: 'I have tried peptides from five different suppliers. ASP is in a different league — the purity certificates are legit, the shipping is fast, and the results speak for themselves. Semax is my daily stack now.',
    rating: 5,
  },
  {
    name: 'Marcus L.',
    role: 'Personal Trainer & Coach',
    avatar: 'ML',
    color: '#10b981',
    quote: 'I recommend ASP to all my serious clients. The TB-500 and BPC-157 stack has become a go-to for athletes coming back from injuries. Consistent quality every single order.',
    rating: 5,
  },
  {
    name: 'Dana K.',
    role: 'Longevity Enthusiast',
    avatar: 'DK',
    color: '#f59e0b',
    quote: 'Been running Epithalon cycles for two years now. Sleep is noticeably better, energy is more stable, and the team at ASP actually knows what they are talking about when you reach out.',
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
