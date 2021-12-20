import styled from "styled-components";
import mobileBreakpoint from "../../configs/mobileBreakpoint"

export const Section = styled.section`
  margin: 0 15px;

  @media (max-width: ${`${mobileBreakpoint.width}px`}) {
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

    @media (max-width: ${`${mobileBreakpoint.width}px`}) {

      margin-top: 30px;
    }

    img {
      margin-top: 20px;
      border: 2px solid var(--white);
      height: 80%;

      @media (max-width: ${`${mobileBreakpoint.width}px`}) {
        margin-top: 0;
        width: 80%;
        
    }
    }
  }

  .client {
    margin-top: 15px;
    text-align: center;
    font-size: 1.75vw;
    font-weight: bold;
    color: var(--red);
    @media (max-width: ${`${mobileBreakpoint.width}px`}) {
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
    @media (max-width: ${`${mobileBreakpoint.width}px`}) {
      font-size: 8vw;
      width: 80%;
    }
  }

  .queue {
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: ${`${mobileBreakpoint.width}px`}) {
      width: 80%;
    }

    .number {
      margin-top: 10px;
      margin-bottom: 0px;
      padding-top: 10px;
      width: 90%;
      border-top: 2px solid var(--light-grey);
      font-size: 2vw;
      text-align: center;
      @media (max-width: ${`${mobileBreakpoint.width}px`}) {
        font-size: 14vw;
      }
    }
  }
`;
