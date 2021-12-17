import { useKitchen } from "../../../../../providers/kitchens";
import Input from "../../../../../components/Input/";
import {dataFormFunctions}  from "../../../../../utils/functions"
import Button from "../../../../../components/Button";
import { useState } from "react";

const UpdateKitchenForm = ({ data, kitchenId }) => {
  const [branch, setBranch] = useState("");
  const [code, setCode] = useState("");
  const [image, setImage] = useState();
  const [username, setUsername] = useState();
  const [label, setLabel] = useState();
  const { updateKitchen } = useKitchen();

  const handleSubmit = () => {
    const formdata = new FormData();

    if (code && code !== "") {
      formdata.append("code", code);
    }

    if (branch && branch !== "") {
      formdata.append("branch", branch);
    }

    if (image && image !== "") {
      formdata.append("image", image);
    }

    if (username && username !== "") {
      formdata.append("username", username);
    }

    if (label && label !== "") {
      formdata.append("label", label);
    }

    if (dataFormFunctions.valuesToArray(formdata).length < 1) {
      return;
    }

    updateKitchen(kitchenId, formdata);
  };

  const fields = [
    {
      name: "code",
      type: "text",
      placeholder: data.code,
      onChange: (evt) => setCode(evt.target.value),
    },
    {
      name: "branch",
      type: "text",
      placeholder: data.branch?.name,
      onChange: (evt) => setBranch(Number(evt.target.value)),
    },
    {
      name: "imagem",
      type: "file",
      onChange: (evt) => setImage(evt.target.files[0]),
    },
    {
      name: "username",
      type: "text",
      placeholder: data.user?.username,
      onChange: (evt) => setUsername(evt.target.value),
    },
    {
      name: "label",
      type: "text",
      placeholder: data.label,
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
          <Input
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
