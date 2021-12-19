import Styled from "./styles";
import InputMask from "react-input-mask";


const Input = ({
  type,
  width = "100%",
  fieldType = "input",
  placeholder,
  datalist,
  label,
  error,
  register = () => {},
  name,
  mask,
  ...rest
}) => {
  return (
    <Styled style={{ width: width }}>
      <label>{label}</label>
      {!mask && !datalist && fieldType === "textarea" && (
        <textarea placeholder={placeholder} {...register(name)} {...rest} />
      )}
      {mask && (
        <InputMask
          mask={mask}
          placeholder={placeholder}
          {...register(name)}
          {...rest}
        />

      )}

      {!mask && !datalist && fieldType === "input" && (
        <input
          type={type}
          placeholder={placeholder}
          {...register(name)}
          {...rest}
        />
      )}

      {datalist && !mask && (
        <select
          {...register(name)}
          {...rest}
          id={placeholder}
          defaultValue={placeholder}
        >
          {datalist.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
      )}
      <div className="error">{error}</div>
    </Styled>
  );
};

export default Input;
