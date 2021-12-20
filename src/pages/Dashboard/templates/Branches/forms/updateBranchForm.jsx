import { useBranch } from "../../../../../providers/branches";
import { estadosUF } from "../../../../../utils/mocks";
import * as yup from "yup";
import HookForm from "../../../../../components/HookForm";

const UpdateBranchForm = ({ data, branchId }) => {
  const { updateBranch } = useBranch();

  const schema = yup.object().shape({
    name: yup.string(),
    address: yup.string(),
    number: yup.string(),
    city: yup.string(),
    UF: yup.string(),
    cep: yup.string(),
  });

  const fields = [
    {
      name: "name",
      type: "text",
      placeholder: data.name,
      width: "50%",
      widthMobile: "100%",
    },
    {
      name: "address",
      type: "text",
      placeholder: data.address,
      width: "50%",
      widthMobile: "100%",
    },
    {
      name: "number",
      type: "text",
      placeholder: data.number,
      width: "25%",
      widthMobile: "100%",
    },
    {
      name: "city",
      type: "text",
      placeholder: data.city,
      width: "60%",
      widthMobile: "100%",
    },

    {
      name: "UF",
      type: "text",
      placeholder: data.UF,
      label: "UF",
      datalist: estadosUF,
      width: "15%",
      widthMobile: "30%",
    },
    {
      name: "cep",
      type: "text",
      placeholder: data.cep,
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

    for (let key in data) {
      if (!data[key]) {
        delete data[key];
      }
    }

    updateBranch(branchId, data);
  };

  return <HookForm schema={schema} fields={fields} action={action} />;
};

export default UpdateBranchForm;
