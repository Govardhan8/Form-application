import React from "react";
import RadioButton from "./RadioButton";

function InputField({
  name,
  errorMessage,
  required,
  placeholder,
  radioButtons,
  label,
  onChange,
  value,
  applyType,
  others,
}) {
  return (
    <div className="flex flex-col pt-6 text-sm">
      {label && (
        <label htmlFor={name} className="pb-1">
          {label}
          {required && <span className="text-primary-red">*</span>}
        </label>
      )}
      {radioButtons ? (
        <div className="flex pt-2">
          {radioButtons.map(({ value, name }, index) => {
            return (
              <RadioButton
                key={index}
                value={value}
                name={name}
                onChange={onChange}
                applyType={applyType}
                {...others}
              />
            );
          })}
        </div>
      ) : (
        <input
          name={name}
          className="border border-primary-gray text-secondary-gray rounded-[5px] px-3 py-2 text-sm"
          placeholder={placeholder}
          type="text"
          onChange={onChange}
          value={value}
          {...others}
        />
      )}
      {errorMessage && (
        <span className="text-primary-red text-xs">{errorMessage}</span>
      )}
    </div>
  );
}

export default InputField;
