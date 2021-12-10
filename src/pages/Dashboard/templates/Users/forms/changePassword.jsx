import * as yup from "yup";
import HookForm from "../../../../../components/HookForm";
import { useUser } from "../../../../../providers/users";
import { useAuth } from "../../../../../providers/auth";

const ChangePasswordForm = () => {
  const { allUsers, changePassword } = useUser();
  const { userId } = useAuth();

  const schema = yup.object().shape({
    new_password: yup.string().required("Senha nova é necessária"),
    old_password: yup.string().required("Senha antiga é necessária"),
  });

  const fields = [
    {
      name: "old_password",
      type: "password",
      placeholder: "Digite a senha antiga",
    },
    {
      name: "new_password",
      type: "password",
      placeholder: "Digite a nova senha",
    },
  ];

  const action = ({ new_password, old_password }) => {
    const data = {
      old_password,
      new_password,
      username: allUsers.filter((item) => item.id === userId)[0]["username"],
    };

    changePassword(userId, data);
  };
  return <HookForm schema={schema} fields={fields} action={action} />;
};

export default ChangePasswordForm;
