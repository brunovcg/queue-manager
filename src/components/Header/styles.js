import styled from "styled-components";
import mobileBreakpoint from "../../configs/mobileBreakpoint";

const Styled = styled.div`
  min-height: 8vh;
  background: var(--gk-green);

  .navbar {
    height: 100%;
    background: var(--gk-green);

    .container {
      height: 100%;
      background: var(--gk-green);

      figure {
        height: 100%;
        margin-bottom: 0;

        img {
          height: 50px;
        }
      }

      .navbar-collapse {
        background: var(--gk-green);
        flex-grow: 0;

        .box {
          @media (max-width: ${`${mobileBreakpoint.width}px`}) {
            button {
              margin-top: 20px;
            }
          }
        }
      }
    }
  }
`;
export default Styled;
