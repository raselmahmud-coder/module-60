import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
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
    // toast("error happened");
    toast.error("Error Notification !", {
      position: toast.POSITION.TOP_LEFT,
      toastId: "auth_error",
    });
  }
  const handleSendVerify = async () => {
    await sendEmailVerification();
    // toast("We've send a link check your mailbox");
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_CENTER,
      toastId: "auth_success",
    });
  };
  if (!user.emailVerified) {
    return (
      <>
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
