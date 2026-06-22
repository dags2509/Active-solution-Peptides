import { useState, useEffect } from 'react'
import './Navbar.css'

const links = ['About', 'Products', 'Research', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <svg width="32" height="32" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="20" r="7" fill="#00d4ff"/>
            <circle cx="19" cy="40" r="7" fill="#7c3aed"/>
            <circle cx="45" cy="40" r="7" fill="#10b981"/>
            <line x1="32" y1="27" x2="19" y2="33" stroke="#00d4ff" strokeWidth="2.5"/>
            <line x1="32" y1="27" x2="45" y2="33" stroke="#00d4ff" strokeWidth="2.5"/>
            <line x1="19" y1="40" x2="45" y2="40" stroke="#7c3aed" strokeWidth="2.5"/>
          </svg>
          <span className="logo-text">Active Solution <strong>Peptides</strong></span>
        </div>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {links.map(l => (
            <button key={l} className="nav-link" onClick={() => scrollTo(l)}>{l}</button>
          ))}
          <button className="nav-cta" onClick={() => scrollTo('Contact')}>Get Started</button>
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
