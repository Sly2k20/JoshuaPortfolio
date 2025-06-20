"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useRef, useState, useMemo } from "react"
import type { Mesh, Points } from "three"
import * as THREE from "three"

function ParticleTrail({ position, isActive }: { position: THREE.Vector3; isActive: boolean }) {
  const pointsRef = useRef<Points>(null)
  const trailPositions = useRef<THREE.Vector3[]>([])
  const maxTrailLength = 15

  const { positions, colors, sizes } = useMemo(() => {
    const positions = new Float32Array(maxTrailLength * 3)
    const colors = new Float32Array(maxTrailLength * 3)
    const sizes = new Float32Array(maxTrailLength)

    return { positions, colors, sizes }
  }, [])

  useFrame(() => {
    if (pointsRef.current && isActive) {
      // Add current position to trail
      trailPositions.current.unshift(position.clone())

      // Limit trail length
      if (trailPositions.current.length > maxTrailLength) {
        trailPositions.current.pop()
      }

      // Update positions, colors, and sizes
      for (let i = 0; i < maxTrailLength; i++) {
        const trailPos = trailPositions.current[i]
        if (trailPos) {
          positions[i * 3] = trailPos.x
          positions[i * 3 + 1] = trailPos.y
          positions[i * 3 + 2] = trailPos.z

          // Fade effect - newer particles are brighter
          const alpha = (maxTrailLength - i) / maxTrailLength
          colors[i * 3] = 1.0 // Red
          colors[i * 3 + 1] = 0.3 * alpha // Green
          colors[i * 3 + 2] = 0.3 * alpha // Blue

          // Size effect - newer particles are larger
          sizes[i] = alpha * 0.4
        } else {
          // Empty positions
          positions[i * 3] = 0
          positions[i * 3 + 1] = 0
          positions[i * 3 + 2] = 0
          colors[i * 3] = 0
          colors[i * 3 + 1] = 0
          colors[i * 3 + 2] = 0
          sizes[i] = 0
        }
      }

      // Update attributes
      if (pointsRef.current.geometry.attributes.position) {
        pointsRef.current.geometry.attributes.position.needsUpdate = true
      }
      if (pointsRef.current.geometry.attributes.color) {
        pointsRef.current.geometry.attributes.color.needsUpdate = true
      }
      if (pointsRef.current.geometry.attributes.size) {
        pointsRef.current.geometry.attributes.size.needsUpdate = true
      }
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.2}
        sizeAttenuation={true}
        vertexColors={true}
        transparent={true}
        opacity={0.9}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function FloatingCube({ position, id }: { position: [number, number, number]; id: number }) {
  const meshRef = useRef<Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const currentPosition = useRef(new THREE.Vector3(...position))

  useFrame((state) => {
    if (meshRef.current) {
      // Slower, more visible rotation
      meshRef.current.rotation.x += 0.005 + id * 0.001
      meshRef.current.rotation.y += 0.008 + id * 0.001
      meshRef.current.rotation.z += 0.003 + id * 0.002

      // Larger, slower floating motion
      const time = state.clock.elapsedTime
      const newY = position[1] + Math.sin(time * 0.4 + id) * 1.2
      const newX = position[0] + Math.cos(time * 0.3 + id) * 0.8
      const newZ = position[2] + Math.sin(time * 0.2 + id) * 0.4

      meshRef.current.position.set(newX, newY, newZ)
      currentPosition.current.copy(meshRef.current.position)
    }
  })

  return (
    <group>
      {/* Much larger, brighter main cube */}
      <mesh
        ref={meshRef}
        position={position}
        scale={hovered ? 2.5 : 2.0}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color={hovered ? "#ff8888" : "#ff0000"}
          opacity={0.9}
          transparent
          emissive={hovered ? "#660000" : "#440000"}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Glowing trail */}
      <ParticleTrail position={currentPosition.current} isActive={true} />

      {/* Much larger outer glow */}
      <mesh position={position} scale={hovered ? 4.0 : 3.5}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial
          color="#ff0000"
          opacity={hovered ? 0.3 : 0.2}
          transparent
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Bright inner core */}
      <mesh position={position} scale={hovered ? 1.8 : 1.5}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial
          color="#ffffff"
          opacity={hovered ? 0.5 : 0.3}
          transparent
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  )
}

function GlowingParticles() {
  const pointsRef = useRef<Points>(null)
  const particleCount = 150

  const { positions, colors, sizes } = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)
    const sizes = new Float32Array(particleCount)

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 25
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15

      colors[i * 3] = 1.0 // Red
      colors[i * 3 + 1] = 0.2 + Math.random() * 0.3 // Green
      colors[i * 3 + 2] = 0.2 + Math.random() * 0.3 // Blue

      sizes[i] = Math.random() * 0.1 + 0.05
    }

    return { positions, colors, sizes }
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.002
      pointsRef.current.rotation.x += 0.001

      // Animate particles
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < particleCount; i++) {
        positions[i * 3 + 1] += Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.002
        positions[i * 3] += Math.cos(state.clock.elapsedTime * 0.3 + i) * 0.001
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        sizeAttenuation={true}
        vertexColors={true}
        transparent={true}
        opacity={0.7}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function Scene() {
  // Generate cubes with better mobile positioning
  const cubes = useMemo(() => {
    const cubeArray = []
    for (let i = 0; i < 25; i++) {
      cubeArray.push({
        id: i,
        position: [
          (Math.random() - 0.5) * 20, // -10 to 10
          (Math.random() - 0.5) * 15, // -7.5 to 7.5
          (Math.random() - 0.5) * 8 - 1, // -5 to 3
        ] as [number, number, number],
      })
    }
    return cubeArray
  }, [])

  return (
    <>
      {/* Much brighter lighting for mobile */}
      <ambientLight intensity={0.8} />
      <pointLight position={[10, 10, 10]} intensity={3} color="#dc2626" />
      <pointLight position={[-10, -10, -10]} intensity={2} color="#ffffff" />
      <pointLight position={[0, 0, 8]} intensity={2.5} color="#ff4444" />
      <pointLight position={[5, -5, 5]} intensity={2} color="#ff6666" />

      {/* Floating cubes with trails */}
      {cubes.map((cube) => (
        <FloatingCube key={cube.id} position={cube.position} id={cube.id} />
      ))}

      {/* Background particles */}
      <GlowingParticles />
    </>
  )
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        style={{ background: "transparent" }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
          failIfMajorPerformanceCaveat: false,
        }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <Scene />
      </Canvas>

      {/* Fallback indicator for debugging */}
      <div className="absolute top-4 right-4 text-red-500 text-xs opacity-50 z-10">3D ACTIVE</div>
    </div>
  )
}
