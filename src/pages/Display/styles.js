import styled from "styled-components";

export const Styled = styled.main`
  background-color: var(--light-grey);
  height: 100vh;

  header {
    height: 15%;
    border-bottom: 2px solid var(--grey);
    display: flex;
    background: var(--dark-grey);

    .text {
      width: 65%;
      height: 100%;
      display: flex;
      align-items: center;
      padding: 15px;
      font-size: 2vw;
      color: white;
    }

    .countDown {
      width: 20%;
      display: flex;
      justify-content: space-between;
      align-items: center;
  

      .update-text {
        width: 40%;
        font-size: 1.3rem;
        font-weight: bold;
        color: var(--light-red);
        text-align: center;
        display: flex;
        justify-content: center;
        margin-bottom: 0;
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

      .timer {
        text-align: end;
        width: 60%;
        color: var(--light-red);
        margin-left: 10px;
        font-size: 4rem;
        font-weight: bold;
        animation: blink 0.5s linear infinite;
      }
    }

    a {
      width: 15%;
      display: flex;
      justify-content: center;
      figure {
        height: 100%;
        display: flex;
        align-items: center;

        img {
          height: 80%;
          box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.5);
        }
      }
    }
  }

  main {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 85%;

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
    width: 100%;
    min-height: 15%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: space-around;

    a {
      width: 30%;
      display: flex;
      justify-content: center;
      figure {
        width: 80%;
        img {
          width: 100%;
        }
      }
    }

    select {
      width: 60%;
      height: 70%;
      font-size: 8vw;
      margin-right: 5px
    }
  }

  .callBox {
    
    background-color: var(--grey);
    min-height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    overflow-y: auto;
  }
`;
