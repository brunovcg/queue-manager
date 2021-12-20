import * as yup from "yup";
import HookForm from "../../../../../components/HookForm";
import { useUser } from "../../../../../providers/users";
import { masks } from "../../../../../utils/functions";

const CreateUserForm = () => {
  const { createUser } = useUser();

  const schema = yup.object().shape({
    username: yup.string().required("Usuário Necessário"),
    email: yup
      .string()
      .email("E-mail Invalido")
      .required("E-mail é necessário"),
    legal_id: yup
      .string()
      .required("CPF/CNPJ é necessário")
      .max(14, "No máximo 14 caracteres"),
    password: yup.string().required("Senha é necessária"),
    confirmPassword: yup
      .string()
      .required("Necessário confirmar")
      .oneOf([yup.ref("password")], "Você não digitou a mesma senha"),
    userType: yup.string().required("Necessário escolher o tipo"),
  });

  const fields = [
    {
      name: "username",
      type: "text",
      placeholder: "Digite o usuário",
      width: "50%",
      widthMobile: "100%",
    },
    {
      name: "email",
      type: "text",
      placeholder: "Digite o e-mail",
      width: "50%",
      widthMobile: "100%",
    },
    {
      name: "password",
      type: "password",
      placeholder: "Digite a senha",
      width: "50%",
      widthMobile: "100%",
    },
    {
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirme a senha",
      width: "50%",
      widthMobile: "100%",
    },

    {
      name: "legal_id",
      type: "text",
      placeholder: "Digite o CPF/CNPJ",
      width: "50%",
      widthMobile: "100%",
      // mask:"999.999.999-99"
    },
    {
      name: "userType",
      label: "Escolha permissões do usuário:",
      type: "text",
      placeholder: "Selecione o tipo de Usuário",
      datalist: ["User", "Staff", "Superuser"],
      width: "50%",
      widthMobile: "100%",
    },
  ];

  const action = ({ username, password, email, legal_id, userType }) => {
    const data = {
      username,
      password,
      email,
      legal_id: masks.takeOut(legal_id),
      is_staff: userType === "Staff" || userType === "Superuser" ? true : false,
      is_superuser: userType === "Superuser" ? true : false,
    };

    createUser(data);
  };
  return <HookForm schema={schema} fields={fields} action={action} />;
};

export default CreateUserForm;
