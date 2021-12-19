import Styled from "./styles";
import permissions from "../../../../configs/permissions";
import { FaEdit, FaConciergeBell } from "react-icons/fa";
import MenuCard from "../../../../components/MenuCard";
import { useAuth } from "../../../../providers/auth";
import { useDashboard } from "../../../../providers/dashboard";
import CreateKitchenForm from "../Kitchens/forms/createKitchen";
import KitchensTable from "../Kitchens/tables/kitchenstable";


const Kitchens = () => {
  const { userType } = useAuth();
  const { setModalInfo, setOpenModal } = useDashboard();

  const createKitchen = () => {
    setOpenModal(true);
    setModalInfo({
      title: "Adicionar Cozinha",
      content: <CreateKitchenForm />,
    });
  };

  const updateKitchen = () => {
    setOpenModal(true);
    setModalInfo({
      title: "Atualizar Cozinhas",
      content: <KitchensTable />,
    });
  };

  const kitchenActions = [
    {
      title: "Adicionar Cozinha",
      icon: <FaConciergeBell />,
      onClick: () => createKitchen(),
      user: permissions.users.submenus.createUser.user,
      staff: permissions.users.submenus.createUser.staff,
      superuser: permissions.users.submenus.createUser.superuser,
    },

    {
      title: "Atualizar Cozinhas",
      icon: <FaEdit />,
      onClick: () => updateKitchen(),
      user: permissions.users.submenus.updateUser.user,
      staff: permissions.users.submenus.updateUser.staff,
      superuser: permissions.users.submenus.updateUser.superuser,
    },
  ];

  return (
    <Styled>
      <div className="menuCard-box">
        {kitchenActions &&
          kitchenActions
            .filter((component) =>
              userType === "superuser"
                ? userType === "superuser" && component.superuser === true
                : userType === "staff"
                ? userType === "staff" && component.staff === true
                : userType === "user" && component.user === true
            )
            .map((item, index) => (
              <MenuCard
                background="var(--yellow)"
                key={index}
                title={item.title}
                icon={item.icon}
                onClick={item.onClick}
              />
            ))}
      </div>
    </Styled>
  );
};
export default Kitchens;
