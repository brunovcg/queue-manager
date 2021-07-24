import styled from "styled-components";

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
    flex-direction: column;
  }

  .greenBox {
    background: var(--gk-green);
    height: 100%;
    width: 55%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 500px) {
      height: 30%;
      width: 100%;
    }

    .gk-neg {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 50%;
      }
    }
  }

  .whiteBox {
    height: 100%;
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 20px 0px 25px 15px rgba(0, 0, 0, 0.45);

    @media (max-width: 500px) {
      height: 70%;
      width: 100%;
      justify-content: start;
      padding-top: 40px;
    }

    h2 {
      color: var(--dark-grey);
    }
    h3 {
      margin-top: 20px;
      color: var(--grey);
      @media (max-width: 500px) {
        font-size: 4vw;
        
      }
    }

    .inputBox {
      height: 40%;
      width: 70%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      @media (max-width: 500px) {
        height: 60%;
        width: 90%;
      }

      input,
      select {
        background: var(--white);
        height: fit-content;
        width: 100%;
        margin-top: 50px;
        border: 0;
        border-bottom: 1px solid var(--gk-green);
        padding: 5px 0 0 5px;
        color: var(--darl-grey);
        font-size: 2vw;

        @media (max-width: 500px) {
          margin-top: 40px;
          font-size: 4.8vw;
          height: 30px;
          width: 70%;
        }
      }
    }

    .error {
      width: 100%;
      text-align: start;
      padding: 5px 0 0 10px;
      height: 20px;
      color: var(--red);
      font-weight: bold;
      font-size: 1.4vw;
      @media (max-width: 500px) {
        width: 70%;
        height: 25px;
        font-size: 4vw;
      }
    }
  }

  .buttonBox {
    button {

      @media (max-width: 500px) {
        width: 35vw;
        height: 15vw;
        font-size: 7vw;
      }
    }
  }
`;
