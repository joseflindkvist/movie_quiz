import React, { useRef, useState } from "react";
import {
  Form,
  Button,
  Card,
  Alert,
  Container,
  Row,
  FormGroup,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import {
  getAuth,
  setPersistence,
  browserSessionPersistence,
  createUserWithEmailAndPassword,
  confirmPasswordReset,
} from "firebase/auth";
import { app } from "../firebaseConfig";

export default function Signup(props) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords not matching");
    }
    try {
      setError("");
      setLoading(true);
      setPersistence(getAuth(app), browserSessionPersistence)
        .then(() => {
          // Existing and future Auth states are now persisted in the current
          // session only. Closing the window would clear any existing state even
          // if a user forgets to sign out.
          // ...
          // New sign-in will be persisted with session persistence.
          return createUserWithEmailAndPassword(
            getAuth(app),
            emailRef.current.value,
            passwordRef.current.value,
            passwordConfirmRef.current.value
          )
            .then(function () {
              history("/mainpage");
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              // ..
            });
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
  }

  return (
    <div className="bg-image">
      <div className="bg-blur">
        <Container className="login">
          <h1 className="animate__animated animate__fadeInUp guidetitle">
            Film Quiz
          </h1>
          <Card
            style={{ width: "18rem" }}
            className="animate__animated animate__fadeInUp text-white bg-dark glow"
          >
            <Card.Body>
              <h2 className="text-center mb-4 signup">Sign Up</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label className="login-lables">Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label className="login-lables">Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Form.Group id="password-confirm">
                  <Form.Label className="login-lables">
                    Password confirmation
                  </Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordConfirmRef}
                    required
                  />
                </Form.Group>
                <Form.Group>
                  <div>
                    <p></p>
                  </div>
                </Form.Group>

                <Button
                  disabled={loading}
                  variant="warning"
                  className="w-100"
                  type="submit"
                >
                  Sign up
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Already have an account?{" "}
            {/*<Link variant="link-warning" to="/login">
          Log in
  </Link>*/}
            <a href="/login" className="link-warning">
              Log in
            </a>
          </div>
        </Container>
      </div>
    </div>
  );
}
