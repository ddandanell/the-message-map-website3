'use client';

import { Spa } from '@/types';

interface SimpleMapProps {
  spas: Spa[];
  onSpaClick?: (spa: Spa) => void;
}

export default function SimpleMap({ spas, onSpaClick }: SimpleMapProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 h-full">
      <h3 className="text-lg font-bold mb-4">Bali Spa Locations</h3>
      
      {/* Simple visual map representation */}
      <div className="relative bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-8 h-[500px] border-2 border-gray-200">
        <div className="text-center text-sm text-gray-500 mb-4">
          Interactive Map View
        </div>
        
        {/* Area labels */}
        <div className="absolute top-8 left-8 bg-white px-3 py-1 rounded shadow-sm text-xs font-semibold text-gray-700">
          Canggu
        </div>
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded shadow-sm text-xs font-semibold text-gray-700">
          Seminyak
        </div>
        <div className="absolute top-1/2 right-8 transform -translate-y-1/2 bg-white px-3 py-1 rounded shadow-sm text-xs font-semibold text-gray-700">
          Ubud
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded shadow-sm text-xs font-semibold text-gray-700">
          Nusa Dua
        </div>

        {/* Spa markers */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid gap-4">
            {spas.slice(0, 8).map((spa, index) => (
              <button
                key={spa.id}
                onClick={() => onSpaClick?.(spa)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg shadow-lg text-xs font-medium transition-all hover:scale-110"
                style={{
                  gridColumn: (index % 3) + 1,
                  gridRow: Math.floor(index / 3) + 1,
                }}
              >
                📍 {spa.name}
              </button>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded shadow-md">
          <div className="flex items-center space-x-4 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              <span>Available Spas ({spas.length})</span>
            </div>
          </div>
        </div>
      </div>

      {/* Area summary */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        {['Ubud', 'Seminyak', 'Canggu', 'Nusa Dua'].map((area) => {
          const count = spas.filter(spa => spa.location.area === area).length;
          return (
            <div key={area} className="bg-gray-50 p-3 rounded-lg">
              <div className="text-sm font-semibold text-gray-900">{area}</div>
              <div className="text-xs text-gray-600">{count} spa{count !== 1 ? 's' : ''}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
