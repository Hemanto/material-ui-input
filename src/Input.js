import { useState } from "react";
import "./styles.css";

function Input({ placeholder, defaultValue, onChange, ...props }) {
  const [value, setValue] = useState(defaultValue);

  const inputData = (e) => {
    setValue(e.target.value);
    onChange(e);
    console.log("change");
  };

  return (
    <div className="inputbox">
      <input onChange={inputData} value={value} {...props} />

      <label>{placeholder}</label>
    </div>
  );
}
export { Input };
