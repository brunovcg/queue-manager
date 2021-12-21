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
  side,
  disabled = false,
  mask,
  ...rest
}) => {
  return (
    <Styled style={{ width: width }}>
      <label>{label}</label>
      <div style={{ width: "100%", display: "flex" }}>
        {!mask && !datalist && fieldType === "textarea" && (
          <textarea
            style={{ backgroundColor: disabled && "var(--light-grey)" }}
            placeholder={placeholder}
            {...register(name)}
            {...rest}
            disabled={disabled}
          />
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
            style={{ backgroundColor: disabled && "var(--light-grey)" }}
            disabled={disabled}
            type={type}
            placeholder={placeholder}
            {...register(name)}
            {...rest}
          />
        )}

        {datalist && !mask && (
          <select
            style={{ backgroundColor: disabled && "var(--light-grey)" }}
            disabled={disabled}
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

        {
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "10px",
            }}
          >
            {side}
          </div>
        }
      </div>

      <div className="error">{error}</div>
    </Styled>
  );
};

export default Input;
