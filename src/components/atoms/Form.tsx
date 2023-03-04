import React, { FormEvent } from "react";

interface FormProps {
  className?: string;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}

const Form: React.FC<FormProps> = ({ className = "", onSubmit, children }) => {
  return (
    <form className={className} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
