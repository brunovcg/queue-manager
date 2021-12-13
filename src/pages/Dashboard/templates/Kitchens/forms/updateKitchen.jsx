import { useKitchen } from "../../../../../providers/kitchens";
import InputNotRegister from "../../../../../components/Input/notRegister";
import { formdataArrayValues } from "../../../../../utils/formDataFunctions";
import Button from "../../../../../components/Button";
import { useState } from "react";

const UpdateKitchenForm = () => {
  const [branch, setBranch] = useState("");
  const [code, setCode] = useState("");
  const [image, setImage] = useState();
  const [username, setUsername] = useState();
  const [label, setLabel] = useState();
  const { updateKitchen } = useKitchen();
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    const data = new FormData();

    if (code && code !== "") {
      data.append("code", code);
    }

    if (branch && branch !== "") {
      data.append("branch", branch);
    }

    if (image && image !== "") {
      data.append("image", image);
    }

    if (username && username !== "") {
      data.append("username", username);
    }

    if (label && label !== "") {
      data.append("label", label);
    }

    if (formdataArrayValues(data)) {
      return;
    }

    //  TEM QUE VER COMO ATUALIZAR O ID DA COZINHA, PELO INSOMIA TEM QUE ENVIAR O ID DA COZINHA TALVEz SEJA MELHOR FAZER A TABELA E SO DAI ATUALIZAR!!!

    updateKitchen("ID da cozinha", data);
  };

  const fields = [
    {
      name: "code",
      error: errors.code,
      type: "text",
      placeholder: "Código",
      onChange: (evt) => setCode(evt.target.value),
    },
    {
      name: "branch",
      error: errors.branch,
      type: "text",
      placeholder: "Filial",
      onChange: (evt) => setBranch(Number(evt.target.value)),
    },
    {
      name: "imagem",
      error: "",
      type: "file",
      onChange: (evt) => setImage(evt.target.files[0]),
    },
    {
      name: "username",
      error: "",
      type: "text",
      placeholder: "Usuário",
      onChange: (evt) => setUsername(evt.target.value),
    },
    {
      name: "label",
      error: "",
      type: "text",
      placeholder: "Marca",
      onChange: (evt) => setLabel(evt.target.value),
    },
  ];
  return (
    <div
      className="create-kitchen-input-box"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {fields &&
        fields.map((item, index) => (
          <InputNotRegister
            key={index}
            onChange={item.onChange}
            placeholder={item.placeholder}
            type={item.type}
            error={item.error}
          />
        ))}
      <Button
        onClick={handleSubmit}
        setColor="white"
        setBackground="var(--gk-green)"
        setWidth="100px"
        setHeight="45px"
      >
        Enviar
      </Button>
    </div>
  );
};

export default UpdateKitchenForm;
