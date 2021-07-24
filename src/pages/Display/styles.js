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
      font-size: 2vw;
    }

    .countDown {
      width: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 15px;

      p {
        font-size: 1.2vw;
        font-weight: bold;
        color: var(--red);
        text-align: center;
        display: flex;
        justify-content: center;
      }

      @keyframes blink {
        0% {
          opacity: 1;
        }
        50% {
          opacity: 0.5;
        }
        100% {
          opacity: 0;
        }
      }

      div {
        color: var(--red);
        font-size: 3vw;
        font-weight: bold;
        animation: blink 0.8s linear infinite;
      }
    }

    button {
      width: fit-content;
      figure {
        width: 5vw;

        display: flex;
        align-items: center;
        position: absolute;
        top: 5px;
        right: 10px;

        img {
          height: 8vh;
          box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.5);
        }
      }
    }
  }

  main {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 90%;

    section {
      width: 9%;
      height: 95%;
      background: var(--grey);
      box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.5);
    }
  }
`;

export const MobileContainer = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: var(--light-grey);

  .selectBox {
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: center;

    select {
      width: 80%;
      height: 70%;
      font-size: 8vw;
    }
  }

  .callBox {
    background-color: var(--grey);
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    overflow-y: auto;
  }
`;
