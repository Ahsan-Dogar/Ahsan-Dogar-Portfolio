import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'
import { motion } from 'framer-motion'

interface SkillBadge3DProps {
  skill: {
    name: string
    color: string
  }
}

function RotatingBadge({ name, color, isHovered }: { name: string; color: string; isHovered: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (meshRef.current) {
      if (isHovered) {
        meshRef.current.rotation.y = state.clock.getElapsedTime() * 2
        meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime()) * 0.3
      } else {
        meshRef.current.rotation.y += 0.01
      }
    }
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial
        color={color}
        metalness={0.5}
        roughness={0.2}
        transparent
        opacity={0.8}
      />
      <Text
        position={[0, 0, 1.01]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
    </mesh>
  )
}

export default function SkillBadge3D({ skill }: SkillBadge3DProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative h-48 bg-secondary rounded-lg overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <RotatingBadge name={skill.name} color={skill.color} isHovered={isHovered} />
      </Canvas>
      
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-secondary to-transparent p-4">
        <p className="text-center text-text-primary font-semibold">{skill.name}</p>
      </div>
    </motion.div>
  )
}
