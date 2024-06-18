import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import "./button.css"; // Import the CSS file

const BackButton = ({ destination = "/home" }) => {
  return (
    <div className="flex">
      <Link
        to={destination}
        className="shake px-4 py-1 flex gap-3 items-center rounded-lg w-fit text-slate-800 border-sky-800 border hover:bg-slate-800 hover:text-white"
      >
        <div className="text-lg">Back to home</div>
        <div>
          <BsArrowLeft className="text-2xl" />
        </div>
      </Link>
    </div>
  );
};

export default BackButton;
