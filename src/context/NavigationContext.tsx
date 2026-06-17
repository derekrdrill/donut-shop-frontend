/**
 * Context para navegación global
 */

'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { NavigationState, PageTransition } from '@/types/navigation';

interface NavigationContextType {
  state: NavigationState;
  navigateTo: (page: string, transition?: PageTransition) => void;
  toggleMenu: () => void;
  setHoveredItem: (itemId?: string) => void;
  goBack: () => void;
  goForward: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<NavigationState>({
    currentPage: '/',
    previousPage: '/',
    isTransitioning: false,
    transitionType: 'fade',
    isMenuOpen: false,
  });

  const navigateTo = useCallback((page: string, transition: PageTransition = 'fade') => {
    setState(prev => ({
      ...prev,
      previousPage: prev.currentPage,
      currentPage: page,
      transitionType: transition,
      isTransitioning: true,
    }));

    // Simular tiempo de transición
    setTimeout(() => {
      setState(prev => ({ ...prev, isTransitioning: false }));
    }, 600);
  }, []);

  const toggleMenu = useCallback(() => {
    setState(prev => ({ ...prev, isMenuOpen: !prev.isMenuOpen }));
  }, []);

  const setHoveredItem = useCallback((itemId?: string) => {
    setState(prev => ({ ...prev, hoveredItem: itemId }));
  }, []);

  const goBack = useCallback(() => {
    navigateTo(state.previousPage, 'slide');
  }, [state.previousPage, navigateTo]);

  const goForward = useCallback(() => {
    // Implementar lógica de forward si es necesario
  }, []);

  return (
    <NavigationContext.Provider value={{ state, navigateTo, toggleMenu, setHoveredItem, goBack, goForward }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation debe usarse dentro de NavigationProvider');
  }
  return context;
}
