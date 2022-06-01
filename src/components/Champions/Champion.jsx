import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Champion = () => {
  const { heroes } = useSelector((state) => state.heroes);
  const location = useParams();

  const heroSelected = heroes.filter((hero) => hero.id == location.id);
  console.log(heroSelected);
  return (
    <div>
      <div>
        <img
          src={`${heroSelected[0].thumbnail.path}.${heroSelected[0].thumbnail.extension}`}
        ></img>
        <h2>{heroSelected[0].name}</h2>
        <p>{heroSelected[0].description}</p>
        <button onClick={() => window.history.back()}>Voltar</button>
      </div>
      <div>
        <h2>Fascículos</h2>
        <ul>
          {heroSelected[0].stories.items.map((item) => {
            return (
              <div>
                <h3>{item.name}</h3>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Champion;
