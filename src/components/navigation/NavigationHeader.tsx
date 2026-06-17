/**
 * Header de Navegación
 */

'use client';

import { useNavigation } from '@/context/NavigationContext';
import { useSpring, animated } from '@react-spring/web';
import Breadcrumb from './Breadcrumb';
import SearchBar from './SearchBar';

export default function NavigationHeader() {
  const { state, goBack } = useNavigation();

  const headerSpring = useSpring({
    opacity: 1,
    transform: 'translateY(0px)',
    config: { duration: 300 },
  });

  return (
    <animated.header
      style={headerSpring}
      className="fixed top-0 left-0 right-0 z-20 backdrop-blur-md bg-black/30 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-white">Pardos</h1>
              <p className="text-xs text-orange-400">Alimentos E.I.R.K.</p>
            </div>
          </div>

          {/* Breadcrumb */}
          <div className="hidden md:flex flex-1">
            <Breadcrumb />
          </div>

          {/* Search */}
          <div className="hidden lg:flex flex-1 max-w-xs">
            <SearchBar />
          </div>

          {/* Navegación rápida */}
          <nav className="flex items-center gap-2">
            {state.previousPage !== '/' && (
              <button
                onClick={goBack}
                className="px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition"
              >
                ← Atrás
              </button>
            )}
          </nav>
        </div>
      </div>
    </animated.header>
  );
}
