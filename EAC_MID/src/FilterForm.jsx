import React from 'react';

const FilterForm = ({ filters, onFilterChange, onResetFilters }) => {
  return (
    <div>
      <label>Name: </label>
      <input type="text" name="name" value={filters.name} onChange={onFilterChange} />
      <label>Age: </label>
      <input type="text" name="age" value={filters.age} onChange={onFilterChange} />
      <label>City: </label>
      <select name="city" value={filters.city} onChange={onFilterChange}>
        <option value="">All</option>
        
      </select>
      <label>Occupation: </label>
      <select name="occupation" value={filters.occupation} onChange={onFilterChange}>
        <option value="">All</option>
        </select>
      <button onClick={onResetFilters}>Reset Filters</button>
    </div>
  );
};

export default FilterForm;