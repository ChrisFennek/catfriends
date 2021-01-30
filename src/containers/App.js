import React, {
  Component
} from 'react';
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import {
  cats
} from "../cats";
import Scroll from "../components/Scroll";
import "./App.css";

class App extends Component {

  this.state = {
    cats: [],
    searchfield: ""

  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({
        cats: cats
      }));
  }

  onSearchChange = (event) => {
    this.setState({
      searchfield: event.target.value
    });
  }

  render() {
    const filteredCats = this.state.cats.filter(cat => {
      return cat.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return ( <
      div className = "tc" >
      <
      h1 className = "f1" > CatFriends < /h1> <
      SearchBox searchChange = {
        this.onSearchChange
      }
      /> <
      Scroll >
      <
      CardList cats = {
        filteredCats
      }
      /> <
      /Scroll> <
      /div>
    );
  }
}

export default App;