import React from "react";
import { useOutletContext } from "react-router-dom";

import AnimationPages from "../components/AnimationPages";

import "../style/AnimalCards.css";

const AnimalCards = () => {
  const setTitle = useOutletContext();

  React.useEffect(() => {
    setTitle("Karty Zwierząt");
  }, []);

  return (
    <AnimationPages>
      <div className="wrapper-pets">
        <div className="card-pets">KARTA 1</div>
        <div className="card-pets">KARTA 2</div>
        <div className="card-pets">KARTA 3</div>
      </div>
    </AnimationPages>
  );
};

export default AnimalCards;
