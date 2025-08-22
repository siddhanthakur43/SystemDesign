import React, { useState } from 'react';

const LIST = [
  'Apple',
  'Banana',
  'Orange',
  'Grapes',
  'Mango',
  'Blueberry',
  'Pineapple',
  'Strawberry',
];

const SearchInput = () => {
  const [query, setQuery] = useState('');
  const [filteredList, setFilteredList] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    const items = LIST.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredList(value ? items : []);
  };
  return (
    <div>
      <h1>Search</h1>
      <div>
        <input type="text" onChange={(e) => handleChange(e)} value={query} />
      </div>
      <ul>
        {filteredList.map((item) => (
          <li key={item}> {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchInput;
