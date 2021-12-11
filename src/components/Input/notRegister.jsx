import Styled from "./styles";

const InputNotRegister
= ({
  type,
  placeholder,
  datalist,
  error,
  name,
  ...rest
}) => {
  return (
    <Styled>
      {!datalist && (
        <input
          type={type}
          placeholder={placeholder}
          {...rest}
        />
      )}
      {datalist && (
        <select
          {...rest}
          id={placeholder}
          defaultValue={placeholder}
        >
          <option disabled>{placeholder}</option>
          {datalist.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>
      )}
      <div className="error">{error}</div>
    </Styled>
  );
};

export default InputNotRegister;
