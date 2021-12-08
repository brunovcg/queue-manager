import Styled from "./styles";
import { Navbar, Container, Nav } from "react-bootstrap";
import imgGKLogo from "../../assets/gokitchen-neg.png";
import Button from "../../components/Button";
import { useAuth } from "../../providers/auth";
import { useState } from "react";
import { PopUpModal } from "../Modal";

const Header = ({ menu }) => {
  const { logout } = useAuth();

  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const modalButtons=[
      {title: "Sim", onClick: ()=>logout()},
      {title: "Cancelar"}
  ]

  return (
    <Styled>
      <Navbar expand="lg">
        <Container>
          <figure>
            <img src={imgGKLogo} alt="gklogo" />
          </figure>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="box">
              {menu &&
                menu.map((item, index) => (
                  <Button key={index}>{item.title}</Button>
                ))}

              <Button
                onClick={openModal}
                setColor="var(--light-grey)"
                setBackground="var(--red)"
                setWidth="120px"
                setHeight="50px"
                setFont="22px"
              >
                Logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {modal && (
        <PopUpModal
          title="Logout"
          content="Tem certeza que quer fazer o LOGOUT?"
          setModal={setModal}
          buttons={modalButtons}
        />
      )}
    </Styled>
  );
};

export default Header;
