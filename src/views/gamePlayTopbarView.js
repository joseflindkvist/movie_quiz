import { ProgressBar } from "react-bootstrap";
export default function GamePlayTopbarView(props) {
  return (
    <div>
      <div className="gamePlay-topbar">
        <div className="currentgenre">
          {" "}
          {/* empty div for alignment, DO NOT REMOVE*/}{" "}
        </div>
        <div className="currentgenre">
          <b>Current genre: {props.genre}</b>
        </div>

        <div className="stopwatch">
          {" "}
          <b>
            Time: {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)}:
            {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)}
          </b>
        </div>
      </div>

      <div className="progress score">
        {/*Progress bar*/}
        <ProgressBar
          variant="danger"
          now={(props.questionCounter / 5) * 100}
          label={"Question " + props.questionCounter}
        ></ProgressBar>
      </div>
    </div>
  );
}
