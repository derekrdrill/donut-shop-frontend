/**
 * Botón Flotante para Menú
 */

'use client';

import { useNavigation } from '@/context/NavigationContext';
import { useSpring, animated, config } from '@react-spring/web';

export default function FloatingMenuButton() {
  const { state, toggleMenu } = useNavigation();

  const buttonSpring = useSpring({
    transform: state.isMenuOpen ? 'rotate(45deg) scale(1.1)' : 'rotate(0deg) scale(1)',
    config: config.wobbly,
  });

  const pulseSpring = useSpring({
    from: { boxShadow: '0 0 0 0 rgba(255, 107, 53, 0.7)' },
    to: { boxShadow: '0 0 0 20px rgba(255, 107, 53, 0)' },
    loop: true,
    config: { duration: 1500 },
  });

  return (
    <animated.button
      onClick={toggleMenu}
      style={{
        ...buttonSpring,
        ...(!state.isMenuOpen && pulseSpring),
      }}
      className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center text-2xl"
    >
      ☰
    </animated.button>
  );
}
