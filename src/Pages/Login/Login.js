import axios from "axios";
import React, { useRef } from "react";
import { Button, Form, FormText } from "react-bootstrap";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase-init";
import Loading from "../Shared/Loading/Loading";
import PageTitle from "../Shared/PageTitle/PageTitle";
import SocialLogIn from "./SocialLogIn/SocialLogIn";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const location = useLocation();
  const [sendPasswordResetEmail, PassSending, passResetError] =
    useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  const [LoginUser] = useAuthState(auth);
  const from = location.state?.from?.pathname || "/";
  if (loading || PassSending) {
    return <Loading />;
  }
  const handleForm = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post(`https://pacific-bayou-16022.herokuapp.com/login`, { email });
    localStorage.setItem("accessToken", data);
    navigate(from, { replace: true })
  };
  if (user || LoginUser) {
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_CENTER,
      toastId: "user_success",
    });
    // navigate(from, { replace: true });
  }
  let errorElement;
  if (error || passResetError) {
    errorElement = <p className="text-danger mb-2">{error?.code} </p>;
  }
  function pathName() {
    if (from !== "/") {
      const fullPath = from.slice(1, from.length);
      const info = `Must be log in to visit at ${fullPath}`;
      return info;
    }
  }
  return (
    <div className="d-flex flex-column align-items-center">
      <PageTitle title="Log in" />
      <Form className="w-25" onSubmit={handleForm}>
        <h1>Please Log In</h1>
        <p className="text-danger">{pathName()}</p>
        {errorElement}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Me" />
          <FormText className="d-flex justify-content-between">
            <Link className="text-decoration-none" to={"/sign-up"}>
              Need an Account?
            </Link>
            <p
              onClick={async () => {
                await sendPasswordResetEmail();
                alert("sent email");
              }}
              role="button"
              className="text-primary"
            >
              Forget Password?
            </p>
          </FormText>
        </Form.Group>
        <Button variant="primary" type="submit">
          Log in
        </Button>
      </Form>
      <SocialLogIn />
    </div>
  );
};

export default Login;
