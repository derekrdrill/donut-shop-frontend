/**
 * Página de Inicio
 */

'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Float } from '@react-three/drei';
import { useSpring, animated, config } from '@react-spring/web';
import { useNavigation } from '@/context/NavigationContext';
import { NAVIGATION_CONFIG } from '@/config/navigation.config';

function HeroModel() {
  return (
    <group>
      {/* Elementos 3D flotantes */}
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[-2, 0, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#FF6B35" metalness={0.8} roughness={0.2} />
        </mesh>
      </Float>

      <Float speed={2} rotationIntensity={1.5} floatIntensity={2.5}>
        <mesh position={[2, 0, 0]}>
          <octahedronGeometry args={[0.8]} />
          <meshStandardMaterial color="#FFD700" metalness={0.9} roughness={0.1} />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={2}>
        <mesh position={[0, 2, 0]}>
          <tetrahedronGeometry args={[0.8]} />
          <meshStandardMaterial color="#FF1744" metalness={0.8} roughness={0.2} />
        </mesh>
      </Float>

      {/* Partículas */}
      <ParticleField />
    </group>
  );
}

function ParticleField() {
  const positions = new Float32Array(1000 * 3);
  for (let i = 0; i < 1000; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={1000} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="#FF6B35" sizeAttenuation={true} />
    </points>
  );
}

export default function HomePage() {
  const { navigateTo } = useNavigation();

  const titleSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: config.gentle,
  });

  const descriptionSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(40px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 200,
    config: config.gentle,
  });

  const buttonSpring = useSpring({
    from: { opacity: 0, transform: 'scale(0.8)' },
    to: { opacity: 1, transform: 'scale(1)' },
    delay: 400,
    config: config.wobbly,
  });

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Canvas 3D */}
      <div className="absolute inset-0 -z-10">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 8]} />
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
          <HeroModel />
          <OrbitControls autoRotate autoRotateSpeed={2} />
        </Canvas>
      </div>

      {/* Contenido */}
      <div className="z-10 text-center px-4 max-w-2xl">
        <animated.h1
          style={titleSpring}
          className="text-6xl md:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-500"
        >
          Pardos Alimentos
        </animated.h1>

        <animated.p
          style={descriptionSpring}
          className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed"
        >
          Experiencia inmersiva 3D de productos peruanos auténticos.
          <br />
          Chifles, papitas, bebidas, licores, alfajores y marcianos.
        </animated.p>

        <animated.div style={buttonSpring} className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => navigateTo('/showroom', 'morphing')}
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all transform hover:scale-105"
          >
            🏭 Entrar al Showroom
          </button>

          <button
            onClick={() => navigateTo('/products', 'slide')}
            className="px-8 py-4 bg-white/10 backdrop-blur text-white font-bold rounded-lg border border-white/20 hover:bg-white/20 transition-all"
          >
            🛍️ Ver Catálogo
          </button>
        </animated.div>

        {/* Navegación rápida */}
        <animated.div
          style={{ ...titleSpring, delay: 600 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {NAVIGATION_CONFIG.slice(0, 4).map((item) => (
            <button
              key={item.id}
              onClick={() => navigateTo(item.path, item.transitionType)}
              className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition group"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="text-sm font-semibold text-gray-300 group-hover:text-white transition">
                {item.label}
              </div>
              <div className="text-xs text-gray-500">{item.description}</div>
            </button>
          ))}
        </animated.div>
      </div>
    </div>
  );
}
