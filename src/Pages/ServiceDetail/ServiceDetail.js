import React from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  return (
    <div>
      <h1>this is details page for id {serviceId}</h1>
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
