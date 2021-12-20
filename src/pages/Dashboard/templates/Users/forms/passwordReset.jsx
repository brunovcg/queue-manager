import * as yup from "yup";
import HookForm from "../../../../../components/HookForm";
import { useUser } from "../../../../../providers/users";
import OneUserTable from "../tables/oneUserTable";
import { useEffect, useState } from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import {toast} from "react-toastify"

const ResetPasswordForm = () => {
  const { allUsers, resetPassword } = useUser([]);
  const [userId, setUserId] = useState(0);
  const [filtered, setFiltered] = useState([]);

  const schema = yup.object().shape({
    password: yup.string().required("Nova Senha Necessária"),
    id: yup.string().required("ID é necessário"),
  });

  const fields = [
    {
      name: "password",
      type: "text",
      placeholder: "Digite a nova senha",
      width: "50%",
      widthMobile: "100%",
    },
    {
      name: "id",
      placeholder: "Busque pelo código do usuário",
      type: "text",
      onChange: (evt) => {
        setUserId(Number(evt.target.value));
      },
      width: "50%",
      widthMobile: "100%",
    },
  ];

  const action = ({ password, id }) => {

    if (filtered.length === 0){
      toast.error("Escoha um usuário existente!")

      return
    }

    const data = {
      password,
      id,
      username: filtered[0]["username"],
    };

    resetPassword(data);
  };

  useEffect(() => {
    setFiltered(allUsers.filter((item) => item.id === Number(userId)));
  }, [userId, setFiltered, allUsers]);

  return (
    <>
      <HookForm
        schema={schema}
        fields={fields}
        // buttonDisabled={filtered.length === 0}
        action={action}
      />

      {userId !== 0 && filtered.length !== 1 && (
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

      <h2 style={{fontSize: "13px", marginTop: "10px"}}>Visualização:</h2>
      {userId !== 0 && filtered.length === 1 && (
        <OneUserTable data={allUsers.filter((item) => item.id === userId)} />
      )}
    </>
  );
};
export default ResetPasswordForm;
