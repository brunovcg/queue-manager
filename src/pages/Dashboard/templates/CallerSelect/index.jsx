import Styled from "./styles";
import { useKitchen } from "../../../../providers/kitchens";
import { useAuth } from "../../../../providers/auth";
import { useEffect } from "react";
import Button from "../../../../components/Button";
import { enviromentMedia } from "../../../../configs/enviroment";
import { useHistory } from "react-router-dom";

const CallerSelect = () => {
  const history = useHistory();
  const { userKitchens, getUserKitchens,getOneKitchen } = useKitchen();
  const { userId } = useAuth();


  useEffect(() => {
    getUserKitchens(userId);
    /*eslint-disable-next-line*/ 
  }, [userId]);


  const handleCaller = (kitchen_id) => {
    getOneKitchen(kitchen_id)

    return history.push(`/caller/${kitchen_id}`)

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
        Escolha uma loja para visualizar o chamador:
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
        {userKitchens &&
          userKitchens.map((item, index) => (
            <Button
              key={index}
              onClick={()=>handleCaller(item.id)}
              setWidth="150px"
              setHeight="150px"
              setColor="white"
              setBackground="var(--gk-green)"
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "10px 30px",
              }}
            >
              <img
                src={enviromentMedia + item.image}
                style={{ width: "50%" }}
                alt="logo"
              />
              <div>{item.label}</div>
              <div style={{ color: "var(--yellow" }}>{item.branch.name}</div>
            </Button>
          ))}
      </div>
    </Styled>
  );
};

export default CallerSelect;
