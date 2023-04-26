import React from "react";

function ModalFooter({ isFinalStep, handleSubmit }) {
  return (
    <div className="flex justify-end">
      <button
        onClick={handleSubmit}
        type="submit"
        className="absolute bottom-0 right-0 bg-primary text-modal-white px-4 py-2 rounded-md"
      >
        {isFinalStep ? "Save" : "Next"}
      </button>
    </div>
  );
}

export default ModalFooter;
