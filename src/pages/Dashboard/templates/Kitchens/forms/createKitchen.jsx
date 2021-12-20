import { useKitchen } from "../../../../../providers/kitchens";
import Input from "../../../../../components/Input/";
import Button from "../../../../../components/Button";
import { useState } from "react";
import { useWindowSize } from "../../../../../providers/windowSize";
import mobileBreakpoint from "../../../../../configs/mobileBreakpoint";
import { dataFormFunctions } from "../../../../../utils/functions";
import { useBranch } from "../../../../../providers/branches";
import { useUser } from "../../././../../../providers/users";

const CreateKitchenForm = () => {
  const [branch, setBranch] = useState("");
  const [code, setCode] = useState("");
  const [image, setImage] = useState();
  const [username, setUsername] = useState();
  const [label, setLabel] = useState();
  const { createKitchen } = useKitchen();
  const [errors, setErrors] = useState({});
  const { width } = useWindowSize();
  const { branches } = useBranch();
  const { allUsers } = useUser();

  const handleBranchSelect = () => {
    return [" ", ...branches.map((item) => item.name)];
  };

  const handleUserSelect = () => {
    return [
      " ",
      ...allUsers
        .filter((user) => !user.is_staff)
        .sort((a, b) => a.id - b.id)
        .map((item) => item.id),
    ];
  };

  const handleSubmit = () => {
    if (code === "" && branch === "") {
      setErrors({
        ...errors,
        code: "O campo code é necessário",
        branch: "O campo unidade é necessário",
      });
      return;
    }

    if (code === "" && branch !== "") {
      setErrors({ ...errors, branch: "", code: "O campo code é necessário" });
      return;
    }

    if (branch === "" && code !== "") {
      setErrors({
        ...errors,
        branch: "O campo unidade é necessário",
        code: "",
      });
      return;
    }

    if (branch !== "" && code !== "") {
      setErrors({ ...errors, branch: "", code: "" });

      const formdata = new FormData();
      if (code && code !== "") {
        formdata.append("code", code);
      }

      if (branch && branch !== "") {
        formdata.append(
          "branch",
          branches.find((item) => item.name === branch).id
        );
      }

      if (image && image !== "") {
        formdata.append("image", image);
      }

      if (username && username !== "") {
        formdata.append("user", Number(username));
      }

      if (label && label !== "") {
        formdata.append("label", label);
      }

      if (dataFormFunctions.valuesToArray(formdata).length < 1) {
        return;
      }

      createKitchen(formdata);
    }
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
      label: "Escolha a unidade:",
      datalist: handleBranchSelect(),
      placeholder: "Unidade",
      onChange: (evt) => setBranch(evt.target.value),
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
      label: "Escolha um usuário:",
      datalist: handleUserSelect(),
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
            datalist={item.datalist}
            label={item.label}
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
