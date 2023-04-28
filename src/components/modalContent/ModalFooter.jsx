import React from "react";
import Button from "../formutils/Button";

function ModalFooter({ isFinalStep, handleSubmit }) {
  return (
    <div className="flex justify-end">
      <Button
        onClick={handleSubmit}
        type="submit"
        customCss="absolute bottom-0 right-0"
      >
        {isFinalStep ? "Save" : "Next"}
      </Button>
    </div>
  );
}

export default ModalFooter;
