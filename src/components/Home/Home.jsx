import React from "react";
import md5 from "md5";
import { useState } from "react";
import { HomeStyle } from "./HomeStyle";
import { useNavigate } from "react-router-dom";
import { getHeroes } from "../../services/ApiHeroes";
import { useDispatch, useSelector } from "react-redux";
import {
  setApiValues,
  setHeroesDataFailure,
  setHeroesDataSucess,
  setHeroIsLoading,
} from "../../store/heroes";

const Home = () => {
  const dispatch = useDispatch();
  const { hasError, errorMessage, isLoading } = useSelector(
    (state) => state.heroes
  );

  const [privateK, setPrivateK] = useState("");
  const [publicK, setpublicK] = useState("");
  const navigate = useNavigate();

  const date = new Date();
  const ts = Number(date);
  const userHash = md5(ts + privateK + publicK);

  const handleUserGetApi = (event) => {
    event.preventDefault();
    dispatch(setHeroIsLoading({ isLoading: true }));
    if (privateK.length != 0) {
      getHeroes({ apikey: publicK, hash: userHash, ts })
        .then(({ data }) => data)
        .then(({ results, total }) => {
          dispatch(
            setHeroesDataSucess({
              heroes: results,
              total,
            })
          );
          dispatch(
            setApiValues({
              publicK,
              privateK,
              hash: userHash,
              ts,
            })
          );
          navigate("/champions");
        })
        .catch(({ response }) =>
          dispatch(setHeroesDataFailure({ message: response.data.message }))
        );
    }
  };
  return (
    <div className="container">
      <HomeStyle>
        <h1>Bem vindo(a) ao Marvel Hero Library</h1>
        <p>
          Para usar a biblioteca de hero's você precisa de uma chave de acesso.
        </p>
        <p>
          Você consegue gerar a sua chave neste link:{" "}
          <a href="https://developer.marvel.com/">Developers Marvel</a>
        </p>
        <div>
          <form className="userInput" onSubmit={handleUserGetApi}>
            <input
              type="text"
              name="privateK"
              id="privateK"
              placeholder="Informe sua chave privada"
              value={privateK}
              onChange={(e) => setPrivateK(e.target.value)}
            />
            <input
              type="text"
              name="publicK"
              id="publicK"
              placeholder="Informe sua chave publica"
              value={publicK}
              onChange={(e) => {
                setpublicK(e.target.value);
              }}
            />
            {isLoading ? (
              <button disabled>Carregando...</button>
            ) : (
              <button>Acessar</button>
            )}
          </form>

          {hasError && <p>{errorMessage}</p>}
        </div>
      </HomeStyle>
    </div>
  );
};

export default Home;
