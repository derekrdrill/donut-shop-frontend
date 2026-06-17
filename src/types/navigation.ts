/**
 * Sistema de tipos para navegación avanzada
 */

export type PageTransition = 'fade' | 'slide' | 'scale' | '3d-flip' | 'morphing';

export interface NavItem {
  id: string;
  label: string;
  path: string;
  icon: string;
  color: string;
  description: string;
  position: [number, number, number]; // Posición 3D en el menú
  category: 'main' | 'shop' | 'info' | 'account';
  transitionType: PageTransition;
  metadata?: Record<string, any>;
}

export interface NavigationState {
  currentPage: string;
  previousPage: string;
  isTransitioning: boolean;
  transitionType: PageTransition;
  isMenuOpen: boolean;
  hoveredItem?: string;
}

export interface BreadcrumbItem {
  label: string;
  path: string;
  icon?: string;
}

export interface MenuConfig {
  layout: '3d-orbit' | '3d-grid' | 'floating' | 'sidebar' | 'top-nav';
  animationSpeed: number;
  enableParticles: boolean;
  enableSound: boolean;
  theme: 'dark' | 'light' | 'auto';
}
