import MyButton from "./styles";

const Button = ({
  children,
  setColor,
  setHeight,
  setClick,
  setWidth,
  setFont,
}) => {
  return (
    <MyButton
      setColor={setColor}
      onClick={setClick}
      setHeight={setHeight}
      setWidth={setWidth}
      setFont={setFont}
    >
      {children}
    </MyButton>
  );
};
export default Button;
