import React, { useState, useEffect } from 'react';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
/* import { cats } from "../cats"; */
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry"
import "./App.css";


function App() {
  const [cats, setCats] = useState([])
  const [searchfield, setSearchfield] = useState("")

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => setCats(users));
    console.log(count)
  }, [count])

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
        <h1 className="f1">CatFindr</h1>
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