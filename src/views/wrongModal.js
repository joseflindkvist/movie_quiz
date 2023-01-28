import Modal from "react-bootstrap/modal";
import Button from "react-bootstrap/button";
import { Link } from "react-router-dom";

function WrongModal(props) {
  return (
    <Modal
      {...props}
      className="wrong-modal"
      // show={showWrong}
      // onHide={handleWrongClose}
      backdrop="static"
      centered
    >
      <Modal.Header>
        <Modal.Title>No, that wasn't quite right...</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        We were looking for <b>{props.correct}</b>...
      </Modal.Body>
      <Modal.Footer className="col">
        {" "}
        <div className="col-sm-8">
          Your current total score: {props.totalscore}
        </div>
        <Link to={props.questioncounter === 5 ? "/result" : "/quiz"}>
          <Button
            variant="dark"
            onClick={props.onClick}
            //onClick={() => {
            //handleWrongClose();
            //goToNextACB()}}
          >
            {props.questioncounter !== 5 ? "Next question" : "Show result"}
          </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
}

export default WrongModal;
