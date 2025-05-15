import React from "react";

// eslint-disable-next-line react/prop-types
export default function Buttons({ title, onClick, className }) {
  return (
    <button
      className={`bg-[#188ba0] text-white border-2 border-[#188ba0] px-6 py-3 rounded-md font-semibold text-lg hover:bg-[#1F4C4A] hover:border-[#1F4C4A] hover:scale-105 transition duration-300 ease-in-out transform ${className}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
