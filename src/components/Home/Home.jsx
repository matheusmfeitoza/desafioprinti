import md5 from "md5";
import { useState } from "react";
import { HomeStyle, Container, ErrorMsg } from "./HomeStyle";
import { useNavigate } from "react-router-dom";
import { getHeroes } from "../../services/ApiHeroes";
import { useDispatch, useSelector } from "react-redux";
import {
  setApiValues,
  setHeroesDataFailure,
  setHeroesDataSucess,
  setHeroIsLoading,
  setFailureAction,
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
    if (privateK != "" && publicK != "") {
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
    if (privateK == "") {
      dispatch(
        setFailureAction({ message: "Por favor informe as chaves da API." })
      );
    }
  };
  return (
    <Container>
      <HomeStyle>
        <h1>Bem vindo(a) ao Marvel Hero Library</h1>
        <p>
          Para usar a biblioteca de heros você precisa de uma chave de acesso.
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

          {hasError && <ErrorMsg>{errorMessage}</ErrorMsg>}
        </div>
      </HomeStyle>
    </Container>
  );
};

export default Home;
