import React, { useState, useEffect, render, useMemo } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Tooltip,
  OverlayTrigger,
  ModalBody,
} from "react-bootstrap";
import HelpModal from "./helpModal";
import WrongModal from "./wrongModal";
import CorrectModal from "./correctModal";

function GamePlayInputView(props) {
  const [showHelp, setHelpShow] = useState(false);
  const [showCorrect, setCorrectShow] = useState(false); // VIEW
  const [showWrong, setWrongShow] = useState(false); // VIEW

  const [answers, setAnswers] = useState();

  var answersList = props.possibleAnswers;
  // if props.possibleAnswers returns empty list (first renders), return an array with correct length so that
  if (props.possibleAnswers.length !== 5) {
    answersList = ["One", "Two", "Three", "Four", "Five"];
  }
  const memoizedShuffle = useMemo(shuffleAnswers, answersList);

  function shuffleAnswers() {
    return [...answersList].sort(() => {
      return Math.random() - 0.5;
    });
  }

  const handleCorrectClose = () => {
    setCorrectShow(false);
  };
  const handleCorrectShow = () => {
    setCorrectShow(true);
  };

  const handleWrongClose = () => {
    setWrongShow(false);
  };
  const handleWrongShow = () => {
    setWrongShow(true);
  };

  function checkAnswerACB(event) {
    if (event.target.textContent == props.correct) {
      handleCorrectShow();
      props.updateTotalScore(props.score);
    } else {
      handleWrongShow();
      //props.updateTime(props.time);
    }
  }

  function makeButton(data, i) {
    return (
      <Button
        key={i}
        id="answers"
        className="clue-btn glow"
        variant="warning"
        onClick={checkAnswerACB}
      >
        {data}
      </Button>
    );
  }

  function goToNextACB() {
    // update hooks controlling answers and clues
    props.onNextQuestion(props.questionCounter + 1);
    props.updateQuestion();
    //reset the clue area
    props.clueReset();
  }

  return (
    <div>
      <div className="question-content">
        {/* RIGHT AREA CONTAINING THE QUESTION AND POSSIBLE ANSWERS */}
        <div className="col align-self-center">
          <div className="title-text">
            <h2>Guess the movie</h2>
          </div>

          <div className="buttons animate__animated animate__pulse d-grid gap-2 col-6 mx-auto">
            {memoizedShuffle.map((data, i) => makeButton(data, i), this)}
          </div>
          <div className="score">
            Current points for this question: {props.score}
          </div>

          {/*Help button showing help modal*/}
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 10, hide: 0 }}
            overlay={<Tooltip>Help</Tooltip>}
          >
            <Button variant="dark" onClick={() => setHelpShow(true)}>
              <i className="bi bi-question-circle"></i>
            </Button>
          </OverlayTrigger>

          <HelpModal show={showHelp} onHide={() => setHelpShow(false)} />
        </div>

        {/* MODAL SHOWED WHEN YOU CHOOSE THE RIGHT ANSWER */}
        <CorrectModal
          show={showCorrect}
          onHide={handleCorrectClose}
          correct={props.correct}
          onClick={() => {
            handleCorrectClose();
            goToNextACB();
          }}
          questioncounter={props.questionCounter}
          totalscore={props.totalScore}
          score={props.score}
        />

        {/* MODAL SHOWED WHEN YOU CHOOSE THE WRONG ANSWER */}
        <WrongModal
          show={showWrong}
          onHide={handleWrongClose}
          correct={props.correct}
          onClick={() => {
            handleWrongClose();
            goToNextACB();
          }}
          questioncounter={props.questionCounter}
          totalscore={props.totalScore}
        />
      </div>
    </div>
  );
}

export default GamePlayInputView;
