import React from "react";
import axios from "axios";
import md5 from "md5";
import { useState } from "react";
import { HomeStyle } from "./HomeStyle";
import { Link } from "react-router-dom";

const Home = () => {
  const [privateK, setPrivateK] = useState("");
  const [publicK, setpublicK] = useState("");

  const date = new Date();
  const ts = Number(date);
  const publicKey = "b83baa32416c0632516542796eda226f";
  const privateKey = "97b9c6b1efb1f68fca9897d41ad1a48a172b20ed";
  const hash = md5(ts + privateKey + publicKey);
  const userHash = md5(ts + privateK + publicK);

  const URL_BASE = `http://gateway.marvel.com/v1/public/characters?&limit=40&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  const USER_URL_BASE =
    "http://gateway.marvel.com/v1/public/characters?&limit=40";
  const buscaDados = () => {
    axios
      .get(URL_BASE)
      .then((response) => console.log(response))
      .catch((er) => console.log(er));
  };

  const handleUserGetApi = () => {
    axios
      .get(`${USER_URL_BASE}&ts=${ts}&apikey=${publicK}&hash=${userHash}`)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };
  return (
    <HomeStyle>
      <h1>Bem vindo(a) ao Marvel Hero Library</h1>
      <p>
        Para usar a biblioteca de hero's você precisa de uma chave de acesso.
      </p>
      <p>
        Você consegue gerar a sua chave neste link:{" "}
        <a href="https://developer.marvel.com/">Developers Marvel</a>
      </p>
      <div className="userInput">
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
        <Link onClick={handleUserGetApi} to="/champions">
          Acessar
        </Link>
      </div>
    </HomeStyle>
  );
};

export default Home;
