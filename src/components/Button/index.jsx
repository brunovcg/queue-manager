import Styled from "./styles";

const Button = ({
  children,
  setColor,
  setHeight,
  onClick,
  setWidth,
  setFont,
  setBackground,
}) => {
  return (
    <Styled
      setBackground={setBackground}
      onClick={onClick}
      setHeight={setHeight}
      setWidth={setWidth}
      setFont={setFont}
      setColor={setColor}
    >
      {children}
    </Styled>
  );
};
export default Button;
