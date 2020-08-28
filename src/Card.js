import React from 'react';

const Card = (props) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/set_set4/${props.id}?size=200x200`} alt="kitties" />
      <div>
        <h2>{props.name}</h2>
        <p>Age: {props.age}</p>
      </div>
    </div>
  );
}

export default Card;