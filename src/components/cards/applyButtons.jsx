import React from "react";
import Button from "../formutils/Button";

function ApplyButtons({ applyType }) {
  return (
    <div className="flex gap-6">
      {applyType.toLowerCase() !== "external apply" && (
        <Button>Apply Now</Button>
      )}
      {applyType.toLowerCase() !== "quick apply" && (
        <Button invert>External Apply</Button>
      )}
    </div>
  );
}

export default ApplyButtons;
