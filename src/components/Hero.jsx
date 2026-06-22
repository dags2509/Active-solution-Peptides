import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars, Float, MeshDistortMaterial, Sphere } from '@react-three/drei'
import * as THREE from 'three'
import './Hero.css'

function MoleculeAtom({ position, color, size = 0.3, speed = 1 }) {
  const ref = useRef()
  useFrame((state) => {
    ref.current.rotation.x = state.clock.elapsedTime * 0.3 * speed
    ref.current.rotation.y = state.clock.elapsedTime * 0.5 * speed
  })
  return (
    <Float speed={speed * 1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={ref} position={position}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial
          color={color}
          roughness={0.1}
          metalness={0.8}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  )
}

function Bond({ start, end, color = '#00d4ff' }) {
  const mid = useMemo(() => new THREE.Vector3(...start).lerp(new THREE.Vector3(...end), 0.5), [start, end])
  const direction = useMemo(() => new THREE.Vector3(...end).sub(new THREE.Vector3(...start)), [start, end])
  const length = direction.length()
  const quaternion = useMemo(() => {
    const q = new THREE.Quaternion()
    q.setFromUnitVectors(new THREE.Vector3(0, 1, 0), direction.clone().normalize())
    return q
  }, [direction])

  return (
    <mesh position={mid.toArray()} quaternion={quaternion}>
      <cylinderGeometry args={[0.04, 0.04, length, 8]} />
      <meshStandardMaterial color={color} roughness={0.3} metalness={0.6} emissive={color} emissiveIntensity={0.2} />
    </mesh>
  )
}

function PeptideMolecule() {
  const groupRef = useRef()

  useFrame((state) => {
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.15
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.15
  })

  const atoms = [
    { pos: [0, 0, 0],     color: '#00d4ff', size: 0.42 },
    { pos: [1.4, 0.8, 0.3],  color: '#7c3aed', size: 0.32 },
    { pos: [-1.4, 0.6, -0.2], color: '#10b981', size: 0.32 },
    { pos: [0.5, -1.4, 0.6], color: '#f59e0b', size: 0.28 },
    { pos: [-0.7, -1.2, -0.5], color: '#ef4444', size: 0.28 },
    { pos: [1.8, -0.5, -0.6], color: '#00d4ff', size: 0.24 },
    { pos: [-1.8, -0.3, 0.7], color: '#7c3aed', size: 0.24 },
    { pos: [0.2, 1.8, -0.8], color: '#10b981', size: 0.22 },
  ]

  const bonds = [
    { s: [0,0,0], e: [1.4,0.8,0.3], c: '#00d4ff' },
    { s: [0,0,0], e: [-1.4,0.6,-0.2], c: '#00d4ff' },
    { s: [0,0,0], e: [0.5,-1.4,0.6], c: '#00d4ff' },
    { s: [0,0,0], e: [-0.7,-1.2,-0.5], c: '#7c3aed' },
    { s: [1.4,0.8,0.3], e: [1.8,-0.5,-0.6], c: '#7c3aed' },
    { s: [1.4,0.8,0.3], e: [0.2,1.8,-0.8], c: '#7c3aed' },
    { s: [-1.4,0.6,-0.2], e: [-1.8,-0.3,0.7], c: '#10b981' },
    { s: [0.5,-1.4,0.6], e: [1.8,-0.5,-0.6], c: '#f59e0b' },
  ]

  return (
    <group ref={groupRef}>
      {atoms.map((a, i) => (
        <MoleculeAtom key={i} position={a.pos} color={a.color} size={a.size} speed={0.5 + i * 0.1} />
      ))}
      {bonds.map((b, i) => (
        <Bond key={i} start={b.s} end={b.e} color={b.c} />
      ))}
    </group>
  )
}

function ParticleField() {
  const count = 200
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30
      pos[i * 3 + 2] = (Math.random() - 0.5) * 30
    }
    return pos
  }, [])

  const ref = useRef()
  useFrame((state) => {
    ref.current.rotation.y = state.clock.elapsedTime * 0.02
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.06} color="#00d4ff" transparent opacity={0.5} sizeAttenuation />
    </points>
  )
}

function RingOrbit({ radius, speed, tilt, color }) {
  const ref = useRef()
  useFrame((state) => {
    ref.current.rotation.z = state.clock.elapsedTime * speed
  })
  return (
    <group ref={ref} rotation={[tilt, 0, 0]}>
      <mesh>
        <torusGeometry args={[radius, 0.015, 8, 80]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} transparent opacity={0.4} />
      </mesh>
    </group>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#00d4ff" />
      <pointLight position={[-5, -5, 5]} intensity={1} color="#7c3aed" />
      <pointLight position={[0, 5, -5]} intensity={0.8} color="#10b981" />
      <Stars radius={60} depth={50} count={3000} factor={3} saturation={0} fade speed={0.5} />
      <ParticleField />
      <PeptideMolecule />
      <RingOrbit radius={3.5} speed={0.15} tilt={0.4} color="#00d4ff" />
      <RingOrbit radius={4.5} speed={-0.1} tilt={1.1} color="#7c3aed" />
      <RingOrbit radius={5.2} speed={0.08} tilt={0.8} color="#10b981" />
    </>
  )
}

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">
      <div className="hero-canvas">
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }} dpr={[1, 2]}>
          <Scene />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
        </Canvas>
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          Advanced Peptide Research & Development
        </div>

        <h1 className="hero-title">
          Engineering the<br />
          <span className="gradient-text">Future of Biology</span>
        </h1>

        <p className="hero-subtitle">
          Precision-engineered peptides for cutting-edge research. From bioactive compounds
          to research-grade APIs — we deliver molecular solutions that push the boundaries
          of scientific discovery.
        </p>

        <div className="hero-actions">
          <button className="btn-primary" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>
            Explore Products
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
          <button className="btn-secondary" onClick={() => document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' })}>
            Our Research
          </button>
        </div>

        <div className="hero-metrics">
          <div className="metric"><span className="metric-val">500+</span><span className="metric-label">Compounds</span></div>
          <div className="metric-divider"/>
          <div className="metric"><span className="metric-val">99.9%</span><span className="metric-label">Purity Grade</span></div>
          <div className="metric-divider"/>
          <div className="metric"><span className="metric-val">50+</span><span className="metric-label">Research Partners</span></div>
        </div>
      </div>

      <div className="scroll-indicator" onClick={scrollToAbout}>
        <div className="scroll-dot"/>
        <span>Scroll to explore</span>
      </div>
    </section>
  )
}
