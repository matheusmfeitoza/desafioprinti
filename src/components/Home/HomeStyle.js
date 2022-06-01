import styled from "styled-components";

export const HomeStyle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 700px;
  padding: 3rem;
  background-color: rgba(0, 20, 30, 0.5);
  border-radius: 30px;
  color: white;

  h1 {
    font-size: 1.8rem;
    margin: 8px 0;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    margin: 5px;
  }
  a {
    text-decoration: none;
    color: red;
  }

  .userInput {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: center;
  }

  .userInput input {
    padding: 6px;
    border: none;
    border-radius: 5px;
    width: 250px;
    text-align: center;
  }

  .userInput button {
    text-decoration: none;
    background-color: #a73429;
    padding: 5px;
    border-radius: 5px;
    color: #fff;
    width: 250px;
    text-align: center;
    cursor: pointer;
    transition: 0.3s;
    border: none;
  }

  .userInput button:hover {
    background-color: #a73476;
  }

  /* mobile */

  @media (max-width: 699px) {
    width: initial;

    .userInput {
      width: 100px;
    }
  }
  .teste {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
`;
