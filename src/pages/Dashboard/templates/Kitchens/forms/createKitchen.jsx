import { useKitchen } from "../../../../../providers/kitchens";
import InputNotRegister from "../../../../../components/Input/notRegister";
import Button from "../../../../../components/Button";
import { useState } from "react";

const CreateKitchenForm = () => {
  const [branch, setBranch] = useState("");
  const [code, setCode] = useState("");
  const [image, setImage] = useState();
  const [username, setUsername] = useState();
  const [label, setLabel] = useState();
  const { createKitchen } = useKitchen();
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    if (code === "" && branch === "") {
      setErrors({
        ...errors,
        code: "O campo code é necessário",
        branch: "O campo branch é necessário",
      });
      return;
    }

    if (code === "" && branch !== "") {
      setErrors({ ...errors, branch: "", code: "O campo code é necessário" });
      return;
    }

    if (branch === "" || code !== "") {
      setErrors({ ...errors, branch: "O campo branch é necessário", code: "" });
      return;
    }

    const data = new FormData();
    data.append("code", code);
    data.append("branch", branch);
    data.append("image", image);
    data.append("username", username);
    data.append("label", label);

    createKitchen(data);
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

export default CreateKitchenForm;
