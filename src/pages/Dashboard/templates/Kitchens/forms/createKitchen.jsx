import * as yup from "yup";
import HookForm from "../../../../../components/HookForm";
import { useKitchen } from "../../../../../providers/kitchens";
import { useUser } from "../../../../../providers/users";
import { filter_array_obj_key_get_value_with_a_second_key } from "../../../../../utils/arrayObjectFunctions";
import { fileToImage } from "../../../../../utils/imagesFunctions";
import InputNotRegister from "../../../../../components/Input/notRegister";
import Button from "../../../../../components/Button";
import { useState } from "react";
import {useAuth} from "../../../../../providers/auth"
import {api} from '../../../../../services/api'

const CreateKitchenForm = () => {
  const [branch, setBranch] = useState();
  const [code, setCode] = useState();
  const [image, setImage] = useState();
  const [username, setUsername] = useState()
  const [label,setLabel] = useState();
  const { createKitchen } = useKitchen();


  // const userList = () => {
  //   let list = [];

  //   getSimpleUserList().map((item) => list.push(item.username));

  //   return list;
  // };

  // const schema = yup.object().shape({
  //   image: yup.mixed(),
  //   label: yup.string(),
  //   code: yup.string().required("Necessário incluir Código"),
  //   branch: yup.string(),
  //   username: yup.string(),
  // });

  // const fields = [
  //   { name: "code", type: "text", placeholder: "Código ID" },
  //   {
  //     name: "branch",
  //     type: "text",
  //     placeholder: "Filial",
  //     datalist: ["1","2","3","4"],
  //   },
  //   { name: "image", type: "file", placeholder: "Selecione Arquivo" },
  //   {
  //     name: "username",
  //     type: "text",
  //     placeholder: "Usuário",
  //     datalist: ["disponível", ...userList()],
  //   },
  //   {
  //     name: "label",
  //     type: "text",
  //     placeholder: "Marca Associada",
  //   },
  // ];

  // const action = ({ image=[], username, code, branch, label }) => {
  //   const data = {
  //     image:  fileToImage(image[0]),
  //     username: filter_array_obj_key_get_value_with_a_second_key(
  //       getSimpleUserList(),
  //       "id",
  //       username
  //     ),
  //     code,
  //     branch,
  //     label,
  //   };

  //   if (data.image?.length===0){
  //     delete data.image
  //   }

  //   for (let key in data) {
  //     if (!data[key]) {
  //       delete data[key];

  //     }
  //   }

  //   console.log(data);

  //   createKitchen(data);
  // };

  const handleSubmit = () => {
    const data = new FormData();
    data.append("code", code);
    data.append("branch", branch);
    data.append("image", image);
    data.append("username", username);
    data.append("label", label);

    createKitchen(data)
  };

  const fields = [
    {
      name: "code",
      error: "",
      type: "text",
      placeholder: "Código",
      onChange: (evt) => setCode(evt.target.value),
    },
    {
      name: "branch",
      error: "",
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
    <>
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
      <Button onClick={handleSubmit}>Enviar</Button>
      {/* <HookForm schema={schema} fields={fields} action={action} /> */}
    </>
  );
};

export default CreateKitchenForm;
