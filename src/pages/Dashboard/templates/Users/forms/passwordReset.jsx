import * as yup from "yup";
import HookForm from "../../../../../components/HookForm";
import { useUser } from "../../../../../providers/users";
import OneUserTable from "../tables/oneUserTable";
import { useState } from "react";
import { FaExclamationTriangle } from "react-icons/fa";

const ResetPasswordForm = () => {
  const { allUsers, resetPassword } = useUser([]);
  const [userId, setUserId] = useState(0);

  const schema = yup.object().shape({
    password: yup.string().required("Nova Senha Necessária"),
    id: yup.string().required("ID é necessário"),
  });

  const fields = [
    { name: "password", type: "text", placeholder: "Digite a nova senha", width:"50%", widthMobile:"100%"  },
    {
      name: "id",
      placeholder: "Selecione o Usuário",
      type: "text",
      onChange: (evt) => {
        setUserId(Number(evt.target.value));
      }, width:"50%", widthMobile:"100%" 
    },
  ];

  const action = ({ password, id }) => {
    const data = {
      password,
      id,
      username : allUsers.filter(item=>item.id === Number(id))[0]["username"]
    };

    resetPassword(data);
  };
  return (
    <>
      <HookForm schema={schema} fields={fields} action={action} />

      {userId !== 0 &&
        allUsers.filter((item) => item.id === userId).length !== 1 && (
          <div
            style={{
              width: "100%",
              textAlign: "center",
              color: "var(--red)",
              fontWeight: "bold",
              margin: "36px 0",
            }}
          >
            Usuário Não Existe <FaExclamationTriangle />
          </div>
        )}

      {userId !== 0 &&
        allUsers.filter((item) => item.id === userId).length === 1 && (
          <OneUserTable data={allUsers.filter((item) => item.id === userId)} />
        )}
    </>
  );
};
export default ResetPasswordForm;
