import React from 'react';
import Card from './Card';


const CardList = ({ cats }) => {
  return (
    <div>
      {
        cats.map((user, i) => {
          return (
            <Card
              key={i}
              id={cats[i].id}
              name={cats[i].name}
              age={cats[i].age}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;