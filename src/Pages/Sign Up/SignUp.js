import React from "react";
import { Button, Form, FormText } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase-init";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const handleForm = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    createUserWithEmailAndPassword(email, password);
  };
  const navigate = useNavigate();
  if (user) {
    navigate('/');
  }

  return (
    <>
      <Form className="w-25 mx-auto" onSubmit={handleForm}>
        <h1>Please Sign Up</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Enter name" />
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
          {error && <p>Error: {error.message}</p>}
          {loading && <p>Loading...</p>}
          {user && <p>Register User {user.user.email}</p>}
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      <Button className="ms-4" variant="primary" type="submit">
        Sign Up with Google
      </Button>
      </Form>
    </>
  );
};

export default SignUp;
