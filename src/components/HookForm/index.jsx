import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useWindowSize } from "../../providers/windowSize";
import mobileBreakpoint from "../../configs/mobileBreakpoint";

const HookForm = ({ schema, fields, action, buttonTitle = "Submeter" }) => {
  const { width } = useWindowSize();
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
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {fields &&
        fields.map((item, index) => (
          <Input
            label={item.label}
            width={
              width <= mobileBreakpoint.width && item.widthMobile
                ? item.widthMobile
                : item.width
            }
            error={errors[item.name]?.message}
            name={item.name}
            key={index}
            fieldType={item.fieldType}
            type={item.type}
            placeholder={item.placeholder}
            register={register}
            datalist={item.datalist}
            onChange={item.onChange}
          />
        ))}

      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Button
          setBackground="var(--gk-green)"
          setColor="var(--white)"
          type="submit"
          setHeight="45px"
          setWidth="100px"
          style={{ marginTop: "10px" }}
        >
          {buttonTitle}
        </Button>
      </div>
    </form>
  );
};

export default HookForm;
