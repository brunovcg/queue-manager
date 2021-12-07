import { Container } from "./styles";
import gokitchenNeg from "../../assets/gokitchen-neg.png";
import Button from "../../components/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory, Redirect } from "react-router-dom";
import {useToken} from "../../providers/token"
import { useEffect } from "react";


export const Home = () => {

  const {getToken, token, userId, userType, setUserType} = useToken()

  const history = useHistory();

  const schema = yup.object().shape({
    username: yup.string().required("Usuário Necessário"),
    password: yup.string().required("Senha é necessária"),
  });


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = ({ username, password }) => {
    const data= {
      username,
      password,
    };
    getToken(data)
    reset();
  };

  if (token !== "") {
    return <Redirect to="/dashboard" />;
  }


  return (
    <Container>
      <div className="greenBox">
        <figure className="gk-neg">
          <img src={gokitchenNeg} alt="gk img" />
        </figure>
      </div>
      <form className="whiteBox" onSubmit={handleSubmit(onSubmitFunction)}>
        <h2>Acesse sua conta</h2>
        <h3>Escolha seu usuário e digite sua senha</h3>
        <div className="inputBox">
          <input placeholder="Digite seu usuário" type="text" {...register("username")}/>
 
          <div className="error">{errors.username?.message}</div>
          <input
            type="password"
            placeholder="Digite sua senha"
            {...register("password")}
          />
          <div className="error">{errors.password?.message}</div>
        </div>
        <div className="buttonBox">
          <Button
            setBackground="var(--gk-green)"
            setColor="var(--white)"
            type="submit"
            setHeight="45px"
            setWidth="90px"
          >
            Entrar
          </Button>
        </div>
      </form>
    </Container>
  );
};
