import React, { useRef } from "react";
import { Button, Form, FormText } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const handleForm = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log('from form ' , email, password);
  };
  return (
    <Form className="w-25 mx-auto" onSubmit={handleForm}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember Me" />
        <FormText>
          <Link className="text-decoration-none" to={"/sign-up"}>Need an Account?</Link>
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
