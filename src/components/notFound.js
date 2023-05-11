import React from "react";
import error from "../image/404.jpg";
import "../style/notfound.css";

const NotFound = () => {
  return (
    <div className="notfound">
      <img className="error" src={error} alt="#" />
    </div>
  );
};
export default NotFound;
