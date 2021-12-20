import Styled from "./styles";

const MenuCard = ({
  background = "var(--grey)",
  title,
  icon,
  color = "white",
  onClick = () => console.log("You need to set onClick"),
}) => {
  return (
    <Styled background={background} color={color} onClick={onClick}>
      <div className="icon">{icon}</div>
      <p className="title">{title}</p>
    </Styled>
  );
};

export default MenuCard;
