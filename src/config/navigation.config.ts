/**
 * Configuración de navegación para Pardos Alimentos
 */

import { NavItem } from '@/types/navigation';

export const NAVIGATION_CONFIG: NavItem[] = [
  // CATEGORÍA PRINCIPAL
  {
    id: 'home',
    label: 'Inicio',
    path: '/',
    icon: '🏠',
    color: '#FF6B35',
    description: 'Experiencia inmersiva',
    position: [0, 0, 0],
    category: 'main',
    transitionType: '3d-flip',
  },

  // CATEGORÍA TIENDA
  {
    id: 'showroom',
    label: 'Showroom 3D',
    path: '/showroom',
    icon: '🏭',
    color: '#F7931E',
    description: 'Fábrica virtual interactiva',
    position: [-3, 1, 0],
    category: 'shop',
    transitionType: 'morphing',
  },
  {
    id: 'products',
    label: 'Catálogo',
    path: '/products',
    icon: '🛍️',
    color: '#FFD700',
    description: 'Todos nuestros productos',
    position: [-1.5, 2, 0],
    category: 'shop',
    transitionType: 'slide',
  },
  {
    id: 'custom-combo',
    label: 'Combo Personalizado',
    path: '/custom-combo',
    icon: '🎨',
    color: '#FF1744',
    description: 'Crea tu combo ideal',
    position: [1.5, 2, 0],
    category: 'shop',
    transitionType: 'scale',
  },
  {
    id: 'promotions',
    label: 'Promociones',
    path: '/promotions',
    icon: '🎉',
    color: '#FF5722',
    description: 'Ofertas especiales',
    position: [3, 1, 0],
    category: 'shop',
    transitionType: 'fade',
  },

  // CATEGORÍA INFO
  {
    id: 'distributor-map',
    label: 'Distribuidor',
    path: '/distributor-map',
    icon: '🗺️',
    color: '#2196F3',
    description: 'Puntos de venta',
    position: [-3, -1, 0],
    category: 'info',
    transitionType: 'slide',
  },
  {
    id: 'about-us',
    label: 'Nosotros',
    path: '/about-us',
    icon: '📖',
    color: '#004E89',
    description: 'Historia y valores',
    position: [-1.5, -2, 0],
    category: 'info',
    transitionType: 'fade',
  },
  {
    id: 'sustainability',
    label: 'Sostenibilidad',
    path: '/sustainability',
    icon: '🌿',
    color: '#4CAF50',
    description: 'Compromiso ambiental',
    position: [1.5, -2, 0],
    category: 'info',
    transitionType: 'morphing',
  },
  {
    id: 'contact',
    label: 'Contacto',
    path: '/contact',
    icon: '📧',
    color: '#FF6B35',
    description: 'Ponte en contacto',
    position: [3, -1, 0],
    category: 'info',
    transitionType: 'scale',
  },

  // CATEGORÍA CUENTA
  {
    id: 'cart',
    label: 'Carrito',
    path: '/cart',
    icon: '🛒',
    color: '#FF1744',
    description: 'Tu carrito de compras',
    position: [0, -3, 0],
    category: 'account',
    transitionType: 'scale',
  },
  {
    id: 'account',
    label: 'Mi Cuenta',
    path: '/account',
    icon: '👤',
    color: '#673AB7',
    description: 'Perfil y configuración',
    position: [2, -3, 0],
    category: 'account',
    transitionType: 'fade',
  },
];

export const MENU_TRANSITIONS = {
  '3d-orbit': {
    duration: 0.8,
    easing: 'cubic-bezier(0.23, 1, 0.320, 1)',
  },
  '3d-grid': {
    duration: 0.6,
    easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
  floating: {
    duration: 0.5,
    easing: 'ease-out',
  },
} as const;

export const BREADCRUMB_CONFIG = {
  showHome: true,
  separator: '→',
  maxItems: 5,
} as const;
