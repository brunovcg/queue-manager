import styled from "styled-components";

export const Container = styled.div`
  background: var(--grey);
  margin: 20px;
  width: 20%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 38%;
    }

  h3, .buttonBox{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
    font-size: 4.5vw;

    @media (max-width: 500px) {
      font-size: 9vw;
    }
  }

`;
