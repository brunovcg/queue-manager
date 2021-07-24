import styled from "styled-components";

export const Section = styled.section`
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    min-height: 100%;
    padding-top: 25px;
  }

  figure {
    height: 15%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

    @media (max-width: 500px) {
      height: 30%;
      margin-top: 30px;
    }

    img {
      margin-top: 20px;
      border: 2px solid var(--white);
      height: 80%;

      @media (max-width: 500px) {
        margin-top: 0;
    }
    }
  }

  .client {
    margin-top: 15px;
    text-align: center;
    font-size: 1.75vw;
    font-weight: bold;
    color: var(--red);
    @media (max-width: 500px) {
      font-size: 12vw;
      margin-top: 10px;
      width: 80%;
    }
  }

  .kitchen {
    text-align: center;
    font-size: 1vw;
    font-weight: bold;
    margin-bottom: 15px;
    @media (max-width: 500px) {
      font-size: 8vw;
      width: 80%;
    }
  }

  .queue {
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 500px) {
      width: 80%;
    }

    p {
      margin-top: 10px;
      padding-top: 10px;
      width: 90%;
      border-top: 2px solid var(--light-grey);
      font-size: 2.4vw;
      text-align: center;
      @media (max-width: 500px) {
        font-size: 14vw;
      }
    }
  }
`;
