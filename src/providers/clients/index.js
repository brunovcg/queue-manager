import { createContext, useState, useContext, useEffect } from "react";
import kitchen1 from "../../assets/kitchen1.png";
import kitchen2 from "../../assets/kitchen2.png";
import kitchen3 from "../../assets/kitchen3.png";
import kitchen4 from "../../assets/kitchen4.png";
import kitchen5 from "../../assets/kitchen5.png";
import kitchen6 from "../../assets/kitchen6.png";
import kitchen7 from "../../assets/kitchen7.png";
import kitchen8 from "../../assets/kitchen8.png";
import kitchen9 from "../../assets/kitchen9.png";
import kitchen10 from "../../assets/kitchen10.png";

const ClientContext = createContext([]);

export const ClientProvider = ({ children }) => {
  const [client1, setClient1] = useState([]);
  const [client2, setClient2] = useState([]);
  const [client3, setClient3] = useState([]);
  const [client4, setClient4] = useState([]);
  const [client5, setClient5] = useState([]);
  const [client6, setClient6] = useState([]);
  const [client7, setClient7] = useState([]);
  const [client8, setClient8] = useState([]);
  const [client9, setClient9] = useState([]);
  const [client10, setClient10] = useState([]);

  const clients = [
    {
      kitchen: 1,
      client: "Teichi",
      logo: kitchen1,
      alt: "kitchen-1 logo",
      calls: client1,
    },
    {
      kitchen: 2,
      client: "McDonalds",
      logo: kitchen2,
      alt: "kitchen-2 logo",
      calls: client2,
    },
    {
      kitchen: 3,
      client: "Subway",
      logo: kitchen3,
      alt: "kitchen-3 logo",
      calls: client3,
    },
    {
      kitchen: 4,
      client: "Kings",
      logo: kitchen4,
      alt: "kitchen-4 logo",
      calls: client4,
    },
    {
      kitchen: 5,
      client: "Bob's",
      logo: kitchen5,
      alt: "kitchen-5 logo",
      calls: client5,
    },
    {
      kitchen: 6,
      client: "Furetti",
      logo: kitchen6,
      alt: "kitchen-6 logo",
      calls: client6,
    },
    {
      kitchen: 7,
      client: "Chinatown",
      logo: kitchen7,
      alt: "kitchen-7 logo",
      calls: client7,
    },
    {
      kitchen: 8,
      client: "Burguer King",
      logo: kitchen8,
      alt: "kitchen-8 logo",
      calls: client8,
    },
    {
      kitchen: 9,
      client: "Habbib's",
      logo: kitchen9,
      alt: "kitchen-9 logo",
      calls: client9,
    },
    {
      kitchen: 10,
      client: "Bonaparte",
      logo: kitchen10,
      alt: "kitchen-10 logo",
      calls: client10,
    },
  ];

  return <ClientContext.Provider value={{}}>{children}</ClientContext.Provider>;
};

export const useClient = () => useContext(ClientContext);
