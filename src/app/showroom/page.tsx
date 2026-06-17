/**
 * Página Showroom 3D
 */

'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, PerspectiveCamera, Float } from '@react-three/drei';
import { useSpring, animated, config } from '@react-spring/web';
import { useNavigation } from '@/context/NavigationContext';
import { useState } from 'react';

function ProductCard3D({ name, color, position }: any) {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <group position={position}>
        <mesh>
          <boxGeometry args={[1, 1.5, 0.5]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.5}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        <mesh position={[0, 0.8, 0]}>
          <cylinderGeometry args={[0.3, 0.3, 0.3, 32]} />
          <meshStandardMaterial color="#FFD700" />
        </mesh>
      </group>
    </Float>
  );
}

function ShowroomScene() {
  const products = [
    { name: 'Chifles', color: '#FF6B35', position: [-4, 0, 0] },
    { name: 'Papitas', color: '#FFD700', position: [-2, 0, 0] },
    { name: 'Bebidas', color: '#2196F3', position: [0, 0, 0] },
    { name: 'Licores', color: '#8B4513', position: [2, 0, 0] },
    { name: 'Alfajores', color: '#D2691E', position: [4, 0, 0] },
  ];

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      <ambientLight intensity={0.7} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, 10]} intensity={0.5} color="#FF6B35" />

      {products.map((product, i) => (
        <ProductCard3D key={i} {...product} />
      ))}

      <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={2} />
      <Environment preset="warehouse" />
    </>
  );
}

export default function ShowroomPage() {
  const { navigateTo } = useNavigation();
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const titleSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.gentle,
  });

  const products = [
    {
      id: 'chifles',
      name: 'Chifles Auténticos',
      description: 'Plátano verde frito tradicional',
      price: 'S/. 8.90',
      icon: '🍌',
    },
    {
      id: 'papitas',
      name: 'Papitas Premium',
      description: 'Papas nativas peruanas',
      price: 'S/. 6.50',
      icon: '🥔',
    },
    {
      id: 'bebidas',
      name: 'Bebidas Tropicales',
      description: 'Refrescos naturales',
      price: 'S/. 4.50',
      icon: '🥤',
    },
    {
      id: 'licores',
      name: 'Licores Premium',
      description: 'Selección destilada peruana',
      price: 'S/. 35.00',
      icon: '🥃',
    },
    {
      id: 'alfajores',
      name: 'Alfajores Caseros',
      description: 'Dulce de leche artesanal',
      price: 'S/. 3.50',
      icon: '🍪',
    },
    {
      id: 'marcianos',
      name: 'Marcianos Gelados',
      description: 'Postres refrescantes',
      price: 'S/. 2.50',
      icon: '🍧',
    },
  ];

  return (
    <div className="w-full h-full flex flex-col md:flex-row">
      {/* Canvas 3D */}
      <div className="flex-1 min-h-96 md:min-h-full">
        <Canvas>
          <ShowroomScene />
        </Canvas>
      </div>

      {/* Panel de productos */}
      <div className="flex-1 bg-black/50 backdrop-blur p-6 md:p-8 overflow-y-auto">
        <animated.div style={titleSpring}>
          <h1 className="text-4xl font-bold text-white mb-2">Showroom 3D</h1>
          <p className="text-gray-400 mb-8">
            Explora nuestra fábrica virtual e interactúa con los productos
          </p>
        </animated.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((product) => (
            <animated.div
              key={product.id}
              style={useSpring({
                from: { opacity: 0, transform: 'translateY(20px)' },
                to: { opacity: 1, transform: 'translateY(0px)' },
                config: config.gentle,
              })}
              onClick={() => setSelectedProduct(product.id)}
              className={`p-4 rounded-lg cursor-pointer transition-all ${
                selectedProduct === product.id
                  ? 'bg-orange-500/30 border border-orange-500'
                  : 'bg-white/10 border border-white/20 hover:bg-white/20'
              }`}
            >
              <div className="text-3xl mb-2">{product.icon}</div>
              <h3 className="font-bold text-white">{product.name}</h3>
              <p className="text-sm text-gray-400">{product.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-lg font-bold text-orange-400">{product.price}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateTo('/cart', 'scale');
                  }}
                  className="px-3 py-1 bg-orange-500 text-white rounded text-sm hover:bg-orange-600 transition"
                >
                  Agregar
                </button>
              </div>
            </animated.div>
          ))}
        </div>

        <button
          onClick={() => navigateTo('/products', 'slide')}
          className="mt-8 w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-lg hover:shadow-lg transition"
        >
          Ver Catálogo Completo →
        </button>
      </div>
    </div>
  );
}
