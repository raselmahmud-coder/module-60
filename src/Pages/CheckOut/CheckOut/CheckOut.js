import axios from "axios";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../firebase-init";
import useServiceDetails from "../../../hooks/useServiceDetails";

const CheckOut = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetails(serviceId);
  const [user] = useAuthState(auth);


  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    const order = {
      serviceId: serviceId,
      name: e.target.name.value,
      email: e.target.email.value,
      service: e.target.service.value,
      address: e.target.address.value,
      phone: e.target.phone.value,
    };
    const response = await axios.post('https://pacific-bayou-16022.herokuapp.com/order', order);
    const { data } = response;
    if (data.insertedId) {
      toast.success("Your order is booked!", {
        id:"data_inserted"
      })
      e.target.reset()
    }
  };
  return (
    <div className="w-50 mx-auto">
      <h1>your order is {service?.name}</h1>
      <form onSubmit={handlePlaceOrder}>
        <input
          className="w-100 mb-3"
          type="text"
          id="name"
          value={user?.displayName}
          readOnly
          disabled
          placeholder="Your Name"
        />
        <input
          className="w-100 mb-3"
          type="email"
          id="email"
          value={user?.email}
          readOnly
          disabled
          placeholder="Your Email"
        />
        <input
          className="w-100 mb-3"
          type="text"
          id="service"
          placeholder="Your service"
        />
        <input
          className="w-100 mb-3"
          type="tel"
          id="phone"
          placeholder="Your Phone"
        />
        <input
          className="w-100 mb-3"
          type="text"
          id="address"
          placeholder="Your Address"
        />
        <input className="btn btn-primary" type="submit" value="Place Order" />
      </form>
    </div>
  );
};

export default CheckOut;
