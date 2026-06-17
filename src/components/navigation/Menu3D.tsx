/**
 * Menú 3D Orbitador - Componente Principal
 */

'use client';

import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Text, Billboard } from '@react-three/drei';
import * as THREE from 'three';
import { useNavigation } from '@/context/NavigationContext';
import { NAVIGATION_CONFIG } from '@/config/navigation.config';
import { useSpring, animated, config } from '@react-spring/web';

function MenuItem3D({ item, isHovered, onClick }: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  const textRef = useRef<THREE.Mesh>(null);
  const [scale, setScale] = useState(1);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group position={item.position} onClick={onClick}>
      {/* Esfera base */}
      <mesh
        ref={meshRef}
        onPointerEnter={() => setScale(1.3)}
        onPointerLeave={() => setScale(1)}
      >
        <icosahedronGeometry args={[0.6, 4]} />
        <meshStandardMaterial
          color={item.color}
          emissive={isHovered ? item.color : '#000000'}
          emissiveIntensity={isHovered ? 0.8 : 0}
          wireframe={isHovered}
        />
      </mesh>

      {/* Partículas alrededor */}
      <Points item={item} />

      {/* Label flotante */}
      <Billboard>
        <div
          style={{
            background: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: 'bold',
            opacity: isHovered ? 1 : 0.7,
            transition: 'all 0.3s ease',
            whiteSpace: 'nowrap',
            backdropFilter: 'blur(10px)',
          }}
        >
          {item.label}
        </div>
      </Billboard>
    </group>
  );
}

function Points({ item }: any) {
  const particlesRef = useRef<THREE.Points>(null);

  useFrame(() => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x += 0.002;
      particlesRef.current.rotation.y += 0.001;
    }
  });

  const particlePositions = new Float32Array(30 * 3);
  for (let i = 0; i < 30; i++) {
    const phi = Math.acos(-1 + (2 * i) / 30);
    const theta = Math.sqrt(30 * Math.PI) * phi;

    particlePositions[i * 3] = Math.cos(theta) * Math.sin(phi) * 1.2;
    particlePositions[i * 3 + 1] = Math.sin(theta) * Math.sin(phi) * 1.2;
    particlePositions[i * 3 + 2] = Math.cos(phi) * 1.2;
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={particlePositions} count={30} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.08} color={item.color} sizeAttenuation />
    </points>
  );
}

function Scene3DMenu() {
  const { state, navigateTo, setHoveredItem } = useNavigation();
  const { camera } = useThree();

  useEffect(() => {
    camera.position.z = 8;
  }, [camera]);

  return (
    <>
      {/* Iluminación */}
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <pointLight position={[-10, -10, 10]} intensity={0.5} color="#FF6B35" />

      {/* Items del menú */}
      {NAVIGATION_CONFIG.map((item) => (
        <MenuItem3D
          key={item.id}
          item={item}
          isHovered={state.hoveredItem === item.id}
          onClick={() => navigateTo(item.path, item.transitionType)}
          onMouseEnter={() => setHoveredItem(item.id)}
          onMouseLeave={() => setHoveredItem(undefined)}
        />
      ))}

      {/* Controles */}
      <OrbitControls
        enableZoom={true}
        enablePan={true}
        autoRotate={true}
        autoRotateSpeed={1}
      />
    </>
  );
}

export function Menu3D() {
  const { state, toggleMenu } = useNavigation();

  const menuSpring = useSpring({
    opacity: state.isMenuOpen ? 1 : 0,
    transform: state.isMenuOpen ? 'scale(1)' : 'scale(0.9)',
    config: config.molasses,
  });

  return (
    <animated.div
      style={{
        ...menuSpring,
        position: 'fixed',
        bottom: 20,
        right: 20,
        width: 300,
        height: 300,
        borderRadius: '50%',
        zIndex: 40,
        pointerEvents: state.isMenuOpen ? 'auto' : 'none',
      }}
    >
      <Canvas style={{ borderRadius: '50%' }}>
        <Scene3DMenu />
      </Canvas>
    </animated.div>
  );
}

export default Menu3D;
