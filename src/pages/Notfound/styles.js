import styled from "styled-components";
import mobileBreakpoint from "../../configs/mobileBreakpoint";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: var(--gk-green);

  h2 {
    color: yellow;
  }

  figure {
    width: 30vh;
    margin: 30px 0;

    img {
      width: 100%;
    }
  }

  a {
    color: var(--white);
    font-size: 3vw;
    transition: 1s;

    :hover {
      font-size: 4vw;
    }

    @media (max-width: ${`${mobileBreakpoint.width}px`}) {
      font-size: 10vw;
    }
  }
`;
