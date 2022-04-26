import React from "react";
import useServices from "../../hooks/useServices";

const ManageServices = () => {
  const [services, setServices] = useServices();
  const handleDelete = (id) => {
    const proceed = window.confirm("are you sure want to delete");
    if (proceed) {
      fetch(`https://pacific-bayou-16022.herokuapp.com/service/${id}`, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        });
    }
  };
  return (
    <div className="w-50 mx-auto">
      <h2>Manage Your Services</h2>
      {services.map((service) => (
        <div key={service._id}>
          <h3>
            {service?.name}{" "}
            <button onClick={() => handleDelete(service._id)}>X</button>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
