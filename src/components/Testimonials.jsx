import { useState } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    name: 'Dr. Sarah Chen',
    role: 'Principal Investigator, Stanford University',
    avatar: 'SC',
    color: '#00d4ff',
    quote: 'Active Solution Peptides has been our go-to supplier for over 5 years. The purity and consistency of their compounds is unmatched — critical for our receptor binding studies. Their customer support team understands the science.',
    rating: 5,
  },
  {
    name: 'Prof. Michael Torres',
    role: 'Director of Biochemistry, MIT',
    avatar: 'MT',
    color: '#7c3aed',
    quote: 'We ordered custom cyclic peptides for our enzyme inhibition research. Not only did they nail the synthesis on the first attempt, but the analytical data provided was comprehensive and publication-ready.',
    rating: 5,
  },
  {
    name: 'Dr. Emma Nakamura',
    role: 'Senior Research Scientist, Pfizer',
    avatar: 'EN',
    color: '#10b981',
    quote: 'As a pharmaceutical researcher, quality documentation is non-negotiable. ASP provides CoAs, HPLC traces, and mass spec data with every order. Their GMP-compliant facility gives us confidence for our pre-clinical work.',
    rating: 5,
  },
  {
    name: 'Dr. James Whitfield',
    role: 'Neuroscience Lab Director, Harvard',
    avatar: 'JW',
    color: '#f59e0b',
    quote: 'The turnaround time for custom synthesis orders is remarkable. We received our stapled peptides within 3 weeks with full characterization. This has significantly accelerated our research timeline.',
    rating: 5,
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-label">Trusted By Researchers</div>
        <h2 className="section-title">What Scientists<br/><span className="gradient-text">Are Saying</span></h2>

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
          {['Stanford', 'MIT', 'Harvard', 'Pfizer', 'NIH', 'Johns Hopkins'].map(name => (
            <div className="trust-logo" key={name}>{name}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
