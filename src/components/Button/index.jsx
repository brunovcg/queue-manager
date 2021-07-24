import MyButton from "./styles";

const Button = ({
  children,
  setColor,
  setHeight,
  setClick,
  setWidth,
  setFont,
  setBackground,
}) => {
  return (
    <MyButton
      setBackground={setBackground}
      onClick={setClick}
      setHeight={setHeight}
      setWidth={setWidth}
      setFont={setFont}
      setColor={setColor}
    >
      {children}
    </MyButton>
  );
};
export default Button;
