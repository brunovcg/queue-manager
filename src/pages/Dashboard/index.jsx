import Styled from "./styles";
import Superuser from "./superuser";
import User from "./user";
import Staff from "./staff";
import Header from "../../components/Header"
import { useAuth } from "../../providers/auth";
import { Redirect } from "react-router-dom";

export const Dashboard = () => {

  const { userType, token } = useAuth();

  if (token === "") {
    return <Redirect to="/" />;
  }

 const menu = null


  return (
    <Styled>
      <Header menu={menu}/>

      <main>
      {userType === "superuser" ? (
        <Superuser />
      ) : userType === "staff" ? (
        <Staff />
      ) : (
        <User />
      )}
      </main>

    </Styled>
  );
};
