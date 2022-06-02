import styled from "styled-components";

export const Section = styled.section``;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  max-width: 800px;
  padding: 10px;
  border-radius: 5px;
  margin-top: 100px;
  margin-bottom: 100px;
  height: 100vh;

  table,
  th,
  td {
    border: 1px solid #333;
  }
  table {
    border-collapse: collapse;
    table-layout: fixed;
    height: 100%;
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
