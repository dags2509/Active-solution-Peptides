import { useState } from 'react'
import './ContactPage.css'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => { e.preventDefault(); setSent(true) }

  return (
    <div className="contact-page">
      <div className="page-hero">
        <div className="container">
          <div className="section-label">Get In Touch</div>
          <h1 className="page-title">We're Here<br/><span className="gradient-text">To Help</span></h1>
          <p className="page-sub">
            Questions about products, orders, or protocols? Our team responds within a few hours.
            No bots — real people who actually know peptides.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="contact-layout">
          <div className="contact-info-col">
            <div className="info-cards">
              {[
                { icon: '📧', label: 'Email Us', val: 'support@activesolutionpeptides.com', sub: 'Typically respond within 2–4 hours' },
                { icon: '💬', label: 'Live Chat', val: 'Available on site', sub: 'Mon–Fri, 9am–6pm PT' },
                { icon: '📍', label: 'Location', val: 'San Diego, CA 92121', sub: 'Warehouse & HQ' },
                { icon: '📦', label: 'Order Support', val: 'orders@activesolutionpeptides.com', sub: 'Shipping, tracking, returns' },
              ].map((d, i) => (
                <div className="info-card" key={i}>
                  <div className="info-icon">{d.icon}</div>
                  <div>
                    <div className="info-label">{d.label}</div>
                    <div className="info-val">{d.val}</div>
                    <div className="info-sub">{d.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-topics">
              <div className="topics-title">Common Topics</div>
              {['Product questions & protocol advice', 'Order tracking & shipping', 'Returns & refunds', 'Bulk / wholesale pricing', 'Affiliate program inquiries'].map((t, i) => (
                <div className="topic-item" key={i}>→ {t}</div>
              ))}
            </div>
          </div>

          <div className="contact-form-col">
            {sent ? (
              <div className="success-state">
                <div className="success-icon">✓</div>
                <h3>Message Received!</h3>
                <p>We'll get back to you within a few hours. Check your inbox (and spam just in case).</p>
                <button className="btn-primary" onClick={() => setSent(false)}>Send Another</button>
              </div>
            ) : (
              <form className="contact-form-inner" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="you@email.com" required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <select name="subject" value={form.subject} onChange={handleChange}>
                    <option value="">What can we help with?</option>
                    <option>Product Question</option>
                    <option>Order / Shipping</option>
                    <option>Returns & Refunds</option>
                    <option>Protocol Advice</option>
                    <option>Affiliate Program</option>
                    <option>Bulk / Wholesale</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us what you need..." rows={6} required />
                </div>
                <button type="submit" className="btn-primary form-submit">
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
