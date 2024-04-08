import { useState } from 'react';

const AliasSearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search..."
        className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-blue-500"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors duration-300"
      >
        Search
      </button>
    </form>
  );
};

export default AliasSearchBar;