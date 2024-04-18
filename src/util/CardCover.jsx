import React from "react";

function CardCover({ children, className = "" }) {
  return (
    <div
      className={`w-full bg-gradient-to-r from-[#F4F7EC] to-[#FBFCFB] rounded-tl-lg rounded-tr-lg h-16 ${className}`}
    >
      {children}
    </div>
  );
}

export default CardCover;
