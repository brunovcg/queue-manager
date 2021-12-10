import { Styled } from "./styles";
import gokitchenNeg from "../../assets/gokitchen-neg.png";
import Button from "../../components/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { useAuth } from "../../providers/auth";
import Input from "../../components/Input";

export const Home = () => {
  const { getLogin, token } = useAuth();

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
    const data = {
      username,
      password,
    };
    let checkLogin = getLogin(data);

    if (checkLogin) {
      reset();
    }
  };

  if (token !== "") {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Styled>
      <div className="greenBox">
        <figure className="gk-neg">
          <img src={gokitchenNeg} alt="gk img" />
        </figure>
      </div>
      <form className="whiteBox" onSubmit={handleSubmit(onSubmitFunction)}>
        <h1>Gerenciador de Pedidos</h1>
        <h2>Acesse sua conta</h2>
        <h3>Digite seu usuário e sua senha</h3>
        <p>
          Em caso de perda de senha, solicitar recuperação <br /> pelo email
          contato@gokitchen.com.br.
        </p>

        <div className="inputBox">
          <Input
            placeholder="Digite seu usuário"
            type="text"
            name="username"
            register={register}
            error={errors.username?.message}
          />

          <Input
            type="password"
            placeholder="Digite sua senha"
            name="password"
            register={register}
            error={errors.password?.message}
          />
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
    </Styled>
  );
};
