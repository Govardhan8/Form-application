import React from "react";

function ModalHeader({ step = "Step 1" }) {
  return (
    <div className="flex justify-between items-end">
      <h2 className="text-xl">Create a job</h2>
      <p className="font-medium text-base">{step}</p>
    </div>
  );
}

export default ModalHeader;
