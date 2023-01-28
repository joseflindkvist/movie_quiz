import Modal from "react-bootstrap/modal";
import Button from "react-bootstrap/button";
import { Link } from "react-router-dom";

function CorrectModal(props) {
  return (
    <Modal {...props} className="correct-modal" backdrop="static" centered>
      <Modal.Header>
        <Modal.Title>Yes, that was correct!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        We were looking for <b>{props.correct}</b>, just as you guessed. You
        recieved {props.score} points for this question, good job!
      </Modal.Body>
      <Modal.Footer>
        {" "}
        <div className="col-sm-8">
          Your current total score: {props.totalscore + props.score}
        </div>
        <Link to={props.questioncounter === 5 ? "/result" : "/quiz"}>
          <Button variant="success" onClick={props.onClick}>
            {props.questioncounter === 5 ? "Show result" : "Next movie"}
          </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
}

export default CorrectModal;
