import Table from "../../../../../components/Table";
import { useUser } from "../../../../../providers/users";
import { useDashboard } from "../../../../../providers/dashboard";
import { useAuth } from "../../../../../providers/auth";
import { FaTrashAlt, FaUserEdit } from "react-icons/fa";
import Button from "../../../../../components/Button";
import UpdateUserForm from "../forms/updateUser";
import { useState } from "react";
import Input from "../../../../../components/Input";

const UsersTable = () => {
  const { allUsers, deleteUser } = useUser();
  const { userId } = useAuth();
  const { setModalInfo, setOpenModal } = useDashboard();
  const [filter, setFilter] = useState("");

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

  const userUpdate = (row, id) => {
    setModalInfo({
      title: "Atualizar usuário",
      content: <UpdateUserForm data={row} userId={id} />,
    });
  };

  const header = [
    {
      title: "ID",
      access: "id",
    },
    {
      title: "Usuário",
      access: false,
      cell: (row) => (
        <div>
          {row.username}{" "}
          <span style={{ color: "var(--blue)", fontWeight: "bold" }}>
            {userId === row.id && "(Você)"}
          </span>
        </div>
      ),
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
          disabled={userId === row.id}
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
      <Input
        label="Filtrar"
        width="250px"
        onChange={(evt) => setFilter(evt.target.value)}
        placeholder="..."
      />
      <Table
        header={header}
        data={allUsers.filter(
          (item) =>
            item.username?.toLowerCase().includes(filter.toLowerCase()) ||
            item.id?.toString().includes(filter.toString()) ||
            item.email?.toLowerCase().includes(filter.toLocaleLowerCase())
        )}
      />
    </div>
  );
};

export default UsersTable;
