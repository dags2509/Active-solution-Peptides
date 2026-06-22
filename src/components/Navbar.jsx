import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const links = [
  { label: 'Products', path: '/products' },
  { label: 'Science', path: '/science' },
  { label: 'Affiliate', path: '/affiliate' },
  { label: 'About', path: '/about' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <Link className="nav-logo" to="/">
          <svg width="32" height="32" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="20" r="7" fill="#00d4ff"/>
            <circle cx="19" cy="40" r="7" fill="#7c3aed"/>
            <circle cx="45" cy="40" r="7" fill="#10b981"/>
            <line x1="32" y1="27" x2="19" y2="33" stroke="#00d4ff" strokeWidth="2.5"/>
            <line x1="32" y1="27" x2="45" y2="33" stroke="#00d4ff" strokeWidth="2.5"/>
            <line x1="19" y1="40" x2="45" y2="40" stroke="#7c3aed" strokeWidth="2.5"/>
          </svg>
          <span className="logo-text">Active Solution <strong>Peptides</strong></span>
        </Link>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map(l => (
            <Link
              key={l.path}
              to={l.path}
              className={`nav-link ${location.pathname === l.path ? 'active' : ''}`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="nav-cta">Get Started</Link>
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className={menuOpen ? 'open' : ''}/>
          <span className={menuOpen ? 'open' : ''}/>
          <span className={menuOpen ? 'open' : ''}/>
        </button>
      </div>
    </nav>
  )
}
