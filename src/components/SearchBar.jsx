import React from 'react'

const SearchBar = ({value, onChange, placeholder = 'Search product...'}) => {
  return (
    <input className='input' type="search" value={value}  onChange={(e) => onChange(e.target.value)}
    placeholder={placeholder}
    />
  )
}

export default SearchBar
