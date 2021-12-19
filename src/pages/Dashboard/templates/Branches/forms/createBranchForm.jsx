import * as yup from "yup";
import HookForm from "../../../../../components/HookForm";
import { estadosUF } from "../../../../../utils/mocks";
import { useBranch } from "../../../../../providers/branches";

const CreateBranchForm = () => {
  const { createBranch } = useBranch();

  const schema = yup.object().shape({
    name: yup.string().required("Nome Necessário"),
    address: yup.string().required("Endereço é necessário"),
    number: yup.string().required("CPF/CNPJ é necessário"),
    city: yup.string().required("Cidade é necessária"),
    UF: yup.string().required("UF Necessário"),
    cep: yup.string().required("CEP Necessário"),
  });

  const fields = [
    {
      name: "name",
      type: "text",
      placeholder: "Digite o Nome",
      width: "50%",
      widthMobile: "100%",
    },
    {
      name: "address",
      type: "text",
      placeholder: "Digite o endereço",
      width: "50%",
      widthMobile: "100%",
    },
    {
      name: "number",
      type: "text",
      placeholder: "Digite o número",
      width: "25%",
      widthMobile: "100%",
    },
    {
      name: "city",
      type: "text",
      placeholder: "digite a cidade",
      width: "60%",
      widthMobile: "100%",
    },

    {
      name: "UF",
      type: "text",
      placeholder: "Digite o Estado (UF)",
      label: "UF",
      datalist: estadosUF,
      width: "15%",
      widthMobile: "30%",
    },
    {
      name: "cep",
      type: "text",
      placeholder: "Digite o cep",
      width: "30%",
      widthMobile: "70%",
    },
  ];

  const action = ({ name, address, number, city, UF, cep }) => {
    const data = {
      name,
      address,
      number,
      city,
      UF,
      cep,
    };

    createBranch(data);
  };
  return <HookForm schema={schema} fields={fields} action={action} />;
};

export default CreateBranchForm;
