/**
 * Componente Breadcrumb
 */

'use client';

import { useNavigation } from '@/context/NavigationContext';
import { NAVIGATION_CONFIG } from '@/config/navigation.config';
import Link from 'next/link';

export default function Breadcrumb() {
  const { state, navigateTo } = useNavigation();

  // Construir breadcrumbs basado en la ruta actual
  const getBreadcrumbs = () => {
    const breadcrumbs = [
      { label: '🏠 Inicio', path: '/' },
    ];

    if (state.currentPage !== '/') {
      const currentItem = NAVIGATION_CONFIG.find(item => item.path === state.currentPage);
      if (currentItem) {
        breadcrumbs.push({
          label: currentItem.label,
          path: currentItem.path,
        });
      }
    }

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <nav className="flex items-center gap-2 text-sm">
      {breadcrumbs.map((breadcrumb, index) => (
        <div key={breadcrumb.path} className="flex items-center gap-2">
          {index > 0 && <span className="text-gray-500">→</span>}
          <button
            onClick={() => navigateTo(breadcrumb.path, 'fade')}
            className="px-2 py-1 rounded hover:bg-white/10 text-gray-300 hover:text-white transition"
          >
            {breadcrumb.label}
          </button>
        </div>
      ))}
    </nav>
  );
}
