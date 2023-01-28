import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function HelpModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="help-modal">
        <Modal.Title className="title-text" id="contained-modal-title-vcenter">
          Let's try to make things a bit clearer...
        </Modal.Title>
        <Button
          className="close-btn btn-lg"
          variant="dark"
          onClick={props.onHide}
        >
          <b>
            <i className="bi bi-x-circle-fill"></i>
          </b>
        </Button>
      </Modal.Header>
      <Modal.Body className="help-modal">
        <h4>
          <b>Step 1</b>
        </h4>
        <p>
          <b>
            Open your prefered clue by clicking one of the{" "}
            <Button className="clue-btn glow btn-sm" variant="warning">
              clue
            </Button>{" "}
            buttons on the bottom left.
          </b>
          <br />
          The different clues will cost you different amout of points, so choose
          carefully! If you can't make a guess based on the release year, a
          quote from the movie or a short plot, you can choose to see an image
          from the movie. The image won't be available until you've opened all
          the other clues tho!
        </p>
        <p>
          <br />
        </p>
        <h4>
          <b>Step 2</b>
        </h4>
        <p>
          <b>
            When you're ready to make a guess, choose one of the alternatives on
            the right.
          </b>
          <br />
          If you guessed right, you'll recieve points based on how many clues
          you've opened. If you guessed wrong, you won't get any points at
          all...
        </p>
        <p>
          <br />
        </p>
        <h4>
          <b>Good to know...</b>
        </h4>
        <p>
          <b>All clues aren't available for all movies</b>
          <br />
          All clues aren't available for all movies. This might make it a bit
          harder for you to guess but you'll get more points for using less
          clues!
        </p>
        <p>
          <b>Current score & total score</b>
          <br />
          You can, at all times, see your current score for a question below the
          answer alternatives and the time for your run at the top of the page.
          You will be able to see your current <i>total score</i> for the run
          every time you make a movie guess.
        </p>
      </Modal.Body>
      <Modal.Footer className="help-modal">
        <Button variant="warning" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default HelpModal;
