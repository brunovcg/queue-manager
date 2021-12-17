import { useKitchen } from "../../../../../providers/kitchens";
import Input from "../../../../../components/Input/";
import Button from "../../../../../components/Button";
import { useState } from "react";
import { useWindowSize } from "../../../../../providers/windowSize";
import mobileBreakpoint from "../../../../../configs/mobileBreakpoint";

const CreateKitchenForm = () => {
  const [branch, setBranch] = useState("");
  const [code, setCode] = useState("");
  const [image, setImage] = useState();
  const [username, setUsername] = useState();
  const [label, setLabel] = useState();
  const { createKitchen } = useKitchen();
  const [errors, setErrors] = useState({});
  const { width } = useWindowSize();

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
      width: "50%",
      widthMobile: "100%",
    },
    {
      name: "branch",
      error: errors.branch,
      type: "text",
      placeholder: "Filial",
      onChange: (evt) => setBranch(Number(evt.target.value)),
      width: "50%",
      widthMobile: "100%",
    },
    {
      name: "imagem",
      error: "",
      type: "file",
      onChange: (evt) => setImage(evt.target.files[0]),
      width: "50%",
      widthMobile: "100%",
    },
    {
      name: "username",
      error: "",
      type: "text",
      placeholder: "Usuário",
      onChange: (evt) => setUsername(evt.target.value),
      width: "50%",
      widthMobile: "100%",
    },
    {
      name: "label",
      error: "",
      type: "text",
      placeholder: "Marca",
      onChange: (evt) => setLabel(evt.target.value),
      width: "50%",
      widthMobile: "100%",
    },
  ];
  return (
    <div
      className="create-kitchen-input-box"
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
        width: "100%",
      }}
    >
      {fields &&
        fields.map((item, index) => (
          <Input
            key={index}
            onChange={item.onChange}
            placeholder={item.placeholder}
            type={item.type}
            error={item.error}
            width={
              width <= mobileBreakpoint.width ? item.widthMobile : item.width
            }
          />
        ))}
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
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
    </div>
  );
};

export default CreateKitchenForm;
