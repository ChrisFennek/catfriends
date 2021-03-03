import React from 'react';
import useSound from "use-sound";
import meowSfx from "../sounds/meow.mp3";
import "./Card.css"

const Card = ({ name, age, id, food }) => {

  const soundUrl = meowSfx;
  const [playbackRate, setPlaybackRate] = React.useState(0.70);
  const [count, setCount] = React.useState(0);

  const [play] = useSound(soundUrl, {
    playbackRate,
    volume: 0.5,
  });

  const handleClick = () => {
    setPlaybackRate(playbackRate + 0.05);
    setCount(count + 1);
    play();
  };

  return count === 15 ? <div onClick={handleClick} className="tc bg-red white dib br4 pa4 ma3 grow shadow-5 pointer">
    <img src={`https://robohash.org/set_set4/${id}?size=200x200`} alt="kitties" />
    <div>
      <h1 className="white disable-select">MIAU</h1>
      <p className="white disable-select">Miau</p>
      <p className="white disable-select">Miau</p>
    </div>
  </div> : (
      <div onClick={handleClick} className="tc greyCard dib ma3 grow shadow-5 pointer">

        <div className="pic-background">
          <h3 className="disable-select">{name}</h3>
          <div className="ma3">
            <img className="disable-select kitty-img" src={`https://robohash.org/set_set4/${id}?size=150x150`} alt="kitties" />
          </div>
        </div>
        <div className="content">
          <p className="disable-select">Age: {age}</p>
          <p className="disable-select">Fav Food: {food}</p>
          <p className="disable-select desc">{name} Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ut dolorem dolores dolorum dicta, nostrum aspernatur voluptate, maxime odit quae.</p>
        </div>
      </div>
    );
}

export default Card;