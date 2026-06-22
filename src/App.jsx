import { Suspense, useRef } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Research from './components/Research'
import Stats from './components/Stats'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Suspense fallback={<div className="loader"><div className="loader-ring"/></div>}>
          <Hero />
        </Suspense>
        <About />
        <Stats />
        <Products />
        <Research />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
