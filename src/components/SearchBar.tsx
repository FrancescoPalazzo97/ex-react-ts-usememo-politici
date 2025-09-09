import { useGlobalContext } from '../hooks';
import ClearButton from './ClearButton';

interface SearchBarProps {
  placeholder?: string;
}

export default function SearchBar({ placeholder = "Cerca politico..." }: SearchBarProps) {
  const { search, setSearch } = useGlobalContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const clearSearch = () => {
    setSearch('')
  };

  return (
    <div className="w-full max-w-md mx-auto mb-4">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <i className="fa-solid fa-magnifying-glass text-gray-400"></i>
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm text-gray-900"
          placeholder={placeholder}
          value={search}
          onChange={handleInputChange}
        />
        {search && <ClearButton clear={clearSearch} />}
      </div>
    </div>
  );
}