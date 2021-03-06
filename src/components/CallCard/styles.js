import styled from "styled-components";
import mobileBreakpoint from "../../configs/mobileBreakpoint"

export const Container = styled.div`
  background: var(--grey);
  margin: 20px;
  width: 20%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.5);

  @media (max-width: ${`${mobileBreakpoint.width}px`}) {
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

    @media (max-width: ${`${mobileBreakpoint.width}px`}) {
      font-size: 9vw;
    }
  }

`;
