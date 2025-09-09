import { memo } from 'react';
import { useGlobalContext } from '../hooks';

export const PositionSelect = memo(() => {
    const { uniquePositions, selectedPosition, setSelectedPosition } = useGlobalContext();

    return (
        <div className="w-full max-w-md mx-auto mb-8">
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fa-solid fa-filter text-gray-400"></i>
                </div>
                <select
                    value={selectedPosition}
                    onChange={(e) => setSelectedPosition(e.target.value)}
                    className="block w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg leading-5 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm text-gray-900 appearance-none cursor-pointer"
                >
                    <option value="">Tutte le posizioni</option>
                    {uniquePositions.map((position) => (
                        <option key={position} value={position}>
                            {position}
                        </option>
                    ))}
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <i className="fa-solid fa-chevron-down text-gray-400"></i>
                </div>
            </div>
        </div>
    );
});

PositionSelect.displayName = 'PositionSelect';