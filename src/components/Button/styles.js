import styled from "styled-components";
const Styled = styled.button`
  width: ${(props) => (props.setWidth ? props.setWidth : "60px")};
  height: ${(props) => (props.setHeight ? props.setHeight : "30px")};
  background-color: ${(props) => (props.setBackground ? props.setBackground : "grey")};
  color: ${(props) => (props.setColor ? props.setColor : "black")};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  margin: 5px;
  font-weight: bold;
  font-size: ${(props) => (props.setFont ? props.setFont : "20px")};
  padding: 0 5px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  transition: 0.2s;
  :hover {
    opacity: 50%;
  }
`;
export default Styled;
