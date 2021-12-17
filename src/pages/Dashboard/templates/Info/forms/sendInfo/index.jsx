import * as yup from "yup";
import HookForm from "../../../../../../components/HookForm";
import Styled from "./styles";
import { useInfo } from "../../../../../../providers/infos";

const SendInfoForm = () => {
  const { createInfo } = useInfo();

  const schema = yup.object().shape({
    title: yup.string().required("Título Necessário"),
    message: yup
      .string()
      .required("Mensagem Necessária")
      .max(90, "No máximo 90 caracteres"),
    priority: yup.string().required("Prioridade Necessária"),
  });

  const fields = [
    {
      name: "title",
      type: "text",
      placeholder: "Digite o título",
      width: "50%",
      widthMobile: "100%",
    },
    {
      width: "50%",
      widthMobile: "100%",
      label: "Escolha a Prioridade:",
      name: "priority",
      datalist: ["Baixa", "Média", "Alta"],
      placeholder: "Digite o texto",
    },
    {
      name: "message",
      fieldType: "textarea",
      placeholder: "Digite o texto",
    },
  ];

  const action = ({ title, priority, message }) => {
    const data = {
      priority,
      message,
      title,
    };

    createInfo(data);
  };

  return (
    <Styled>
      <div className="message-send">
        <div className="send-box-title">Enviar Mensagem</div>
        <div className="message-send-box">
          <HookForm schema={schema} fields={fields} action={action} />
        </div>
      </div>
    </Styled>
  );
};

export default SendInfoForm;
