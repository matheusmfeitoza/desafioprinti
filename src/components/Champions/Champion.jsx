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
import { useParams } from "react-router-dom";
import { getHeroComics } from "../../services/ApiHeroes";
import { setHeroComicsFailure, setHeroComicsSucess } from "../../store/heroes";

const Champion = () => {
  const { heroes, publicK, ts, hash, comics } = useSelector(
    (state) => state.heroes
  );
  const dispatch = useDispatch();
  const location = useParams();

  const heroSelected = heroes.filter((hero) => hero.id == location.id);
  React.useEffect(() => {
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
  }, []);
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
                      <p className="comicDescription">
                        {comic.textObjects[comic.textObjects.length - 1].text}
                      </p>
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

export default Champion;
