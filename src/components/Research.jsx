import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import './Research.css'

function FloatingBlob({ position, color, scale = 1 }) {
  const ref = useRef()
  useFrame((s) => {
    ref.current.rotation.x = s.clock.elapsedTime * 0.2
    ref.current.rotation.y = s.clock.elapsedTime * 0.3
  })
  return (
    <Float speed={2} floatIntensity={0.5}>
      <mesh ref={ref} position={position} scale={scale}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial color={color} distort={0.4} speed={2} roughness={0.1} metalness={0.3} transparent opacity={0.7} />
      </mesh>
    </Float>
  )
}

const areas = [
  {
    icon: '🔬',
    title: 'Solid-Phase Synthesis',
    desc: 'Advanced SPPS using Fmoc/tBu chemistry on automated synthesizers. Capable of producing peptides from dipeptides to 50+ amino acid sequences with high purity.',
    color: '#00d4ff',
  },
  {
    icon: '📊',
    title: 'Analytical Characterization',
    desc: 'Full analytical suite including RP-HPLC, LC-MS/MS, NMR spectroscopy, and amino acid analysis for comprehensive compound characterization.',
    color: '#7c3aed',
  },
  {
    icon: '🧫',
    title: 'Bioassay Development',
    desc: 'In vitro biological assay development including receptor binding assays, enzyme activity assays, and cell-based functional studies.',
    color: '#10b981',
  },
  {
    icon: '💊',
    title: 'Formulation Science',
    desc: 'Lyophilization, reconstitution optimization, and stability studies for peptide-based research reagents and formulations.',
    color: '#f59e0b',
  },
]

const pipeline = [
  { phase: 'Discovery', status: 'Active', items: ['Novel GLP-1 analogs', 'Selective MOR agonists', 'Anti-fibrotic peptides'] },
  { phase: 'Development', status: 'Ongoing', items: ['Cyclic peptide library', 'PEGylated variants', 'Stapled helices'] },
  { phase: 'Validation', status: 'Complete', items: ['BPC-157 variants', 'Epithalon derivatives', 'MOTS-c series'] },
]

export default function Research() {
  return (
    <section className="research" id="research">
      <div className="research-3d">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 2]}>
          <ambientLight intensity={0.4} />
          <pointLight position={[5, 5, 5]} intensity={1.5} color="#00d4ff" />
          <pointLight position={[-5, -5, 5]} intensity={1} color="#7c3aed" />
          <FloatingBlob position={[-2, 1, 0]} color="#00d4ff" scale={0.8} />
          <FloatingBlob position={[2, -1, -1]} color="#7c3aed" scale={0.6} />
          <FloatingBlob position={[0, 0, -2]} color="#10b981" scale={0.5} />
        </Canvas>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-label">R&D Capabilities</div>
        <h2 className="section-title">World-Class<br/><span className="gradient-text">Research Infrastructure</span></h2>
        <p className="section-sub">
          Our 20,000 sq ft research facility houses cutting-edge equipment and a team of over 40
          PhD-level scientists committed to advancing peptide science.
        </p>

        <div className="research-grid">
          {areas.map((a, i) => (
            <div className="research-card" key={i} style={{ '--r-color': a.color }}>
              <div className="research-icon">{a.icon}</div>
              <div className="research-indicator" style={{ background: a.color }}/>
              <h3>{a.title}</h3>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>

        <div className="pipeline">
          <h3 className="pipeline-title">Research Pipeline</h3>
          <div className="pipeline-grid">
            {pipeline.map((p, i) => (
              <div className="pipeline-col" key={i}>
                <div className={`pipeline-header status-${p.status.toLowerCase()}`}>
                  <span>{p.phase}</span>
                  <span className="pipeline-status">{p.status}</span>
                </div>
                <ul className="pipeline-items">
                  {p.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
