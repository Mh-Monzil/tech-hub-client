import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Search",
  onSearch,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(inputValue);
    }
  };

  return (
    <div className="flex items-center w-full h-14 bg-white rounded-md border px-2 focus-within:outline focus-within:outline-1 focus-within:outline-gray-300">
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="flex-grow h-full px-4 bg-transparent outline-none"
      />
      <button
        type="button"
        className="p-3 text-gray-400 hover:text-gray-500 focus:outline-none"
        onClick={handleSearch}
      >
        <FiSearch size={24} />
      </button>
    </div>
  );
};

export default SearchBar;
