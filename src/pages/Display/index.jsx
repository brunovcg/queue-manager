import { Container } from "./styles";
import gokitchen from "../../assets/gokitchen.png";
import clients from "../../utils/clientList";
import { ClientCard } from "../../components/ClientCard";



export const Display = () => {
  return (
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
  );
};
