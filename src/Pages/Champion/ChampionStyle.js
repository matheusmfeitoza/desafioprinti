import styled from "styled-components";

export const SectionChamp = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  margin: 10px 0;

  .heroImg {
    width: 120px;
  }
  .heroDescription {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;
  }
  .btnBackToChampions {
    width: 180px;
    height: 60px;
    align-self: flex-end;
    background-color: rgb(175, 48, 13);
    border: none;
    border-radius: 4px;
    color: white;
  }
  .btnBackToChampions:hover {
    background-color: rgba(20, 20, 60, 0.8);
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;
export const ContainerChamp = styled.div`
  background-color: rgba(0, 20, 30, 0.8);
  padding: 10px;
  max-width: 800px;
  margin: 80px auto;
  border-radius: 5px;
  color: white;
`;

export const SectionChampComics = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  border-bottom: 1px solid red;
  border-top: 1px solid red;
  width: 100%;
  text-align: center;
  padding: 10px;
  margin: 5px;
`;

export const ComicsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ComicsImgWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin: 12px;
  border-bottom: 1px solid red;
  padding: 5px;

  img {
    width: 120px;
  }

  .comicTitleAndNumberInfo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 600px;
  }
  .comicTitleAndNumberInfo h3 {
    font-size: 0.846rem;
  }
  .comicTitleAndNumberInfo p {
    font-size: 0.565rem;
  }
  .comicDescription {
    font-size: 0.785rem;
    margin: 10px;
  }

  @media (max-width: 500px) {
    .comicTitleAndNumberInfo {
      flex-direction: column;
      gap: 5px;
      width: initial;
    }

    img {
      width: 100px;
      height: 150px;
      align-self: center;
    }
  }
`;
