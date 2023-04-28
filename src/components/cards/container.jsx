import React from "react";

function container({ children }) {
  return (
    <div
      className={`w-5/6 max-w-[830px] min-h-[320px] py-4 px-6 rounded-[10px] bg-primary-white flex justify-between`}
    >
      {children}
    </div>
  );
}

export default container;
