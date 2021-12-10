import * as yup from "yup";
import HookForm from "../../../../../components/HookForm";
import { useKitchen } from "../../../../../providers/kitchens";
import { useUser } from "../../../../../providers/users";

const CreateKitchenForm = () => {
  const { createKitchen } = useKitchen();
  const { getSimpleUserList } = useUser();



  const userList = () => {
    let list = [];

    getSimpleUserList().map((item) => list.push(item.username));

    return list;
  };

  const schema = yup.object().shape({
    image: yup.mixed(),
    label: yup.string(),
    code: yup.string().required("Necessário incluir Código"),
    branch: yup.string(),
    username: yup.string()
  });

  const fields = [
    { name: "image", type: "file", placeholder: "Selecione Arquivo" },
    {
      name: "username",
      type: "text",
      placeholder: "Usuário",
      datalist:  ["disponível",...userList()],
    },
    {
      name: "label",
      type: "text",
      placeholder: "Marca Associada",
    },
    { name: "code", type: "text", placeholder: "Código ID" },
    {
      name: "branch",
      type: "text",
      placeholder: "Escolha a unidade de negócio",
      datalist: [1],
    },
  ];

  const action = ({ image, username, code, branch, label }) => {
    const data = {
      image,
      username,
      code,
      branch,
      label,
    };
    createKitchen(data);
  };
  return ( <>  <HookForm schema={schema} fields={fields} action={action} /></>);
};

export default CreateKitchenForm;
