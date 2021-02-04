import React from 'react'

export default function SearchBox({ searchChange }) {
  return (
    <div className="mv4">
      <input
        className="tc pa3 ba br4 f4 b--black-025 lightest-blue bg-navy"
        type="search"
        placeholder="Find cats"
        onChange={searchChange} />
    </div>
  );
}
