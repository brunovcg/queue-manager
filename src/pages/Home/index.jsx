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

export const Home = () => {
  const history = useHistory();

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
      return history.push("/display");
    } else {
      api.get(`/info/${infos.user.slice(-1)}`).then((res) => {
        console.log(res.data)
        if (res.data.pass === infos.pass) {
          return history.push("/kitchen");
        }
      });
    }
  //  falta pegar a condição 10 pois o slice so pega 1

    reset();

    console.log(infos);
  };

  return (
    <Container>
      <div className="greenBox">
        <figure className="gk-neg">
          <img src={gokitchenNeg} />
        </figure>{" "}
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
            setColor="var(--gk-green)"
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
