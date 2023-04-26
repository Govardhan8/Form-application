import React from "react";
import InputField from "./InputField";

function DualSlot({ data }) {
  return (
    <div className="grid grid-cols-2 gap-6 items-end">
      {data.map((slot, index) => {
        return <InputField key={index} {...slot} />;
      })}
    </div>
  );
}

export default DualSlot;
