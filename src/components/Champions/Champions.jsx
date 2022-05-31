import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Section, Main } from "./ChampionsStyle";
import { useSelector, useDispatch } from "react-redux";
import { getHeroes } from "../../services/ApiHeroes";
import { setHeroesDataSucess } from "../../store/heroes";

let pagination = 1;
const Champions = ({ itemsPerPage = 5 }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { heroes, isLogged, total, privateK, publicK, ts, hash } = useSelector(
    (state) => state.heroes
  );

  useEffect(() => {
    if (isLogged) {
    } else {
      navigate("/");
    }
  }, []);

  const handleGetNextHeroesList = () => {
    pagination = pagination + 1;
    getHeroes({ apikey: publicK, hash, ts, page: pagination })
      .then(({ data }) => data)
      .then(({ results, total }) => {
        if (pagination <= total) {
          dispatch(
            setHeroesDataSucess({
              heroes: results,
              total,
              privateK: privateK,
              publicK: publicK,
              ts: ts,
              hash: hash,
            })
          );
        }
      });
  };

  const handleGetPrevHeroesList = () => {
    if (pagination >= 1) {
      pagination = pagination - 1;
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
                privateK: privateK,
                publicK: publicK,
                ts: ts,
                hash: hash,
              })
            );
          }
        });
    }
  };

  return (
    <>
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
    </>
  );
};

export default Champions;
