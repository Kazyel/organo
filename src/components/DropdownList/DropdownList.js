import "./DropdownList.css";

export const DropdownList = (props) => {
  const changeFunc = (event) => {
    props.onAltered(event.target.value);
  };

  return (
    <div className="dropdown">
      <label>{props.label}</label>
      <select
        required={props.required}
        value={props.value}
        onChange={changeFunc}
      >
        <option value="" hidden>
          {props.placeholder}
        </option>
        {props.items.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};
