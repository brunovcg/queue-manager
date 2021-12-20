import styled from "styled-components";
import mobileBreakpoint from "../../configs/mobileBreakpoint";

const Styled = styled.div`

display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
justify-content: center;
padding: 0 15px;

label{
  width: 100%;
  height: 12px;
  color: var(--dark-grey);
  font-weight: bold;
  font-size: 11px;
}

input, select, textarea{
        background: var(--white);
        height: fit-content;
        width: 100%;
        margin-top: 10px;
        border: 0;
        border-bottom: 1px solid var(--gk-green);
        padding: 5px 0 0 5px;
        color: var(--dark-grey);
        font-size: 18px;

        @media (max-width: ${`${mobileBreakpoint.width}px`}) {
          margin-top: 10px;
          font-size: 16px;
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
