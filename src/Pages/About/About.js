import React from "react";
import { toast, ToastContainer } from "react-toastify";
import PageTitle from "../Shared/PageTitle/PageTitle";
const About = () => {
  const notify = () => {
    toast('🦄 Wow so easy!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  };
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer /> <PageTitle title="About"></PageTitle>
      <h3>this is about us page</h3>
      <button onClick={notify}>Notify</button>
    </div>
  );
};

export default About;
