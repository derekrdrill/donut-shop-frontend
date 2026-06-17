/**
 * Wrapper de Transiciones de Página
 */

'use client';

import { useSpring, animated, config } from '@react-spring/web';
import { ReactNode } from 'react';
import { PageTransition } from '@/types/navigation';

const transitionConfigs: Record<PageTransition, any> = {
  fade: {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.gentle,
  },
  slide: {
    from: { opacity: 0, transform: 'translateX(100px)' },
    enter: { opacity: 1, transform: 'translateX(0px)' },
    leave: { opacity: 0, transform: 'translateX(-100px)' },
    config: config.gentle,
  },
  scale: {
    from: { opacity: 0, transform: 'scale(0.8)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0.8)' },
    config: config.wobbly,
  },
  '3d-flip': {
    from: { opacity: 0, transform: 'rotateY(-90deg)' },
    enter: { opacity: 1, transform: 'rotateY(0deg)' },
    leave: { opacity: 0, transform: 'rotateY(90deg)' },
    config: config.gentle,
  },
  morphing: {
    from: { opacity: 0, transform: 'scale(0.5) rotateX(45deg)' },
    enter: { opacity: 1, transform: 'scale(1) rotateX(0deg)' },
    leave: { opacity: 0, transform: 'scale(0.5) rotateX(-45deg)' },
    config: config.molasses,
  },
};

interface PageTransitionWrapperProps {
  children: ReactNode;
  transitionType: PageTransition;
}

export default function PageTransitionWrapper({
  children,
  transitionType,
}: PageTransitionWrapperProps) {
  const transitionConfig = transitionConfigs[transitionType] || transitionConfigs.fade;

  const spring = useSpring({
    from: transitionConfig.from,
    to: transitionConfig.enter,
    config: transitionConfig.config,
  });

  return (
    <animated.div
      style={{
        ...spring,
        perspective: '1000px',
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </animated.div>
  );
}
