import { Container } from "./styles";
import gokitchenNeg from "../../assets/gokitchen-neg.png";
import Button from "../../components/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { users } from "../../utils/userList";
import { useClient } from "../../providers/clients";
import { useHistory } from "react-router-dom";
import { api } from "../../services/api";
import { useAuth } from "../../providers/auth";

export const Home = () => {
  const history = useHistory();
  const { setMasterAuth, setClientAuth} = useAuth();

  const schema = yup.object().shape({
    user: yup.string().required("Usuário Necessário"),
    pass: yup.string().required("Senha é necessária"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = ({ user, pass }) => {
    const infos = {
      user,
      pass,
    };

    if (infos.user === "Master" && infos.pass === "kitchen2020") {
      localStorage.setItem("@GK:Master", JSON.stringify("Master"));
      setMasterAuth(true);
      return history.push("/display");
    } else {
      const kitchenId = infos.user.slice(infos.user.length === 4 ? -1 : -2);

      api.get(`/info/${kitchenId}`).then((res) => {
        console.log(res.data);
        if (res.data.pass === infos.pass) {
          localStorage.setItem("@GK:User", JSON.stringify(kitchenId));
          setClientAuth(true);
          return history.push("/kitchen");
        }
      });
    }

    reset();
  };

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
          <select type="text" {...register("user")}>
            {users.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <div className="error">{errors.user?.message}</div>
          <input
            type="password"
            placeholder="Digite sua senha"
            {...register("pass")}
          />
          <div className="error">{errors.pass?.message}</div>
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
