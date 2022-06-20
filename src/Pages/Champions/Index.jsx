import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Main, Table } from "./ChampionsStyle";
import { useSelector, useDispatch } from "react-redux";
import { getHeroes } from "../../services/ApiHeroes";
import {
  setHeroesDataSucess,
  setHeroIsLoading,
  setApiValues,
  setHeroesDataFailure,
} from "../../store/heroes";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

let pagination = 1;
export const Champions = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { heroes, isLogged, privateK, publicK, ts, hash, isLoading, total } =
    useSelector((state) => state.heroes);

  useEffect(() => {
    if (isLogged == false) {
      navigate("/");
    }
  }, []);

  const handleGetNextHeroesList = () => {
    pagination = pagination + 10;
    dispatch(setHeroIsLoading());
    getHeroes({ apikey: publicK, hash, ts, page: pagination })
      .then(({ data }) => data)
      .then(({ results, total }) => {
        if (pagination <= total) {
          dispatch(
            setHeroesDataSucess({
              heroes: results,
              total,
            })
          );
          dispatch(
            setApiValues({
              privateK: privateK,
              publicK: publicK,
              ts: ts,
              hash: hash,
            })
          );
        }
      })
      .catch(({ response }) =>
        dispatch(setHeroesDataFailure({ message: response.data.message }))
      );
  };

  const handleGetPrevHeroesList = () => {
    dispatch(setHeroIsLoading());
    if (pagination >= 10) {
      pagination = pagination - 10;
    } else pagination = 1;
    if (pagination >= 1) {
      getHeroes({ apikey: publicK, hash, ts, page: pagination })
        .then(({ data }) => data)
        .then(({ results, total }) => {
          if (pagination <= total) {
            dispatch(
              setHeroesDataSucess({
                heroes: results,
                total,
              })
            );
            dispatch(
              setApiValues({
                privateK: privateK,
                publicK: publicK,
                ts: ts,
                hash: hash,
              })
            );
          }
        })
        .catch(({ response }) =>
          dispatch(setHeroesDataFailure({ message: response.data.message }))
        );
    }
  };
  return (
    <Main>
      {isLoading ? (
        <SkeletonTheme baseColor="#fff" highlightColor="#444" width={100}>
          <Skeleton count={10} />
        </SkeletonTheme>
      ) : (
        <>
          <Table>
            <thead>
              <tr>
                <th>Herói</th>
                <th>Descrição</th>
                <th>Última modificação</th>
              </tr>
            </thead>
            {heroes.map((hero) => (
              <tbody key={hero.id}>
                <tr>
                  <td>
                    <Link to={`${hero.id}`}>{hero.name}</Link>
                  </td>
                  {hero.description != "" ? (
                    <td>{hero.description}</td>
                  ) : (
                    <td>Descrição indisponível</td>
                  )}

                  <td>{hero.modified}</td>
                </tr>
              </tbody>
            ))}
          </Table>
          <div className="pagination">
            <button
              disabled={pagination == 1}
              onClick={handleGetPrevHeroesList}
            >
              Anterior
            </button>

            <button
              disabled={pagination == total}
              onClick={handleGetNextHeroesList}
            >
              Próximo
            </button>
          </div>
        </>
      )}
    </Main>
  );
};
