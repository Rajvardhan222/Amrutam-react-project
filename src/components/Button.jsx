import React from "react";

function Button({
  children,
  bgColor = "",
  borderColor = "",
  className = "",
  ...props
}) {
  return (
    <button className={`${bgColor} ${borderColor} {...props} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
