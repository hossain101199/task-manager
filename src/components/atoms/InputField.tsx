import React, { Ref } from "react";

interface InputFieldProps {
  type?: string;
  placeholder?: string;
  name?: string;
  defaultValue?: string;
  inputRef?: Ref<HTMLInputElement>;
  className?: string;
  isDisabled?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  type = "text",
  placeholder = "Placeholder",
  name = "Name",
  defaultValue = "",
  inputRef,
  className = "",
  isDisabled = false,
}) => {
  return (
    <input
      disabled={isDisabled}
      type={type}
      placeholder={placeholder}
      defaultValue={defaultValue}
      name={name}
      ref={inputRef}
      className={`bg-[#091020] font-medium text-sm text-white border-2 border-primary outline-none rounded-xl p-3 ${className}`}
    />
  );
};

export default InputField;
