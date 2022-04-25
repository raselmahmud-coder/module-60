import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PageTitle from "../Shared/PageTitle/PageTitle";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({})
  useEffect(() => {
    fetch(`http://localhost:5000/service/${serviceId}`)
      .then(res => res.json())
    .then(data => setService(data))
  },[serviceId])
  return (
    <div>
      <PageTitle title="Service" />
      <h1>You are book about: {service.name}</h1>
      <div className="text-center">
        <button className="btn btn-primary">
          <Link to={"/checkout"} className="text-white text-decoration-none">
            Proceed check out
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ServiceDetail;
