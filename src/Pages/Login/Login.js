import React, { useRef } from "react";
import { Button, Form, FormText } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase-init";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleForm = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  const navigate = useNavigate();

  if (user) {
    navigate(from, { replace: true });
  }
  function pathName(){
    if (from !== '/') {
      const fullPath = from.slice(1, from.length);
      const info = `Must be log in to visit at ${fullPath}`;
      return info;
    };
}
  return (
    <Form className="w-25 mx-auto" onSubmit={handleForm}>
      <h1>Please Log In</h1>
      <p className="text-danger">{pathName()}</p>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          ref={emailRef}
          type="email"
          placeholder="Enter email"
          required
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          ref={passwordRef}
          type="password"
          placeholder="Password"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember Me" />
        <FormText>
          <Link className="text-decoration-none" to={"/sign-up"}>
            Need an Account?
          </Link>
        </FormText>
      </Form.Group>
      <Button variant="primary" type="submit">
        Log in
      </Button>
      <Button className="ms-4" variant="primary" type="submit">
        Login with Google
      </Button>
    </Form>
  );
};

export default Login;
