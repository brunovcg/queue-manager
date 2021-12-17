import Button from "../Button";
import { PopUpModal } from "../Modal";
import { useState } from "react";
import { useAuth } from "../../providers/auth";
import { useDashboard } from "../../providers/dashboard";
import Styled from "./styles";
import permissions from "../../configs/permissions";
import Info from "../../pages/Dashboard/templates/Info";
import Users from "../../pages/Dashboard/templates/Users";
import Kitchens from "../../pages/Dashboard/templates/Kitchens";
import Branches from "../../pages/Dashboard/templates/Branches";
import CallerSelect from "../../pages/Dashboard/templates/CallerSelect"
import { useHistory } from "react-router-dom";

const Menu = () => {
  const [modal, setModal] = useState(false);

  const [modalInfo, setModalInfo] = useState({
    title: "",
    content: "",
    buttons: "",
  });
  const { userType, logout } = useAuth();
  const { setDashboard } = useDashboard();
  const history = useHistory();

  const openModal = () => {
    setModal(true);
  };

  const logoutAction = () => {
    openModal();
    setModalInfo({
      title: "Logout",
      content: "Tem certeza que quer finalizar a sessão?",
      buttons: (
        <Button
          setBackground="var(--real-green)"
          setColor="white"
          onClick={() => logout()}
        >
          Sim
        </Button>
      ),
    });
  };

  const menu = [
    {
      button: {
        title: "Info",
        color: "var(--blue)",
        onClick: () => setDashboard(<Info />),
      },
      user: permissions.info.menu.user,
      staff: permissions.info.menu.staff,
      superuser: permissions.info.menu.superuser,
    },
    {
      button: {
        title: "Chamador",
        color: "var(--yellow)",
        onClick: () => setDashboard(<CallerSelect/>),
      },
      user: permissions.chamador.menu.user,
      staff: permissions.chamador.menu.staff,
      superuser: permissions.chamador.menu.superuser,
    },
    {
      button: {
        title: "Display",
        color: "var(--purple)",
        onClick: () => history.push("/display"),
      },
      user: permissions.display.menu.user,
      staff: permissions.display.menu.staff,
      superuser: permissions.display.menu.superuser,
    },
    {
      button: {
        title: "Usuário",
        color: "var(--real-green)",
        onClick: () => setDashboard(<Users />),
      },
      user: permissions.users.menu.user,
      staff: permissions.users.menu.staff,
      superuser: permissions.users.menu.superuser,
    },
    {
      button: {
        title: "Cozinhas",
        color: "var(--yellow)",
        onClick: () => setDashboard(<Kitchens />),
      },
      user: permissions.kitchens.menu.user,
      staff: permissions.kitchens.menu.staff,
      superuser: permissions.kitchens.menu.superuser,
    },
    {
      button: {
        title: "Unidade",
        color: "var(--orange)",
        onClick: () => setDashboard(<Branches />),
      },
      user: permissions.branches.menu.user,
      staff: permissions.branches.menu.staff,
      superuser: permissions.branches.menu.superuser,
    },
    {
      button: {
        title: "Logout",
        color: "var(--red)",
        onClick: () => logoutAction(),
      },
      user: permissions.logout.menu.user,
      staff: permissions.logout.menu.staff,
      superuser: permissions.logout.menu.superuser,
    },
  ];

  return (
    <Styled>
      {menu &&
        menu
          .filter((component) =>
            userType === "superuser"
              ? userType === "superuser" && component.superuser === true
              : userType === "staff"
              ? userType === "staff" && component.staff === true
              : userType === "user" && component.user === true
          )
          .map((item, index) => (
            <div key={index}>
              <Button
                onClick={item.button.onClick}
                setColor="var(--light-grey)"
                setBackground={item.button.color}
                setWidth="120px"
                setHeight="50px"
                setFont="22px"
              >
                {item.button.title}
              </Button>
            </div>
          ))}

      {modal && (
        <PopUpModal
          title={modalInfo.title}
          content={modalInfo.content}
          setModal={setModal}
          buttons={modalInfo.buttons}
        />
      )}
    </Styled>
  );
};

export default Menu;
