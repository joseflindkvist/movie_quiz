import { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Popover from "react-bootstrap/Popover";
import { Link, useNavigate } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../firebaseConfig";

function TopBar(props) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();
  var userEmail = "";
  if (getAuth(app).currentUser) {
    userEmail = getAuth(app).currentUser.email;
  }

  const popoverClick = (
    <Popover id={"popover-positioned-bottom"}>
      <Popover.Body>
        <strong>
          Current E-mail: <br />
        </strong>
        {userEmail}
        <br />
        <Link to="/login">
          <Button hidden={userEmail} variant="warning">
            Sign in
          </Button>
        </Link>
        <Link to="/">
          <Button hidden={userEmail} variant="warning">
            Create Account
          </Button>
        </Link>{" "}
        <Button hidden={!userEmail} variant="warning" onClick={handleLogout}>
          Log out
        </Button>
      </Popover.Body>
    </Popover>
  );

  async function handleLogout(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      signOut(getAuth(app))
        .then(() => {
          history("/login");
        })
        .catch((error) => {
          setError(error.message, error.code);
        });
    } catch {
      setError("Failed to log out");
    }
    setLoading(false);
  }

  return (
    <div>
      <Navbar bg="danger">
        <Container>
          <Navbar.Brand href="/mainpage">
            <img
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/61/61342.png"
              width="30"
              height="30"
              className="d-inline-block align-top brandNameDisplay"
            />{" "}
            <span className="brandNameDisplay">Premio</span>
          </Navbar.Brand>
          <Col xs={5} className="d-flex justify-content-around">
            <Link to="/mainpage">
              <Button variant="warning">Start</Button>
            </Link>
            <div className="vr" />
            <OverlayTrigger
              trigger="click"
              placement="bottom"
              overlay={popoverClick}
            >
              <Button variant="warning">Profil</Button>
            </OverlayTrigger>
            <div className="vr" />
            <Link to="/highscore">
              <Button variant="warning">High Scores</Button>
            </Link>
          </Col>
          <Col></Col>
        </Container>
      </Navbar>
    </div>
  );
}

export default TopBar;
