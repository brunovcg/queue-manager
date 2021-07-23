import { Container, MobileContainer } from "./styles";
import gokitchen from "../../assets/gokitchen.png";
import clients from "../../utils/clientList";
import { ClientCard } from "../../components/ClientCard";
import { useWindowSize } from "../../providers/windowSize";
import { useState } from "react";

export const Display = () => {
  const { width } = useWindowSize();

  const [selectInfo, setSelectInfo] = useState("");

  return (
    <>
      {width > "500" && (
        <Container>
          <header>
            <p>
              Entregador verifique pela lista do restaurante se o pedido já está
              pronto. Caso esteja, peça autorização de entrada na portaria
            </p>
            <div className="countDown">
              <p>Atualiza em:</p>
              <div>00:15</div>
            </div>
            <figure>
              <img src={gokitchen} alt="gk-logo" />
            </figure>
          </header>

          <main>
            {clients.map((item) => (
              <ClientCard
                key={item.kitchen}
                kitchen={item.kitchen}
                client={item.client}
                logo={item.logo}
                alternative={item.alt}
                calls={item.calls}
              />
            ))}
          </main>
        </Container>
      )}

      {width < 500 && (
        <MobileContainer>
          <div className="selectBox">
            <select
              name="clients"
              onChange={(evt) => setSelectInfo(evt.target.value)}
            >
              <option value="" disabled selected hidden>Escolha o Cliente</option>
              {clients.map((item, index) => (
                <option key={index} value={item.client}>
                  {item.client}
                </option>
              ))}
            </select>
          </div>
          <div className="callBox">
            {clients
              .filter((item) => item.client === selectInfo)
              .map((item) => (
                <ClientCard
                  key={item.kitchen}
                  kitchen={item.kitchen}
                  client={item.client}
                  logo={item.logo}
                  alternative={item.alt}
                  calls={item.calls}
                />
              ))}
          </div>
        </MobileContainer>
      )}
    </>
  );
};
