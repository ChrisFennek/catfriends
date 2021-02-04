import React, { useState } from 'react';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import { cats } from "../cats";
import Scroll from "../components/Scroll";
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
        <Scroll>
          <ErrorBoundry>
            <CardList cats={filteredCats} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
}


export default App;