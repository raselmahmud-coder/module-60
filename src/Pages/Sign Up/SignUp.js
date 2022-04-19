import React, { useEffect, useState } from "react";
import { Button, Form, FormText } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase-init";
import SocialLogIn from "../Login/SocialLogIn/SocialLogIn";
import Loading from "../Shared/Loading/Loading";
import PageTitle from "../Shared/PageTitle/PageTitle";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, UserCreateError] =
    useCreateUserWithEmailAndPassword(auth, {
      sendEmailVerification: true,
    });
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [navigate, user]);
  const [updateProfile, updating, error] = useUpdateProfile(auth);
  if (loading || updating) {
    return <Loading />;
  }
  const handleForm = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <PageTitle title="Sign Up" />
      <Form className="w-25" onSubmit={handleForm}>
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
          <Form.Check
            onClick={() => setAgree(!agree)}
            className={agree ? "text-primary" : "text-danger"}
            type="checkbox"
            label="Accept Our Policy"
          />
          <FormText>
            Already have an Account?{" "}
            <Link className="text-decoration-none" to={"/login"}>
              Login
            </Link>
          </FormText>
          {
            <p className="text-danger">
              {UserCreateError?.code || error?.code}
            </p>
          }
          {loading && <p>Loading...</p>}
          {user && <p>Register User {user?.user?.email}</p>}
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!agree}>
          Sign Up
        </Button>
      </Form>
      <SocialLogIn />
    </div>
  );
};

export default SignUp;
