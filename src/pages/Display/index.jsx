import { Styled, MobileContainer } from "./styles";
import gokitchen from "../../assets/gokitchen.png";
import { ClientCard } from "../../components/ClientCard";
import { useWindowSize } from "../../providers/windowSize";
import { useState, useEffect } from "react";
import { useAuth } from "../../providers/auth";
import { Redirect } from "react-router";
import { Link, useParams } from "react-router-dom";
import mobileBreakpoint from "../../configs/mobileBreakpoint";
import { useKitchen } from "../../providers/kitchens";

export const Display = () => {
  const { width } = useWindowSize();
  const { token } = useAuth();
  const [selectInfo, setSelectInfo] = useState("");
  const [timer, setTimer] = useState(30);

  const { kitchens, getAllKitchens } = useKitchen();
  const { branch_id } = useParams();

  const handleTimer = () => {
    if (timer > 0) {
      setTimer(timer - 1);
    }
    if (timer === 0) {
      setTimer(30);
    }
  };

  useEffect(() => {
    getAllKitchens();
    const interval = setInterval(() => {
      getAllKitchens();
      setTimer(30);
    }, 30000);
    return () => clearInterval(interval);
    /*eslint-disable-next-line*/
  }, [token]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleTimer();
    }, 1000);
    return () => clearInterval(interval);
    /*eslint-disable-next-line*/
  }, [timer]);

  if (token === "") {
    return <Redirect to="/" />;
  }

  return (
    <>
      {width > mobileBreakpoint.width && (
        <Styled>
          <header>
            <p className="text">
              Entregador, verifique pelo restaurante se o pedido está pronto.
              Caso esteja, peça autorização de entrada.
            </p>
            <div className="countDown">
              <p className="update-text">Atualiza em:</p>
              <div className="timer">
                {timer}
                <span style={{ color: "white", fontSize: "15px" }}>seg</span>
              </div>
            </div>

            <Link to="/dashboard">
              <figure>
                <img src={gokitchen} alt="gk-logo" />
              </figure>
            </Link>
          </header>

          <main>
            {kitchens
              .filter((kit) => kit.branch.id === Number(branch_id))
              .map((item) => (
                <ClientCard
                  key={item.id}
                  kitchen={item.code}
                  client={item.label}
                  logo={item.image}
                  alt={`logo_${item.label}`}
                  calls={item.orders}
                />
              ))}
          </main>
        </Styled>
      )}

      {width < mobileBreakpoint.width && (
        <MobileContainer>
          <div className="selectBox">
            <Link to="/dashboard">
              <figure>
                <img src={gokitchen} alt="gk-logo" />
              </figure>
            </Link>
            <select
              name="clients"
              onChange={(evt) => setSelectInfo(evt.target.value)}
            >
              <option hidden>Escolha</option>
              {kitchens.map((item, index) => (
                <option key={index} value={item.label}>
                  {item.label}
                </option>
              ))}
            </select>
          </div>
          <div className="callBox">
            {kitchens
              .filter((item) => item.label === selectInfo)
              .map((item) => (
                <ClientCard
                  key={item.id}
                  kitchen={item.code}
                  client={item.label}
                  logo={item.image}
                  alt={`logo_${item.label}`}
                  calls={item.orders}
                />
              ))}
          </div>
        </MobileContainer>
      )}
    </>
  );
};
