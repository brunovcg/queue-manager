import styled from "styled-components";
import mobileBreakpoint from "../../configs/mobileBreakpoint";

export const Styled = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${`${mobileBreakpoint.width}px`}) {
    flex-direction: column;
  }

  .greenBox {
    background: var(--gk-green);
    height: 100%;
    width: 55%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: ${`${mobileBreakpoint.width}px`}) {
      height: 30%;
      width: 100%;
    }

    .gk-neg {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 50%;

        @media (max-width: ${`${mobileBreakpoint.width}px`}) {
  
      width: 150px;
    }
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

    @media (max-width: ${`${mobileBreakpoint.width}px`}) {
      height: 70%;
      width: 100%;
      justify-content: start;
      padding-top: 20px;
    }
    h1 {
      text-align: center;
      margin: 0 10px 25px 10px;
      font-size: 29px;
      color: var(--gk-green);
    }

    p{
      margin: 0 90px;
      font-size: 12px;
      text-align: center;
      color: var(--grey);
    }

    h2 {
      color: var(--dark-grey);
      font-size: 20px;
    }
    h3 {
      display: flex;
      justify-content: center;
      margin-top: 15px;
      color: var(--dark-grey);
      width: 70%;
      font-size: 16px;
      @media (max-width: 500px) {
        font-size: 4vw;
      }
    }

    .inputBox {
      height: 40%;
      width: 70%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;

      @media (max-width: ${`${mobileBreakpoint.width}px`}) {
        height: 60%;
        width: 90%;
      }
  }

  .buttonBox {
    button {
      @media (max-width: ${`${mobileBreakpoint.width}px`}) {
        width: 90px;
        height: 40px;
        font-size: 18px;
        margin-bottom: 20px;
      }
    }
  }
`;
