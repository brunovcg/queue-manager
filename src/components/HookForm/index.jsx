import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";

const HookForm = ({ schema, fields, action, buttonTitle = "Submeter" }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });


  return (
    <form
      onSubmit={handleSubmit(action)}
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {fields &&
        fields.map((item, index) => (
          <Input
            error={errors[item.name]?.message}
            name={item.name}
            key={index}
            type={item.type}
            placeholder={item.placeholder}
            register={register}
            datalist={item.datalist}
            onChange={item.onChange}
          />
        ))}

      <Button
        setBackground="var(--gk-green)"
        setColor="var(--white)"
        type="submit"
        setHeight="45px"
        setWidth="100px"
        style={{marginTop: "30px"}}
      >
        {buttonTitle}
      </Button>
    </form>
  );
};

export default HookForm;
