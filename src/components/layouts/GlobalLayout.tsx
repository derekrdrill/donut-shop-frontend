/**
 * Layout Global con Transiciones de Página
 */

'use client';

import { ReactNode, useEffect, useState } from 'react';
import { useNavigation } from '@/context/NavigationContext';
import { useSpring, animated, config } from '@react-spring/web';
import Menu3D from '@/components/navigation/Menu3D';
import NavigationHeader from '@/components/navigation/NavigationHeader';
import PageTransitionWrapper from '@/components/navigation/PageTransitionWrapper';
import FloatingMenuButton from '@/components/navigation/FloatingMenuButton';

interface GlobalLayoutProps {
  children: ReactNode;
}

export default function GlobalLayout({ children }: GlobalLayoutProps) {
  const { state } = useNavigation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const pageSpring = useSpring({
    opacity: state.isTransitioning ? 0 : 1,
    transform: state.isTransitioning ? 'scale(0.95) rotateX(10deg)' : 'scale(1) rotateX(0deg)',
    config: config.gentle,
  });

  if (!mounted) return null;

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Fondo animado */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml')] opacity-5" />
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-4000" />
      </div>

      {/* Header */}
      <NavigationHeader />

      {/* Contenido principal con transiciones */}
      <animated.main
        style={{
          ...pageSpring,
          perspective: '1000px',
        }}
        className="relative z-10 w-full h-full pt-20 overflow-auto"
      >
        <PageTransitionWrapper transitionType={state.transitionType}>
          <div className="min-h-screen w-full">{children}</div>
        </PageTransitionWrapper>
      </animated.main>

      {/* Botón flotante para menú */}
      <FloatingMenuButton />

      {/* Menú 3D */}
      <Menu3D />

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-black/40 backdrop-blur-md border-t border-white/10 z-30">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center text-sm text-gray-400">
          <div>© 2024 Pardos Alimentos E.I.R.K.</div>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-white transition">Privacidad</a>
            <a href="/terms" className="hover:text-white transition">Términos</a>
            <a href="/sitemap" className="hover:text-white transition">Mapa del sitio</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
