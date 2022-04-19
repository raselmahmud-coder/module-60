import React from "react";
import google from "../../../images/icon/google-icon.png";
import facebook from "../../../images/icon/facebook-icon.png";
import github from "../../../images/icon/github-icon.png";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase-init";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
const SocialLogIn = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // all conditions
  if (googleLoading || githubLoading) {
    return <Loading />;
  }
  if (googleUser || githubUser) {
    navigate(from, { replace: true });
  }
  if (googleError || githubError) {
    console.log("error happen ");
  }
  return (
    <div className="mt-2" style={{ width: "19%" }}>
      <div className="d-flex align-items-center">
        <div className="bg-primary w-100" style={{ height: "2px" }}></div>
        <p className="mt-2 px-2">OR</p>
        <div className="bg-primary w-100" style={{ height: "2px" }}></div>
      </div>
      <button
        onClick={() => signInWithGoogle()}
        className="mb-2 bg-secondary btn d-block mx-auto text-white"
      >
        Continue With{" "}
        <img className="me-2" width={25} src={google} alt="google" />
      </button>
      <button className="mb-2 bg-secondary btn d-block mx-auto text-white">
        Continue With{" "}
        <img className="me-2" width={25} src={facebook} alt="facebook" />
      </button>
      <button
        onClick={() => signInWithGithub()}
        className="bg-secondary btn d-block mx-auto text-white my-2"
      >
        Continue With{" "}
        <img className="me-2" width={25} src={github} alt="github" />
      </button>
    </div>
  );
};

export default SocialLogIn;
