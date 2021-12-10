import styled from "styled-components";
import mobileBreakpoint from "../../configs/mobileBreakpoint";

const Styled = styled.div`
width: 80%;
display: flex;
flex-direction: column;
align-items: center;

input, select{
        background: var(--white);
        height: fit-content;
        width: 100%;
        margin-top: 10px;
        border: 0;
        border-bottom: 1px solid var(--gk-green);
        padding: 5px 0 0 5px;
        color: var(--darl-grey);
        font-size: 18px;

        @media (max-width: ${`${mobileBreakpoint.width}px`}) {
          margin-top: 15px;
          font-size: 18px;
          height: 30px;
          width: 100%;
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
      font-size: 14px;
      @media (max-width: ${`${mobileBreakpoint.width}px`}) {
        width: 100%;
        height: 25px;
        font-size: 12px;
      }
    }
  }


`;

export default Styled;
