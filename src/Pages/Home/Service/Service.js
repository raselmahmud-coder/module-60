import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";
const Service = ({ service }) => {
    const { id, name, description, price, img } = service;
    const navigate = useNavigate();
  const handleNavigate = (id) => {
      navigate(`/service/${id}`);
  };
  return (
    <div className="service-container">
      <img src={img} alt="" />
      <h1> {name}</h1>
      <p>Price {price}</p>
      <p>{description}</p>
      <button onClick={() => handleNavigate(id)} className="btn btn-primary">
        Book {name}
      </button>
    </div>
  );
};

export default Service;
