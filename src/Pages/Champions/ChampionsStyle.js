import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  max-width: 800px;
  padding: 10px;
  border-radius: 5px;
  margin: 100px auto;
  height: 900px;
  background-color: rgba(0, 20, 30, 0.8);

  .pagination {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
  }
  .pagination button {
    padding: 10px;
    border: none;
    background-color: #eee;
    border-radius: 5px;
    cursor: pointer;
    color: white;
    background-color: rgb(175, 48, 13);
    transition: 0.3s;
  }

  .pagination button:hover {
    background-color: rgba(20, 20, 60, 0.8);
  }

  @media (max-width: 590px) {
    height: initial;
  }
`;

export const Table = styled.table`
  border-collapse: collapse;
  table-layout: fixed;
  height: 100%;
  -webkit-border-radius: 25px;
  -moz-border-radius: 25px;
  border-radius: 25px;
  color: white;

  th,
  td {
    padding: 5px;
    font-size: 12px;
    text-align: center;
    border: 1px solid white;
    font-size: 0.9rem;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: white;
    transition: 0.2s;
  }
  a:hover {
    color: red;
  }
`;
