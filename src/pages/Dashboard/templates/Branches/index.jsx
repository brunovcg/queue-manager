import Styled from "./styles";
import MenuCard from "../../../../components/MenuCard";
import {
  FaHouseUser,
  FaPlusCircle,
} from "react-icons/fa";
import permissions from "../../../../configs/permissions";
import { useAuth } from "../../../../providers/auth";
import { useDashboard } from "../../../../providers/dashboard";
import CreateBranchForm from "./forms/createBranchForm"
import BranchesTable from "./tables/branches"


const Branches = () => {
  const { userType } = useAuth();
  const { setModalInfo, setOpenModal } = useDashboard();

  const createBranch = () => {
    setOpenModal(true);
    setModalInfo({
      title: "Adicionar Unidade",
      content: <CreateBranchForm/>,
    });
  };

  const updateBranch = () => {
    setOpenModal(true);
    setModalInfo({
      title: "Atualizar Unidade",
      content: <BranchesTable/>,
    });
  };


  const userActions = [
    {
      title: "Adicionar Unidade",
      icon: <FaPlusCircle />,
      onClick: () => createBranch(),
      user: permissions.branches.submenus.createBranch.user,
      staff: permissions.branches.submenus.createBranch.staff,
      superuser: permissions.branches.submenus.createBranch.superuser,
    },
    {
      title: "Alterar Unidade",
      icon: <FaHouseUser/>,
      onClick: () => updateBranch(),
      user: permissions.branches.submenus.updateBranch.user,
      staff: permissions.branches.submenus.updateBranch.staff,
      superuser: permissions.branches.submenus.updateBranch.superuser,
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
                background="var(--orange)"
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
export default Branches;
