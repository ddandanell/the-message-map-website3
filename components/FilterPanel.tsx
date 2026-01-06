'use client';

import { FilterType } from '@/types';

interface FilterPanelProps {
  filters: FilterType;
  onFilterChange: (filters: FilterType) => void;
  availableAreas: string[];
  availableStyles: string[];
  availableMoods: string[];
  availableGoodFor: string[];
}

export default function FilterPanel({
  filters,
  onFilterChange,
  availableAreas,
  availableStyles,
  availableMoods,
  availableGoodFor,
}: FilterPanelProps) {
  const toggleFilter = (category: keyof FilterType, value: string) => {
    const current = filters[category];
    if (Array.isArray(current)) {
      const newValues = (current as string[]).includes(value)
        ? (current as string[]).filter(v => v !== value)
        : [...(current as string[]), value];
      onFilterChange({ ...filters, [category]: newValues as any });
    }
  };

  const formatIDR = (value: number) => {
    return `${(value / 1000).toFixed(0)}k`;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
      <div>
        <h3 className="font-semibold text-lg mb-3">Filters</h3>
      </div>

      {/* Open Now */}
      <div>
        <label className="flex items-center space-x-2 cursor-pointer">
          <input
            type="checkbox"
            checked={filters.openNow}
            onChange={(e) => onFilterChange({ ...filters, openNow: e.target.checked })}
            className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
          />
          <span className="text-sm font-medium">Open Now</span>
        </label>
      </div>

      {/* Area */}
      <div>
        <h4 className="font-medium mb-2 text-sm">Area</h4>
        <div className="space-y-2">
          {availableAreas.map(area => (
            <label key={area} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.areas.includes(area)}
                onChange={() => toggleFilter('areas', area)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-sm">{area}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Style */}
      <div>
        <h4 className="font-medium mb-2 text-sm">Massage Style</h4>
        <div className="space-y-2">
          {availableStyles.map(style => (
            <label key={style} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.styles.includes(style)}
                onChange={() => toggleFilter('styles', style)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-sm">{style}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Budget */}
      <div>
        <h4 className="font-medium mb-2 text-sm">Budget (IDR)</h4>
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-gray-600">
            <span>{formatIDR(filters.budgetRange[0])}</span>
            <span>{formatIDR(filters.budgetRange[1])}</span>
          </div>
          <input
            type="range"
            min="100000"
            max="2000000"
            step="50000"
            value={filters.budgetRange[1]}
            onChange={(e) => onFilterChange({
              ...filters,
              budgetRange: [filters.budgetRange[0], parseInt(e.target.value)]
            })}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>

      {/* Good For */}
      <div>
        <h4 className="font-medium mb-2 text-sm">Good For</h4>
        <div className="space-y-2">
          {availableGoodFor.map(item => (
            <label key={item} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.goodFor.includes(item)}
                onChange={() => toggleFilter('goodFor', item)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-sm capitalize">{item}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Mood */}
      <div>
        <h4 className="font-medium mb-2 text-sm">Mood</h4>
        <div className="space-y-2">
          {availableMoods.map(mood => (
            <label key={mood} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.moods.includes(mood)}
                onChange={() => toggleFilter('moods', mood)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-sm capitalize">{mood}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear Filters */}
      <button
        onClick={() => onFilterChange({
          areas: [],
          styles: [],
          budgetRange: [100000, 2000000],
          moods: [],
          goodFor: [],
          openNow: false,
        })}
        className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors"
      >
        Clear All Filters
      </button>
    </div>
  );
}
