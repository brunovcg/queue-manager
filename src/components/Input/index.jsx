import Styled from "./styles";

const Input = ({
  type,
  placeholder,
  datalist,
  error,
  register,
  name,
  ...rest
}) => {
  return (
    <Styled>
      {!datalist && (
        <input
          type={type}
          placeholder={placeholder}
          {...register(name)}
          {...rest}
        />
      )}
      {datalist && (
        <select
          {...register(name)}
          {...rest}
          id={placeholder}
          defaultValue={placeholder}
        >
          <option  disabled>
            {placeholder}
          </option>
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
