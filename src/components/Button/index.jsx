import Styled from "./styles";

const Button = ({
  children,
  setColor,
  setHeight,
  onClick,
  setWidth="90px",
  setFont,
  setBackground,
  ...rest
}) => {
  return (
    <Styled
      setBackground={setBackground}
      onClick={onClick}
      setHeight={setHeight}
      setWidth={setWidth}
      setFont={setFont}
      setColor={setColor}
      {...rest}
    >
      {children}
    </Styled>
  );
};
export default Button;
