import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase-init";
import Loading from "../Shared/Loading/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const [sendEmailVerification, sending, verifyError] =
    useSendEmailVerification(auth);
  const location = useLocation();
  if (loading || sending) {
    return <Loading />;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (error || verifyError) {
    toast.error("error happened");
  }
  const handleSendVerify = async () => {
    await sendEmailVerification();
    toast.success("send a link check your mail");
  };
  if (!user.emailVerified) {
    return (
      <>
        <ToastContainer></ToastContainer>
        <div className="d-flex justify-content-center flex-nowrap mt-5">
          <div>
            <h2 className="text-danger">Your email is not verify yet</h2>
            <h4>Please verify your email now</h4>
            <button className="btn btn-primary" onClick={handleSendVerify}>
              send verify mail
            </button>
          </div>
        </div>
      </>
    );
  }
  return children;
};

export default RequireAuth;
