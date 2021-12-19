import Input from "../../../../../components/Input";
import Button from "../../../../../components/Button";
import { useState } from "react";
import {useBranch} from "../../../../../providers/branches"

const DeleteBranchsAllOrdersForm = ({ branchId, branchName }) => {
  const [branchTyped, setBranchTyped] = useState("");
  const {deleteThisBranchOrders} = useBranch()

  return (
    <>
      <h2 style={{ color: "var(--dark-grey)", fontSize: "16px" }}>
        Tem certeza que quer apagar as senhas desta unidade?
      </h2>
      <div style={{ color: "var(--grey)", fontSize: "16px" }}>
        Para confirmar digite o nome da unidade abaixo:{" "}
        <span style={{ fontWeight: "bold", color: "var(--dark-grey)" }}>
          {branchName}
        </span>
      </div>
      <Input
        onChange={(evt) => setBranchTyped(evt.target.value)}
        width="250px"
        placeholder="Digite a unidade"
      />
      <div style={{ display: 'flex', width:"100%", justifyContent: 'center' }}>
        <Button
          disabled={branchName !== branchTyped}
          onClick={() => deleteThisBranchOrders(branchId,branchName)}
          setColor="white"
          setBackground="red" 
        >
          Deletar
        </Button>
      </div>
    </>
  );
};

export default DeleteBranchsAllOrdersForm;
