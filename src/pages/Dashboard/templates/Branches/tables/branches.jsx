import Table from "../../../../../components/Table";
import { useBranch } from "../../../../../providers/branches";
import { useAuth } from "../../../../../providers/auth";
import { useDashboard } from "../../../../../providers/dashboard";
import { FaTrashAlt, FaUserEdit } from "react-icons/fa";
import Button from "../../../../../components/Button";
import DeleteBranchForm from "../forms/deleteBranchForm";
import DeleteBranchsAllOrdersForm from "../forms/deleteBranchsAllOrdersForm";
import UpdateBranchForm from "../forms/updateBranchForm";

const BranchesTable = () => {
  const { branches } = useBranch();

  const { setModalInfo, setOpenModal } = useDashboard();
  const { userType } = useAuth();

  const handleUpdate = (row) => {
    setOpenModal(true);
    setModalInfo({
      title: "Atualizar Unidade",
      content: <UpdateBranchForm branchId={row.id} data={row} />,
    });
  };

  const handleDelete = (row) => {
    setOpenModal(true);
    setModalInfo({
      title: "Deletar Unidade",
      content: <DeleteBranchForm branchId={row.id} branchName={row.name} />,
    });
  };

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
          onClick={() => handleDelete(row)}
          disabled={userType !== "superuser"}
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
          disabled={userType !== "superuser"}
          onClick={() => handleUpdate(row)}
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
          onClick={() => {
            setOpenModal(true);
            setModalInfo({
              title: "Limpar Senhas",
              content: (
                <DeleteBranchsAllOrdersForm
                  branchId={row.id}
                  branchName={row.name}
                />
              ),
            });
          }}
        >
          <FaUserEdit />
        </Button>
      ),
    },
  ];

  return (
    <div>
      <Table header={header} data={branches} />
    </div>
  );
};

export default BranchesTable;
