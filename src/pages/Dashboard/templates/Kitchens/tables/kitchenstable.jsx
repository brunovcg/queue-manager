import Table from "../../../../../components/Table";
import { useKitchen } from "../../../../../providers/kitchens";
import { useDashboard } from "../../../../../providers/dashboard";
import { FaTrashAlt, FaUserEdit } from "react-icons/fa";
import Button from "../../../../../components/Button";
import UpdateKitchenForm from "../forms/updateKitchen";
import { enviromentMedia } from "../../../../../configs/enviroment";
import Input from "../../../../../components/Input";
import { useState } from "react";
import imgDefault from "../../../../../assets/default.jpg"

const KitchensTable = () => {
  const { kitchens, deleteKitchen } = useKitchen();
  const { setModalInfo, setOpenModal } = useDashboard();
  const [filter, setFilter] = useState("");

  const handleKitchenDelete = (username, id) => {
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
          onClick={() => deleteKitchen(id)}
        >
          Apagar
        </Button>
      ),
    });

    setOpenModal(true);
  };

  const handleKitchenUpdate = (row, id) => {
    setModalInfo({
      title: "Atualizar cozinha",
      content: <UpdateKitchenForm data={row} kitchenId={id} />,
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
      cell: (row) => row.user?.username,
      alignment: "start",
    },
    {
      title: "Código",
      access: "code",
      alignment: "start",
    },
    {
      title: "Unidade",
      access: false,
      cell: (row) => row.branch?.name,
    },
    {
      title: "Marca",
      access: "label",
    },
    {
      title: "Imagem",
      access: false,
      cell: (row) => (
        <img
          style={{ width: "40px" }}
          src={`${enviromentMedia}${row.image}`}
          onError={(evt) => {
            evt.target.onerror = null;
            evt.target.src = {imgDefault};
          }}
          alt="error_img"
        />
      ),
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
          onClick={() => handleKitchenDelete(row.code, row.id)}
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
          onClick={() => handleKitchenUpdate(row, row.id)}
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
        data={kitchens.filter(
          (item) =>
            item.code.toLowerCase().includes(filter.toLowerCase()) ||
            item.id.toString().includes(filter.toString()) ||
            item.label?.toLowerCase().includes(filter.toLocaleLowerCase()) ||
            item.branch?.name?.toLowerCase().includes(filter.toLocaleLowerCase())
        )}
      />
    </div>
  );
};

export default KitchensTable;
