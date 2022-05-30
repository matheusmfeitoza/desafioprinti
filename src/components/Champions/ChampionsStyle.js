import styled from "styled-components";

export const Section = styled.section``;

export const Main = styled.main`
  color: white;
  margin: 0 30px;

  table {
    table-layout: fixed;
    border-collapse: collapse;
    border: 3px solid purple;
  }
  th {
    border-bottom: 3px solid purple;
    border-right: 3px solid purple;
  }
  td {
    text-align: center;
    border-right: 3px solid purple;
    border-bottom: 3px solid purple;
  }
`;
