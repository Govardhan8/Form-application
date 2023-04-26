import React from "react";
import RadioLabel from "./Label";

function RadioButton({ name, value, onChange }) {
  return (
    <div className="flex pr-4 items-end">
      <input
        type="radio"
        className="h-full"
        id={value}
        value={value}
        name={name}
        onChange={onChange}
      />
      <RadioLabel name={value} />
    </div>
  );
}

export default RadioButton;
