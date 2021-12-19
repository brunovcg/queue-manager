import Styled from "./styles";
import { useBranch } from "../../../../providers/branches";

import Button from "../../../../components/Button";
import { useHistory } from "react-router-dom";

const DisplaySelect = () => {
  const history = useHistory();
  const { branches} = useBranch();

  const handleCaller = (branch_id) => {
  
    return history.push(`/display/${branch_id}`)

  }

  return (
    <Styled>
      <h2
        style={{
          width: "100%",
          textAlign: "center",
          marginTop: "20px",
          color: "var(--dark-grey",
        }}
      >
        Escolha uma loja para visualizar o Display:
      </h2>

      <div
        style={{
          width: "100%",
          display: "flex",
          marginTop: "40px",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {branches &&
          branches.map((item, index) => (
            <Button
              key={index}
              onClick={()=>handleCaller(item.id)}
              setWidth="150px"
              setHeight="150px"
              setColor="white"
              setBackground="var(--purple)"
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "10px 30px",
              }}
            >
              <div style={{ color: "var(--yellow" }}>Unidade</div>
              <div style={{ color: "var(--white" }}>{item.name}</div>
            </Button>
          ))}
      </div>
    </Styled>
  );
};

export default DisplaySelect;
