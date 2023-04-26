import React from "react";

function Label({ name }) {
  return (
    <label htmlFor={name} className="text-holder-gray text-sm pl-1">
      {name}
    </label>
  );
}

export default Label;
