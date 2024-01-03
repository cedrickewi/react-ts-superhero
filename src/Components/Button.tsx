import React from "react";
import Spinner from "./Spinner";

type ButtonProps = {
  text: string;
  color?: string;
  classname?: string;
  onClick?: () => void;
  secondary?: boolean;
  loading?: boolean;
};

const Button = ({
  text = "Button",
  color,
  classname,
  secondary,
  loading = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`flex justify-center py-2 px-2 rounded-full text-white border-2 border-white bg-myBlue hover:${
        secondary ? "bg-myBlue" : "bg-myPink"
      } transition-all hover:drop-shadow-lg ${
        secondary ? "bg-myPink" : ""
      } ${classname} ${loading && "cursor-wait"} `}
      disabled={loading}
      onClick={onClick}
    >
      {loading ? <Spinner /> : text}
    </button>
  );
};

export default Button;
