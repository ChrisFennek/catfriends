import React from 'react';
import useSound from "use-sound";
import meowSfx from "../sounds/meow.mp3";

const Card = ({ name, age, id, food }) => {

  const soundUrl = meowSfx;
  const [playbackRate, setPlaybackRate] = React.useState(0.70);
  const [play] = useSound(soundUrl, {
    playbackRate,
    volume: 0.5,
  });

  const handleClick = () => {
    setPlaybackRate(playbackRate + 0.05);
    play();
  };

  return (
    <div onClick={handleClick} className="tc helvetica bg-navy white dib br4 pa4 ma3 grow shadow-5 pointer">
      <img src={`https://robohash.org/set_set4/${id}?size=200x200`} alt="kitties" />
      <div>
        <h1 className="blue">{name}</h1>
        <div className="blue">
          <p>Age: {age}</p>
          <p>Fav Food: {food}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;