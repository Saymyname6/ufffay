import React from "react";

const Form = ({ children, className, onSubmit }) => {
  return (
    <form noValidate onSubmit={onSubmit} className={`form ${className || ""}`}>
      {children}
    </form>
  );
};

export default Form;
