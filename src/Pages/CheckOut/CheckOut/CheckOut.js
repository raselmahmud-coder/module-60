import React from "react";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  const navigate = useNavigate();
  const handleBtn = () => {
    navigate("/addservice");
  };
  return (
    <div>
      <h1>Please check out your booking</h1>
      <button onClick={handleBtn} className={"btn btn-primary"}>
        Click here
      </button>
    </div>
  );
};

export default CheckOut;
