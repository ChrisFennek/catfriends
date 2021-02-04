import React, { useState } from 'react';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import { cats } from "../cats";
import ErrorBoundry from "../components/ErrorBoundry"

import "./App.css";


function App() {
  const [searchfield, setSearchfield] = useState("")

  const onSearchChange = (event) => {
    setSearchfield(event.target.value);
  }

  const filteredCats = cats.filter(cat => {
    return cat.name.toLowerCase().includes(searchfield.toLowerCase());

  })
  return !cats.length ?
    <h1 className="tc f1">Lädt</h1> :
    (
      <div className="tc">
        <SearchBox searchChange={onSearchChange} />
        <ErrorBoundry>
          {!filteredCats.length ? <h1 className="white ma5 f1">No Kitty found :(</h1> : <CardList cats={filteredCats} />}
        </ErrorBoundry>
      </div>
    );
}


export default App;