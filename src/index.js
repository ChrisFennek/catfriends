import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { cats } from "./cats"

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Card id={cats[0].id} name={cats[0].name} age={cats[0].age} />
      <Card id={cats[1].id} name={cats[1].name} age={cats[1].age} />
      <Card id={cats[2].id} name={cats[2].name} age={cats[2].age} />
      <Card id={cats[3].id} name={cats[3].name} age={cats[3].age} />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
