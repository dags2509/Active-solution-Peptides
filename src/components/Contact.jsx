import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', interest: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-glow"/>
      <div className="container">
        <div className="section-label">Get In Touch</div>
        <h2 className="section-title">Start Your<br/><span className="gradient-text">Research Journey</span></h2>

        <div className="contact-layout">
          <div className="contact-info">
            <p className="contact-intro">
              Whether you need catalog compounds, custom synthesis, or research consultation —
              our team of peptide experts is ready to support your science.
            </p>

            <div className="contact-details">
              {[
                { icon: '📧', label: 'Email', val: 'research@activesolutionpeptides.com' },
                { icon: '📞', label: 'Phone', val: '+1 (800) 555-PEPT' },
                { icon: '📍', label: 'Location', val: 'San Diego, CA 92121' },
                { icon: '⏰', label: 'Hours', val: 'Mon–Fri, 8am–6pm PT' },
              ].map(d => (
                <div className="contact-detail" key={d.label}>
                  <span className="detail-icon">{d.icon}</span>
                  <div>
                    <div className="detail-label">{d.label}</div>
                    <div className="detail-val">{d.val}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-certs">
              <div className="cert">ISO 9001</div>
              <div className="cert">FDA Registered</div>
              <div className="cert">GMP Certified</div>
              <div className="cert">cGMP Compliant</div>
            </div>
          </div>

          <div className="contact-form-wrap">
            {sent ? (
              <div className="success-state">
                <div className="success-icon">✓</div>
                <h3>Message Sent!</h3>
                <p>Our research team will respond within 24 hours.</p>
                <button className="btn-primary" onClick={() => setSent(false)}>Send Another</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Dr. Jane Smith" required />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="jsmith@university.edu" required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Institution / Company</label>
                  <input name="company" value={form.company} onChange={handleChange} placeholder="Stanford University" />
                </div>
                <div className="form-group">
                  <label>Area of Interest</label>
                  <select name="interest" value={form.interest} onChange={handleChange}>
                    <option value="">Select an option...</option>
                    <option>Catalog Compounds</option>
                    <option>Custom Synthesis</option>
                    <option>Bulk / GMP Supply</option>
                    <option>Research Collaboration</option>
                    <option>Technical Support</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your research needs..." rows={5} required />
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
    </section>
  )
}
