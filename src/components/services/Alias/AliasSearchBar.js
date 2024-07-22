import { useState } from 'react';
import { Button, ButtonGroup,BeatLoader } from '@chakra-ui/react'
const AliasSearchBar = ({ onSearch, toast, isSearching, setIsSearching }) => {
  const [searchTerm, setSearchTerm] = useState('');
 
  const handleSearch = async (e) => {
    e.preventDefault();
    setIsSearching(true);
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
      <Button
        isLoading={isSearching}
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition-colors duration-300"
        colorScheme='blue'
        // spinner={<BeatLoader size={8} color='white' />}
      >
        Search
      </Button>
    </form>
  );
};

export default AliasSearchBar;