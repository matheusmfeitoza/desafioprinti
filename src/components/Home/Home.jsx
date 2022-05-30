import React, { useContext } from "react";
import axios from "axios";
import md5 from "md5";
import { useState } from "react";
import { HomeStyle } from "./HomeStyle";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const Home = () => {
  const [privateK, setPrivateK] = useState("");
  const [publicK, setpublicK] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { data, setData } = useContext(UserContext);
  const navigate = useNavigate();

  const date = new Date();
  const ts = Number(date);
  const userHash = md5(ts + privateK + publicK);

  const USER_URL_BASE =
    "http://gateway.marvel.com/v1/public/characters?&limit=10";

  const handleUserGetApi = () => {
    if (privateK.length != 0) {
      axios
        .get(`${USER_URL_BASE}&ts=${ts}&apikey=${publicK}&hash=${userHash}`)
        .then((response) => setData(response))
        .catch((err) => console.log(err));
      navigate("/champions");
    }
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
        <button onClick={handleUserGetApi}>Acessar</button>
      </div>

      <div>{error && <p>{error}</p>}</div>
    </HomeStyle>
  );
};

export default Home;
