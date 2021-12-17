import Styled from "./styles";

const Input = ({
  type,
  width = "100%",
  fieldType = "input",
  placeholder,
  datalist,
  label,
  error,
  register= ()=>{},
  name,
  ...rest
}) => {
  return (
    <Styled style={{width : width}}>
      <label >{label}</label>
      {!datalist && fieldType==="textarea" && (
        <textarea
          placeholder={placeholder}
          { ...register(name)}
          {...rest}
        />
      )}
         {!datalist &&  fieldType==="input"&&(
        <input
          type={type}
          placeholder={placeholder}
          { ...register(name)}
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
