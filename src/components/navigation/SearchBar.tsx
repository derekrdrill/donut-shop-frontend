/**
 * Barra de Búsqueda
 */

'use client';

import { useState } from 'react';
import { useNavigation } from '@/context/NavigationContext';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const { navigateTo } = useNavigation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigateTo(`/search?q=${encodeURIComponent(searchTerm)}`, 'slide');
      setSearchTerm('');
    }
  };

  return (
    <form onSubmit={handleSearch} className="w-full">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar productos..."
          className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-orange-500 hover:text-orange-400"
        >
          🔍
        </button>
      </div>
    </form>
  );
}
