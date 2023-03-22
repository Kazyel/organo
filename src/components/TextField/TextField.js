import "./TextField.css";

export const TextField = (props) => {
  const placeholder = props.placeholder;

  const changeFunc = (event) => {
    props.onAltered(event.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{props.label}</label>
      <input
        value={props.value}
        onChange={changeFunc}
        required={props.required}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;
