import './Footer.css'

const links = {
  Products: ['BPC-157', 'TB-500', 'Epithalon', 'Semax', 'GHK-Cu', 'CJC-1295', 'Full Catalog'],
  Research: ['Publications', 'Technical Data', 'CoA Downloads', 'MSDS Library', 'Custom Synthesis'],
  Company: ['About Us', 'Our Team', 'Careers', 'Press', 'Partners'],
  Support: ['FAQ', 'Shipping Policy', 'Returns', 'Contact Us', 'Order Status'],
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid-bg"/>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <svg width="36" height="36" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="20" r="7" fill="#00d4ff"/>
                <circle cx="19" cy="40" r="7" fill="#7c3aed"/>
                <circle cx="45" cy="40" r="7" fill="#10b981"/>
                <line x1="32" y1="27" x2="19" y2="33" stroke="#00d4ff" strokeWidth="2.5"/>
                <line x1="32" y1="27" x2="45" y2="33" stroke="#00d4ff" strokeWidth="2.5"/>
                <line x1="19" y1="40" x2="45" y2="40" stroke="#7c3aed" strokeWidth="2.5"/>
              </svg>
              <div>
                <div className="footer-logo-name">Active Solution Peptides</div>
                <div className="footer-logo-tag">Advanced Peptide Research</div>
              </div>
            </div>
            <p className="footer-desc">
              World-class peptide research compounds for academic, pharmaceutical, and biotech applications.
              Research-grade quality, backed by science.
            </p>
            <div className="footer-social">
              {['𝕏', 'in', 'G', 'R'].map((s, i) => (
                <a key={i} className="social-link" href="#" aria-label="Social">{s}</a>
              ))}
            </div>
          </div>

          <div className="footer-links">
            {Object.entries(links).map(([cat, items]) => (
              <div className="footer-col" key={cat}>
                <div className="footer-col-title">{cat}</div>
                <ul>
                  {items.map(item => (
                    <li key={item}><a href="#">{item}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <span>© 2024 Active Solution Peptides. All rights reserved.</span>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Research Use Only</a>
          </div>
          <div className="footer-disclaimer">
            For Research Use Only. Not for human or veterinary use.
          </div>
        </div>
      </div>
    </footer>
  )
}
