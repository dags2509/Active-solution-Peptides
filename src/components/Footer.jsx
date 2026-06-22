import { Link } from 'react-router-dom'
import './Footer.css'

const links = {
  Products: [
    { label: 'BPC-157', path: '/products' },
    { label: 'TB-500', path: '/products' },
    { label: 'Epithalon', path: '/products' },
    { label: 'Semax', path: '/products' },
    { label: 'GHK-Cu', path: '/products' },
    { label: 'View All', path: '/products' },
  ],
  Company: [
    { label: 'About Us', path: '/about' },
    { label: 'Science', path: '/science' },
    { label: 'Affiliate Program', path: '/affiliate' },
    { label: 'Contact', path: '/contact' },
  ],
  Support: [
    { label: 'FAQ', path: '/contact' },
    { label: 'Shipping Info', path: '/contact' },
    { label: 'Returns', path: '/contact' },
    { label: 'Order Status', path: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid-bg"/>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link className="footer-logo" to="/">
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
                <div className="footer-logo-tag">Premium Peptide Supplements</div>
              </div>
            </Link>
            <p className="footer-desc">
              High-purity peptide compounds for performance, recovery, and longevity.
              Trusted by thousands of customers worldwide.
            </p>
            <div className="footer-social">
              {['𝕏', 'in', 'IG', 'YT'].map((s, i) => (
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
                    <li key={item.label}><Link to={item.path}>{item.label}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-order-note">
          📱 <strong>To place an order:</strong> Text (475) 434-0527 with the product name, size, and shipping address. Email: dylan@straightjacket.com
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <span>© 2025 Active Solution Peptides. All rights reserved.</span>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
          <div className="footer-earn">
            <Link to="/affiliate" className="footer-affiliate-link">
              💰 Earn 20% Commission — Join Our Affiliate Program
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
