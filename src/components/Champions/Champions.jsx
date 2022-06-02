import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Main } from "./ChampionsStyle";
import { useSelector, useDispatch } from "react-redux";
import { getHeroes } from "../../services/ApiHeroes";
import { setHeroesDataSucess, setHeroIsLoading } from "../../store/heroes";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

let pagination = 1;
const Champions = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { heroes, isLogged, privateK, publicK, ts, hash, isLoading } =
    useSelector((state) => state.heroes);

  useEffect(() => {
    if (!isLogged) {
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
    <>
      {isLoading ? (
        <SkeletonTheme baseColor="#fff" highlightColor="#444" width={100}>
          <Skeleton count={10} />
        </SkeletonTheme>
      ) : (
        <Main>
          <table className="tableStyle">
            <thead>
              <tr>
                <th>Hero</th>
                <th>Description</th>
                <th>Modified</th>
              </tr>
            </thead>
            {heroes.map((hero) => (
              <tbody key={hero.id}>
                <tr>
                  <td>
                    <Link to={`${hero.id}`}>{hero.name}</Link>
                  </td>
                  <td>{hero.description}</td>
                  <td>{hero.modified}</td>
                </tr>
              </tbody>
            ))}
          </table>
          <div className="pagination">
            {pagination == 1 ? (
              <button disabled>Anterior</button>
            ) : (
              <button onClick={handleGetPrevHeroesList}>Anterior</button>
            )}
            <button onClick={handleGetNextHeroesList}>Próximo</button>
          </div>
        </Main>
      )}
    </>
  );
};

export default Champions;
