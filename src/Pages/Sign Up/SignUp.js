import React from "react";
import { Button, Form, FormText } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUp = () => {
  const handleForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email);
  };
  return (
    <>
      <Form className="w-25 mx-auto" onSubmit={handleForm}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Accept Our Policy" />
          <FormText>
            Already have an Account?{" "}
            <Link className="text-decoration-none" to={"/login"}>
              Login
            </Link>
          </FormText>
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
      <Button className="ms-4" variant="primary" type="submit">
        Login with Google
      </Button>
    </>
  );
};

export default SignUp;
