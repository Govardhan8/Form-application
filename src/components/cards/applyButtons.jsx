import React from "react";
import Button from "../formutils/Button";

function ApplyButtons() {
  return (
    <div className="flex gap-6">
      <Button>Apply Now</Button>
      <Button invert>External Apply</Button>
    </div>
  );
}

export default ApplyButtons;
