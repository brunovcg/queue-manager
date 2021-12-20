import styled from "styled-components";

const Styled = styled.button`
  width: 160px;
  height: 160px;
  padding: 10px;
  margin: 10px 30px;
  background-color: ${(prop) => prop.background};
  border-radius: 10px;
  border: none;
  box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(prop) => prop.color};
  :hover {
    opacity: 50%;
  }

  .icon {
    font-size: 50px;
  }

  .title {
    font-size: 18px;
    font-weight: bold;
  }
`;

export default Styled;
