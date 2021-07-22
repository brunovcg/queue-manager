import styled from "styled-components";

export const Section = styled.section`
  figure {
    height: 15%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;

    img {
      margin-top: 20px;
      border: 2px solid var(--white);
      height: 90%;
    }
  }

  .client {
    margin-top: 15px;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    color: var(--red);
  }

  .kitchen {
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 15px;
  }

  .queue {
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-start;
    align-items: center;

       

    p {
      margin-top: 10px;
      padding-top:10px;
      width: 90%;
      border-top: 2px solid var(--light-grey);
      font-size: 3rem;
      text-align: center;
    }
  }
`;
