import Table from "../../../../../components/Table";
import { useUser } from "../../../../../providers/users";
import { useDashboard } from "../../../../../providers/dashboard";
import { FaTrashAlt,FaUserEdit, } from "react-icons/fa";
import Button from "../../../../../components/Button";


const BranchesTable = () => {
  const { allUsers, deleteUser } = useUser();

  const { setModalInfo, setOpenModal } = useDashboard();

  

  const header = [
    {
      title: "ID",
      access: "id",
    },
    {
      title: "Nome",
      access: "name",
      alignment: "start",
    },
    {
      title: "Endereço",
      access: "address",
      alignment: "start",
    },
    {
      title: "Deletar",
      access: false,
      alignment: "center",
      cell: (row) => (
        <Button
          setWidth="30px"
          setColor="white"
          setHeight="30px"
          setBackground="var(--red)"
          onClick={() => {}}
        >
          <FaTrashAlt />
        </Button>
      ),
    },
    {
      title: "Atualizar",
      access: false,
      alignment: "center",
      cell: (row) => (
        <Button
          setWidth="30px"
          setColor="white"
          setHeight="30px"
          setBackground="var(--yellow)"
          onClick={() => {}}
        >
          <FaUserEdit />
        </Button>
      ),
    },
    {
        title: "Limpar Senhas",
        access: false,
        alignment: "center",
        cell: (row) => (
          <Button
            setWidth="30px"
            setColor="white"
            setHeight="30px"
            setBackground="var(--blue)"
            onClick={() => {}}
          >
            <FaUserEdit />
          </Button>
        ),
      },
  ];

  return (
    <div>
      <Table header={header} data={allUsers} />
    </div>
  );
};

export default BranchesTable;