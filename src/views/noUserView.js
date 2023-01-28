import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import { app } from "../firebaseConfig";

export default function NoUser() {
  const history = useNavigate();



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
              <h3 className="text-center mb-4 signup">
                You need to create an account to access Film Quiz.
              </h3>
              <Link to="/">
                <Button variant="warning" className="nousersignupbutton">
                  Sign up
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="warning" className="w-100">
                  Already a user? Log in here
                </Button>
              </Link>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </div>
  );
}
