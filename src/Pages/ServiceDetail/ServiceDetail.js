import React from "react";
import { Link, useParams } from "react-router-dom";
import useServiceDetails from "../../hooks/useServiceDetails";
import PageTitle from "../Shared/PageTitle/PageTitle";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetails(serviceId)
  return (
    <div>
      <PageTitle title="Service" />
      <h1>You are book about: {service.name}</h1>
      <div className="text-center">
        <button className="btn btn-primary">
          <Link to={`/checkout/${serviceId}`} className="text-white text-decoration-none">
            Proceed check out
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ServiceDetail;
