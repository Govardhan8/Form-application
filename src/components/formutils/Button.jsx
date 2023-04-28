import React from "react";

function Button(props) {
  const { invert, children, customCss = "", type, onClick } = props;
  const cssClass = invert
    ? "text-primary-blue bg-primary-white border border-primary"
    : "bg-primary-blue text-primary-white";

  return (
    <>
      <button
        className={`py-2 px-4 rounded-md max-h-10 w-max ${cssClass} ${customCss}`}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}

export default Button;
