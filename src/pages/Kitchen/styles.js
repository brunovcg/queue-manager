import styled from "styled-components";

export const Container = styled.main`
  background: var(--light-grey);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .inputContainer {
    width: 30%;
    height: 90%;
    border: 2px solid var(--grey);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .info {
      button {
        color: var(--divwhite);
      }
    }

    h2 {
      height: 15%;
      display: flex;
      align-items: center;
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

        .logout, .call{
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
    display: flex;
    align-items: start;
    justify-content: flex-start;
    flex-wrap: wrap;
    overflow-y: auto;
  }
`;
