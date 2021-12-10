import Styled from "./styles";
import MenuCard from "../../../../components/MenuCard";
import {
  FaUserEdit,
  FaTrashAlt,
  FaUser,
  FaUserLock,
  FaUndoAlt,
  FaPlusCircle,
} from "react-icons/fa";
import permissions from "../../../../configs/permissions";
import { useAuth } from "../../../../providers/auth";
import { useDashboard } from "../../../../providers/dashboard";
import CreateUserForm from "./forms/createUser"
import UsersTable from "./tables/usersTable"


const Users = () => {
  const { userType } = useAuth();
  const { setModalInfo, setOpenModal } = useDashboard();


 const createUser = ()=>{
     setOpenModal(true)
     setModalInfo({
        title: 'Adicionar Usuário',
        content: <CreateUserForm/>,
     })
 }

 const updateUser = ()=>{
  setOpenModal(true)
  setModalInfo({
    title: 'Atualizar Usuários',
    content: <UsersTable/>,
 })

 }


  const userActions = [
    {
      title: "Adicionar Usuáro",
      icon: <FaPlusCircle />,
      onClick: () => createUser(),
      user: permissions.users.submenus.createUser.user,
      staff: permissions.users.submenus.createUser.staff,
      superuser: permissions.users.submenus.createUser.superuser,
    },
    {
      title: "Atualizar Usuários",
      icon: <FaUserEdit />,
      onClick: () => updateUser(),
      user: permissions.users.submenus.updateUser.user,
      staff: permissions.users.submenus.updateUser.staff,
      superuser: permissions.users.submenus.updateUser.superuser,
    },
    {
      title: "Resetar Senha",
      icon: <FaUndoAlt />,
      onClick: () => {},
      user: permissions.users.submenus.resetPassword.user,
      staff: permissions.users.submenus.resetPassword.staff,
      superuser: permissions.users.submenus.resetPassword.superuser,
    },
    {
      title: "Alterar Senha",
      icon: <FaUserLock />,
      onClick: () => {},
      user: permissions.users.submenus.changePassword.user,
      staff: permissions.users.submenus.changePassword.staff,
      superuser: permissions.users.submenus.changePassword.superuser,
    },
  ];

  return (
    <Styled>
      <div className="menuCard-box">
        {userActions &&
          userActions
            .filter((component) =>
              userType === "superuser"
                ? userType === "superuser" && component.superuser === true
                : userType === "staff"
                ? userType === "staff" && component.staff === true
                : userType === "user" && component.user === true
            )
            .map((item, index) => (
              <MenuCard
                background="var(--dark-grey)"
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
export default Users;
