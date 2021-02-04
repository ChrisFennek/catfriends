import React from 'react'
import "./SearchBox.css"

export default function SearchBox({ searchChange }) {
  return (
    <div className="mv4">
      <input
        className="tc pa3 ba br4 f4 b--black-025 box-css shadow-5"
        type="search"
        placeholder="Find cats"
        onChange={searchChange} />
    </div>
  );
}
