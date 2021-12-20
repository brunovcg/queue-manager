import { createContext, useState, useContext } from "react";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useAuth } from "../auth";
import { useWindowSize } from "../windowSize";
import mobileBreakpoint from "../../configs/mobileBreakpoint";

const OrderContext = createContext([]);

export const OrderProvider = ({ children }) => {
  const [inputInfo, setInputInfo] = useState("");
  const [orders, setOrders] = useState([]);
  const { configs } = useAuth();
  const { width } = useWindowSize();


  const getOrders = (kitchenId) => {
    api()
      .get(`kitchens/${kitchenId}/orders/`, configs)
      .then((res) => {
        setOrders(res.data);
      });
  };

  const postOrder = (kitchenId) => {
    if (inputInfo !== "") {
      const data = { number: inputInfo };
      api()
        .post(`kitchens/${kitchenId}/orders/`, data, configs)
        .then((response) => {
          width < mobileBreakpoint.width.toString() &&
            toast.info(`Senha ${inputInfo} adicionada`);
          setInputInfo("");
          setOrders([...orders, response.data]);
        }).catch((err)=> {if (err.response.status === 409){
            setInputInfo("")
            toast.error("Senha duplicata.")

        }});
    } else {
      toast.error("Precisa digitar a senha");
    }
  };

  const deleteOrder = (kitchenId, orderId, num) => {
    api()
      .delete(`kitchens/${kitchenId}/orders/${orderId}/`, configs)
      .then((_) => {
        setOrders(orders.filter((item) => item.id !== orderId));
        toast.success(`Senha ${num} apagada!`);
      });
  };

  return (
    <OrderContext.Provider
      value={{
        getOrders,
        postOrder,
        deleteOrder,
        inputInfo,
        setInputInfo,
        orders,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => useContext(OrderContext);
