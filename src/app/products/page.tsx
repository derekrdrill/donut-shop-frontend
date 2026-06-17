/**
 * Página de Productos
 */

'use client';

import { useSpring, animated, config } from '@react-spring/web';
import { useNavigation } from '@/context/NavigationContext';
import { useState } from 'react';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  icon: string;
  description: string;
  inStock: boolean;
  discount?: number;
}

const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Chifles Clásicos',
    category: 'Snacks',
    price: 8.9,
    icon: '🍌',
    description: 'Plátano verde frito crujiente',
    inStock: true,
    discount: 10,
  },
  {
    id: '2',
    name: 'Papitas Nativas',
    category: 'Snacks',
    price: 6.5,
    icon: '🥔',
    description: 'Papas amarillas peruanas',
    inStock: true,
  },
  {
    id: '3',
    name: 'Chicha Morada',
    category: 'Bebidas',
    price: 4.5,
    icon: '🥤',
    description: 'Bebida refrescante tradicional',
    inStock: true,
    discount: 5,
  },
  {
    id: '4',
    name: 'Pisco Peruano',
    category: 'Licores',
    price: 45.0,
    icon: '🥃',
    description: 'Destilado Premium 750ml',
    inStock: true,
  },
  {
    id: '5',
    name: 'Alfajor Manjar',
    category: 'Dulces',
    price: 3.5,
    icon: '🍪',
    description: 'Dulce de leche casero',
    inStock: true,
    discount: 15,
  },
  {
    id: '6',
    name: 'Marciano Tropical',
    category: 'Postres',
    price: 2.5,
    icon: '🍧',
    description: 'Hielo frutal refrescante',
    inStock: false,
  },
  {
    id: '7',
    name: 'Mix Chifles',
    category: 'Combo',
    price: 24.9,
    icon: '🎉',
    description: 'Variedad de snacks surtidos',
    inStock: true,
  },
  {
    id: '8',
    name: 'Set Premium Licores',
    category: 'Combo',
    price: 89.9,
    icon: '🏆',
    description: 'Selección exclusiva 3 botellas',
    inStock: true,
    discount: 20,
  },
];

export default function ProductsPage() {
  const { navigateTo } = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['Todos', ...new Set(PRODUCTS.map(p => p.category))];

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const titleSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: config.gentle,
  });

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <animated.div style={titleSpring} className="mb-12">
        <h1 className="text-5xl font-bold text-white mb-4">
          Catálogo de Productos
        </h1>
        <p className="text-gray-400 text-lg">
          Descubre todos nuestros productos auténticos peruanos
        </p>
      </animated.div>

      {/* Búsqueda y filtros */}
      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition"
        />

        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                selectedCategory === category
                  ? 'bg-orange-500 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de productos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {filteredProducts.map((product, index) => (
          <animated.div
            key={product.id}
            style={useSpring({
              from: { opacity: 0, transform: 'scale(0.9)' },
              to: { opacity: 1, transform: 'scale(1)' },
              delay: index * 50,
              config: config.gentle,
            })}
            className={`relative group rounded-xl overflow-hidden backdrop-blur border transition-all ${
              product.inStock
                ? 'bg-white/10 border-white/20 hover:border-orange-500/50 hover:bg-white/15 cursor-pointer'
                : 'bg-white/5 border-white/10 opacity-60'
            }`}
          >
            {/* Badge de descuento */}
            {product.discount && (
              <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                -{product.discount}%
              </div>
            )}

            {/* Badge de stock */}
            {!product.inStock && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
                <span className="text-white font-bold">Agotado</span>
              </div>
            )}

            {/* Contenido */}
            <div className="p-6 flex flex-col h-full">
              <div className="text-5xl mb-4">{product.icon}</div>

              <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>

              <p className="text-sm text-gray-400 mb-4 flex-1">{product.description}</p>

              <div className="text-xs text-orange-400 mb-2">{product.category}</div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-white">
                    S/. {(product.price * (1 - (product.discount || 0) / 100)).toFixed(2)}
                  </span>
                  {product.discount && (
                    <span className="ml-2 text-sm text-gray-500 line-through">
                      S/. {product.price.toFixed(2)}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => {
                    if (product.inStock) {
                      navigateTo('/cart', 'scale');
                    }
                  }}
                  disabled={!product.inStock}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    product.inStock
                      ? 'bg-orange-500 text-white hover:bg-orange-600 hover:shadow-lg'
                      : 'bg-gray-500 text-gray-300 cursor-not-allowed'
                  }`}
                >
                  🛒
                </button>
              </div>
            </div>

            {/* Efecto hover */}
            {product.inStock && (
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            )}
          </animated.div>
        ))}
      </div>

      {/* Botón de combo personalizado */}
      <animated.div
        style={useSpring({
          from: { opacity: 0, transform: 'translateY(30px)' },
          to: { opacity: 1, transform: 'translateY(0px)' },
          delay: 300,
          config: config.gentle,
        })}
        className="text-center py-12 border-t border-white/10"
      >
        <h2 className="text-2xl font-bold text-white mb-4">¿Buscas algo personalizado?</h2>
        <button
          onClick={() => navigateTo('/custom-combo', 'morphing')}
          className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105"
        >
          🎨 Crear Combo Personalizado
        </button>
      </animated.div>
    </div>
  );
}
