import styled from "styled-components";

export const Section = styled.section``;

export const Main = styled.main`
  display: block;
  background-color: white;
  max-width: 800px;
  padding: 10px;
  border-radius: 5px;
  margin: 80px auto;

  table,
  th,
  td {
    border: 1px solid #333;
  }
  table {
    border-collapse: collapse;
    table-layout: fixed;
  }
  th,
  td {
    padding: 5px;
    font-size: 12px;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: red;
  }
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
  }
`;
