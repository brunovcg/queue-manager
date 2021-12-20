import { useKitchen } from "../../../../../providers/kitchens";
import { useDashboard } from "../../../../../providers/dashboard";
import Input from "../../../../../components/Input/";
import { dataFormFunctions } from "../../../../../utils/functions";
import Button from "../../../../../components/Button";
import mobileBreakpoint from "../../../../../configs/mobileBreakpoint";
import { useWindowSize } from "../../../../../providers/windowSize";
import { useState } from "react";
import { useBranch } from "../../../../../providers/branches";
import { useUser } from "../../././../../../providers/users";

const UpdateKitchenForm = ({ data, kitchenId }) => {
  const [branch, setBranch] = useState("");
  const [code, setCode] = useState("");
  const [image, setImage] = useState();
  const [username, setUsername] = useState();
  const [label, setLabel] = useState();
  const { updateKitchen } = useKitchen();
  const { branches } = useBranch();
  const { allUsers } = useUser();
  const { width } = useWindowSize();
  const { setOpenModal } = useDashboard();

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
      formdata.append("user", username);
    }

    if (label && label !== "") {
      formdata.append("label", label);
    }

    if (dataFormFunctions.valuesToArray(formdata).length < 1) {
      setOpenModal(false);
    }

    updateKitchen(kitchenId, formdata);
  };

  const fields = [
    {
      name: "code",
      type: "text",
      placeholder: data.code,
      onChange: (evt) => setCode(evt.target.value),
      width: "50%",
      widthMobile: "100%",
    },
    {
      name: "branch",
      label: "Escolha a unidade:",
      datalist: handleBranchSelect(),
      placeholder: data.branch?.name,
      onChange: (evt) => setBranch(evt.target.value),
      width: "50%",
      widthMobile: "100%",
    },
    {
      name: "imagem",
      type: "file",
      onChange: (evt) => setImage(evt.target.files[0]),
      width: "50%",
      widthMobile: "100%",
    },
    {
      name: "username",
      label: "Escolha um usuário:",
      datalist: handleUserSelect(),
      placeholder: data.user?.id,
      onChange: (evt) => setUsername(evt.target.value),
      width: "50%",
      widthMobile: "100%",
    },
    {
      name: "label",
      type: "text",
      placeholder: data.label,
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

export default UpdateKitchenForm;
