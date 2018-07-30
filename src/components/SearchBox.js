import React from 'react';

const SearchBox = ({ searchChange, searchfield }) => {
  console.log('SearchBox');
  return (
    <div className="pa2">
      <input
        aria-label='Search Robots'
        className="pa3 ba b--green bg blue"
        type="search"
        placeholder="search robot homies"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
