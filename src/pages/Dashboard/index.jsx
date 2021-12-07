import Styled from "./styles";
import Superuser from "./superuser";
import User from "./user";
import Staff from "./staff";
import { useToken } from "../../providers/token";
import { Redirect } from "react-router-dom";
const Dashboard = () => {

  const { userType, token } = useToken();

  // if (token === "") {
  //   return <Redirect to="/" />;
  // }

  return (
    <Styled>
      {userType === "superuser" ? (
        <Superuser />
      ) : userType === "staff" ? (
        <Staff />
      ) : (
        <User />
      )}
    </Styled>
  );
};

export default Dashboard;
