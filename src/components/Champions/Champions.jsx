import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { Section, Main } from "./ChampionsStyle";
import ReactPaginate from "react-paginate";

const Champions = () => {
  const { data } = useContext(UserContext);
  console.log(data);
  return (
    <Main>
      <table>
        <thead>
          <tr>
            <th>Hero</th>
            <th>Description</th>
            <th>Modified</th>
          </tr>
        </thead>
        {data &&
          data.data.data.results.map((hero) => (
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
    </Main>
  );
};

export default Champions;
