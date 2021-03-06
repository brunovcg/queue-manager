import styled from "styled-components";
import mobileBreakpoint from "../../configs/mobileBreakpoint"

export const Styled = styled.main`
  background: var(--gk-green);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: ${`${mobileBreakpoint.width}px`}) {
    flex-direction: column;
  }

  .changeWindow {
    height: 10vh;
    display: flex;
    align-items: center;
  }

  .inputContainer {
    width: 30%;
    height: 90%;
    border: 2px solid var(--grey);
    background: var(--light-grey);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: ${`${mobileBreakpoint.width}px`}) {
      width: 100%;
      height: 90vh;
    }

    p {
      color: var(--black);
      font-family: "Otomanopee One", sans-serif;
      margin: 0;
    }

    h2 {
      height: 8%;
      display: flex;
      align-items: center;
      color: var(--dark-grey);
      font-size: 20px;
      margin:0;
    }

    .inputBox {
      height: 10%;

      input {
        width: 100%;
        height: 40px;
        padding: 0 10px;
        font-size: 1rem;

        ::placeholder {
          text-align: center;
          font-size: 1rem;
        }
      }
    }

    .virtualKey {
      width: 260px;
      height: 70%;
      .numberButtons {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
      }

      .actionButtons {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        .logout,
        .call {
          display: flex;
          justify-content: center;
        }

        .logout {
          width: 30%;
          button {
            height: 30px;
          }
        }
        .call {
          width: 50%;
          button {
            width: 100%;
            height: 50px;
          }
        }
      }
    }
  }

  .cardContainer {
    width: 65%;
    height: 90%;
    border: 2px solid var(--grey);
    background: var(--light-grey);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    overflow-y: auto;

    .clientCallsBox {
      width: 100%;
      height: fit-content;
      display: flex;
      align-items: start;
      justify-content: flex-start;
      flex-wrap: wrap;
    }

    @media (max-width: ${`${mobileBreakpoint.width}px`}) {
      width: 100%;
      height: 90vh;
      justify-content: center;
    }
  }

  .hidden {
    display: none;
  }
`;
