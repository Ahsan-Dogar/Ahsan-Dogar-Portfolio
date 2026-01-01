import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function StarField() {
  const ref = useRef<THREE.Points>(null!)
  
  const sphere = useMemo(() => {
    const positions = new Float32Array(5000 * 3)
    
    for (let i = 0; i < 5000; i++) {
      const radius = Math.random() * 25 + 5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      
      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)
      
      positions[i * 3] = x
      positions[i * 3 + 1] = y
      positions[i * 3 + 2] = z
    }
    
    return positions
  }, [])

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.05
      ref.current.rotation.y -= delta * 0.075
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#06b6d4"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

function FloatingCubes() {
  const meshRef = useRef<THREE.Group>(null!)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
    }
  })

  return (
    <group ref={meshRef}>
      {[...Array(3)].map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos(i * 2.1) * 3,
            Math.sin(i * 2.1) * 3,
            -5
          ]}
        >
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? '#06b6d4' : '#a855f7'}
            wireframe
            transparent
            opacity={0.3}
          />
        </mesh>
      ))}
    </group>
  )
}

export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <StarField />
        <FloatingCubes />
      </Canvas>
    </div>
  )
}
