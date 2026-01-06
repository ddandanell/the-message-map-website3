'use client';

import { useState, useMemo } from 'react';
import { FilterType, Spa } from '@/types';
import { sampleSpas } from '@/data/spas';
import FilterPanel from '@/components/FilterPanel';
import SpaCard from '@/components/SpaCard';
import SimpleMap from '@/components/SimpleMap';

export default function Home() {
  const [filters, setFilters] = useState<FilterType>({
    areas: [],
    styles: [],
    budgetRange: [100000, 2000000],
    moods: [],
    goodFor: [],
    openNow: false,
  });

  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');

  // Extract unique values for filters
  const availableAreas = useMemo(() => 
    Array.from(new Set(sampleSpas.map(spa => spa.location.area))).sort(),
    []
  );

  const availableStyles = useMemo(() => 
    Array.from(new Set(sampleSpas.flatMap(spa => spa.styles))).sort(),
    []
  );

  const availableMoods = useMemo(() => 
    Array.from(new Set(sampleSpas.flatMap(spa => spa.mood))).sort(),
    []
  );

  const availableGoodFor = useMemo(() => 
    Array.from(new Set(sampleSpas.flatMap(spa => spa.goodFor))).sort(),
    []
  );

  // Filter spas based on current filters
  const filteredSpas = useMemo(() => {
    return sampleSpas.filter(spa => {
      // Filter by open now
      if (filters.openNow && !spa.isOpenNow) return false;

      // Filter by areas
      if (filters.areas.length > 0 && !filters.areas.includes(spa.location.area)) return false;

      // Filter by styles
      if (filters.styles.length > 0 && !spa.styles.some(style => filters.styles.includes(style))) return false;

      // Filter by budget
      if (spa.priceFrom > filters.budgetRange[1]) return false;

      // Filter by moods
      if (filters.moods.length > 0 && !spa.mood.some(mood => filters.moods.includes(mood))) return false;

      // Filter by good for
      if (filters.goodFor.length > 0 && !spa.goodFor.some(item => filters.goodFor.includes(item))) return false;

      return true;
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">The Massage Map</h1>
              <p className="text-sm text-gray-600 mt-1">
                Your smart shortcut to the best massages in Bali
              </p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Grid View
              </button>
              <button
                onClick={() => setViewMode('map')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  viewMode === 'map'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Map View
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-80 flex-shrink-0">
            <div className="sticky top-24">
              <FilterPanel
                filters={filters}
                onFilterChange={setFilters}
                availableAreas={availableAreas}
                availableStyles={availableStyles}
                availableMoods={availableMoods}
                availableGoodFor={availableGoodFor}
              />
            </div>
          </aside>

          {/* Results */}
          <div className="flex-1">
            {/* Results Count */}
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">
                {filteredSpas.length} {filteredSpas.length === 1 ? 'Spa' : 'Spas'} Found
              </h2>
              {filteredSpas.filter(s => s.isOpenNow).length > 0 && (
                <span className="text-sm text-green-700 font-medium">
                  {filteredSpas.filter(s => s.isOpenNow).length} open now
                </span>
              )}
            </div>

            {/* Content based on view mode */}
            {viewMode === 'grid' ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredSpas.length > 0 ? (
                  filteredSpas.map(spa => (
                    <SpaCard key={spa.id} spa={spa} />
                  ))
                ) : (
                  <div className="col-span-2 text-center py-12">
                    <p className="text-gray-600">No spas match your current filters.</p>
                    <button
                      onClick={() => setFilters({
                        areas: [],
                        styles: [],
                        budgetRange: [100000, 2000000],
                        moods: [],
                        goodFor: [],
                        openNow: false,
                      })}
                      className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Clear all filters
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <SimpleMap spas={filteredSpas} />
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600 text-sm">
            <p>The Massage Map - Find the best massages in Bali</p>
            <p className="mt-2">Organized by area, style, budget, and mood</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
