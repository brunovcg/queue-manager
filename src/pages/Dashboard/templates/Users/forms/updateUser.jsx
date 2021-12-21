import * as yup from "yup";
import HookForm from "../../../../../components/HookForm";
import { useUser } from "../../../../../providers/users";

const UpdateUserForm = ({ data, userId }) => {
  const { updateUser } = useUser();

  const schema = yup.object().shape({
    username: yup.string(),
    email: yup.string().email("E-mail Invalido"),
    legal_id: yup.string(),
    userType: yup.string(),
  });

  const fields = [
    {
      name: "username",
      type: "text",
      placeholder: data.username,
      width: "50%",
      widthMobile: "100%",
    },
    {
      name: "email",
      type: "text",
      placeholder: data.email,
      width: "50%",
      widthMobile: "100%",
    },
    {
      name: "legal_id",
      type: "text",
      placeholder: data.legal_id ? data.legal_id : "cpf ou cnpj",
      width: "50%",
      widthMobile: "100%",
    },
    {
      name: "userType",
      type: "text",
      placeholder: data.is_superuser
        ? "Superuser"
        : data.is_staff
        ? "Staff"
        : "User",
      datalist: ["User", "Staff", "Superuser"],
      width: "50%",
      widthMobile: "100%",
    },
  ];

  const action = ({ username, email, legal_id, userType }) => {
    const data = {
      username,
      email,
      legal_id,
      is_staff: userType === "Staff" || userType === "Superuser" ? true : false,
      is_superuser: userType === "Superuser" ? true : false,
    };

    for (let key in data) {
      if (!data[key]) {
        delete data[key];
      }
    }

    updateUser(userId, data);
  };
  return (
    <>
      <p
        style={{ marginLeft: "30px", color: "var(--red)", fontWeight: "bold" }}
      >
        Altere os campos necessários
      </p>
      <HookForm schema={schema} fields={fields} action={action} />{" "}
    </>
  );
};

export default UpdateUserForm;
