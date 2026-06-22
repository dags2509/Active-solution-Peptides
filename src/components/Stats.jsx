import { useRef, useEffect, useState } from 'react'
import './Stats.css'

function CountUp({ end, suffix = '', duration = 2000 }) {
  const [val, setVal] = useState(0)
  const ref = useRef()
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        const start = Date.now()
        const step = () => {
          const progress = Math.min((Date.now() - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setVal(Math.floor(eased * end))
          if (progress < 1) requestAnimationFrame(step)
          else setVal(end)
        }
        requestAnimationFrame(step)
      }
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration])

  return <span ref={ref}>{val}{suffix}</span>
}

const stats = [
  { val: 99, suffix: '.9%', label: 'Average Purity', sub: 'HPLC & mass spec verified' },
  { val: 15, suffix: '+', label: 'Years Experience', sub: 'In peptide synthesis' },
  { val: 100, suffix: '%', label: 'Research Grade', sub: 'Not for human use' },
  { val: 48, suffix: 'h', label: 'Avg Turnaround', sub: 'Catalog orders' },
  { val: 3, suffix: 'rd Party', label: 'Tested', sub: 'Independent lab verification' },
  { val: 30, suffix: '+', label: 'Compounds Available', sub: 'In active research catalog' },
]

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats-bg-grid"/>
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <div className="stat-card" key={i}>
              <div className="stat-val">
                <CountUp end={s.val} suffix={s.suffix} />
              </div>
              <div className="stat-label">{s.label}</div>
              <div className="stat-sub">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
