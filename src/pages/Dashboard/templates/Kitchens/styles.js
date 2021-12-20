import styled from "styled-components";
import mobileBreakpoint from "../../../../configs/mobileBreakpoint"

const Styled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  margin-top: 50px;
  .menuCard-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    width: 90%;
    height: 90%;
    display: flex;
    flex: wrap;
    @media (max-width: ${`${mobileBreakpoint.width}px`}) {
      justify-content: center;

    }
  }
`;

export default Styled;
