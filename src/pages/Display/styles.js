import styled from "styled-components";

export const Container = styled.main`
  background-color: var(--light-grey);
  height: 100vh;
  width: 100vw;

  header {
    height: 10%;
    border-bottom: 2px solid var(--grey);
    display: flex;

    p {
      width: 70%;
      height: 100%;
      display: flex;
      align-items: center;
      padding: 15px;
      font-size: 1.7rem;
    }

    .countDown {
      width: 15%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 15px;

      p {
        font-size: 1rem;
        font-weight: bold;
        color: var(--red);
        text-align: center;
        display: flex;
        justify-content: center;
      }
      div {
        color: var(--red);
        font-size: 1.7rem;
        font-weight: bold;
      }
    }

    figure {
      width: 15%;
      height: 100%;
      display: flex;
      align-items: center;

      img {
        height: 80%;
        box-shadow: 0px 4px 5px rgba(0,0,0,0.5);
      }
    }
  }

  main {
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 90%;

      section{
          
          width: 9%;
          height: 95%;
          background: var(--grey);
          box-shadow: 0px 4px 5px rgba(0,0,0,0.5);
      }
  }
`;
