import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import axiosPrivate from "../../Api/AxiosPrivate";
import auth from "../../firebase-init";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    const getOrders = async () => {
      const email = user?.email;
      try {
        const { data } = await axiosPrivate.get(
          `http://localhost:5000/orders?email=${email}`
        );
        setOrders(data);
      } catch (error) {
        console.log(error.response.status);
        if (
          error.response.status === 401 ||
          error.response.status === 403 ||
          error.response.status === 404
        ) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getOrders();
  }, [navigate, user?.email]);
  return (
    <div>
      <h1>Your Orders {orders?.length}</h1>
    </div>
  );
};

export default Orders;
