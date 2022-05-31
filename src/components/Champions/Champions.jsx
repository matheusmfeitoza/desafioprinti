import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Section, Main } from "./ChampionsStyle";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";

const Champions = ({ itemsPerPage = 5 }) => {
  const navigate = useNavigate();
  const { heroes, isLogged } = useSelector((state) => state.heroes);
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    if (isLogged) {
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(heroes.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(heroes.length / itemsPerPage));
    } else {
      navigate("/");
    }
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % heroes.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <table>
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

      {heroes && (
        <ReactPaginate
          breakLabel="..."
          nextLabel="Próximo"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
        />
      )}
    </>
  );
};

export default Champions;
