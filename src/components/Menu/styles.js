import styled from "styled-components";
import mobileBreakpoint from "../../configs/mobileBreakpoint";

const Styled = styled.div`
  display: flex;

  @media (max-width: ${`${mobileBreakpoint.width}px`}) {
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export default Styled;
