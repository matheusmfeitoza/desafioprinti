import React from "react";
import {
  ContainerChamp,
  SectionChamp,
  SectionChampComics,
  Title,
  ComicsContainer,
  ComicsImgWrapper,
} from "./ChampionStyle";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getHeroComics } from "../../services/ApiHeroes";
import { setHeroComicsFailure, setHeroComicsSucess } from "../../store/heroes";

export const Champion = () => {
  const { heroes, publicK, ts, hash, comics, isLogged } = useSelector(
    (state) => state.heroes
  );
  const dispatch = useDispatch();
  const location = useParams();
  const navigate = useNavigate();
  const heroSelected = heroes.filter((hero) => hero.id == location.id);
  React.useEffect(() => {
    if (isLogged) {
      getHeroComics({ apikey: publicK, ts, hash }, location.id)
        .then(({ data }) => data)
        .then(({ results }) =>
          dispatch(
            setHeroComicsSucess({
              comics: results,
            })
          )
        )
        .catch(({ response }) =>
          dispatch(setHeroComicsFailure({ message: response.data.message }))
        );
    } else {
      navigate("/");
    }
  }, []);
  if (isLogged === false) return null;
  return (
    <ContainerChamp>
      <SectionChamp>
        <img
          className="heroImg"
          src={`${heroSelected[0].thumbnail.path}.${heroSelected[0].thumbnail.extension}`}
        ></img>
        <div className="heroDescription">
          <h2>{heroSelected[0].name}</h2>
          <p>{heroSelected[0].description}</p>
        </div>
        <button
          className="btnBackToChampions"
          onClick={() => window.history.back()}
        >
          Voltar
        </button>
      </SectionChamp>
      <SectionChampComics>
        <Title>Fascículos</Title>
        <ComicsContainer>
          {comics.map((comic) => {
            return (
              <ComicsImgWrapper key={comic.id}>
                <img
                  src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  alt="Hero Comic"
                />
                <div>
                  <div className="comicTitleAndNumberInfo">
                    <h3>{comic.title}</h3>
                    <p>Nº Capa: {comic.issueNumber}</p>
                  </div>
                  <div>
                    {comic.textObjects.length > 0 ? (
                      <div
                        dangerouslySetInnerHTML={{
                          __html: comic.textObjects.at(-1).text,
                        }}
                        className="comicDescription"
                      />
                    ) : (
                      <p>Sem descrição</p>
                    )}
                  </div>
                </div>
              </ComicsImgWrapper>
            );
          })}
        </ComicsContainer>
      </SectionChampComics>
    </ContainerChamp>
  );
};
