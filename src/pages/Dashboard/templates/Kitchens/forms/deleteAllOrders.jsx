import * as yup from "yup";
import HookForm from "../../../../../components/HookForm";

const DeleteAllOrdersForm = ({ data, kitchenId }) => {

    const schema = yup.object().shape({
        branch: yup.string().required("Usuário Necessário"),
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
        }]


    const action = ({ username, password, email, legal_id, userType }) => {

      };



 
 return <HookForm action={action} fields={fields} schema={schema}/>
};

export default DeleteAllOrdersForm;
