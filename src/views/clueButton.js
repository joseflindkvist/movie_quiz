import {
  Tooltip,
  Button,
  OverlayTrigger,
  Col,
  Container,
} from "react-bootstrap";

function ClueButton(props) {
  return (
    <Col>
      <OverlayTrigger {...props} placement="top">
        <Button
          className={
            props.disabled
              ? "clue-btn-disabled btn-lg"
              : props.clueHook
              ? "clue-btn-activated btn-lg"
              : "clue-btn glow btn-lg"
          }
          id={props.id}
          variant="warning"
          onClick={props.choice}
        >
          {props.text}
        </Button>
      </OverlayTrigger>
      <div className="score">
        -{props.cluePoints} {props.cluePoints == 1 ? "point" : "points"}
      </div>
    </Col>
  );
}

export default ClueButton;
