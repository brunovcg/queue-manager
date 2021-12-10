import Table from "../../../../../components/Table";
import { useUser } from "../../../../../providers/users";
import { useDashboard } from "../../../../../providers/dashboard";
import { FaTrashAlt,FaUserEdit, } from "react-icons/fa";
import Button from "../../../../../components/Button";
import UpdateUserForm from "../forms/updateUser"

const UsersTable = () => {
  const { allUsers, deleteUser } = useUser();

  const { setModalInfo, setOpenModal } = useDashboard();

  const userDelete = (username, id) => {
    setModalInfo({
      title: "Apagar usuário",
      content: (
        <p>
          Tem Certeza que gostaria de apagar{" "}
          <span style={{ color: "var(--red)", fontWeigth: "bold" }}>
            {username}?
          </span>
        </p>
      ),
      buttons: (
        <Button
          setColor="white"
          setBackground="var(--blue)"
          onClick={() => deleteUser(id, header)}
        >
          Apagar
        </Button>
      ),
    });

    setOpenModal(true);
  };

  const userUpdate = (row, id)=>{
    setModalInfo({
      title: "Atualizar usuário",
      content: <UpdateUserForm data={row} userId={id} />,
  })}

  const header = [
    {
      title: "ID",
      access: "id",
    },
    {
      title: "Usuário",
      access: "username",
      alignment: "start",
    },
    {
      title: "E-mail",
      access: "email",
      alignment: "start",
    },
    {
      title: "Doc",
      access: "legal_id",
    },
    {
      title: "Tipo",
      access: false,
      cell: (row) =>
        row.is_superuser === true
          ? "Superuser"
          : row.is_staff === true
          ? "Staff"
          : "User",
      alignment: "start",
    },
    {
      title: "Deletar",
      access: false,
      alignment: "start",
      cell: (row) => (
        <Button
          setWidth="30px"
          setColor="white"
          setHeight="30px"
          setBackground="var(--red)"
          onClick={() => userDelete(row.username, row.id)}
        >
          <FaTrashAlt />
        </Button>
      ),
    },
    {
      title: "Atualizar",
      access: false,
      alignment: "start",
      cell: (row) => (
        <Button
          setWidth="30px"
          setColor="white"
          setHeight="30px"
          setBackground="var(--yellow)"
          onClick={() => userUpdate(row, row.id)}
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

export default UsersTable;
