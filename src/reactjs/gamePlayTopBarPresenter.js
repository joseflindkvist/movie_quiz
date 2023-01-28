import React from "react";
//import StopWatch3 from "./stopWatch";
import GamePlayTopbarView from "../views/gamePlayTopbarView";
import ResultView from "../views/resultView";
import { Col, Row, Container } from "react-bootstrap";

export default function GameTopBar(props) {
  const [questionCounter, setQuestionCounter] = React.useState();
  const [totalSeconds, setTotalSeconds] = React.useState();
  const [time, setTime] = React.useState(0);
  const [timeOn, setTimeOn] = React.useState(false);

  function stateObserver() {
    setQuestionCounter(props.model.getQuestionCounter());
    setTotalSeconds(props.model.getTotalSeconds());
    //setTime(props.model.totalSeconds)
  }

  React.useEffect(function componentWasCreatedACB() {
    stateObserver();
    props.model.addObserver(stateObserver);
    function isTakenDownACB() {
      props.model.removeObserver(stateObserver);
    }
    return isTakenDownACB;
  }, []);

  /*DO NOT REMOVE STOPWATCH FUNCTION IN THIS FILE*/
  function StopWatchCB() {
    React.useEffect(() => {
      let TimeInterval = null;
      setTimeOn(true);
      if (timeOn) {
        TimeInterval = setInterval(() => {
          setTime((previousTime) => previousTime + 1000);
        }, 1000);
      } else {
        clearInterval(TimeInterval);
      }
      return () => clearInterval(TimeInterval);
    }, [timeOn]);
    return time;
  }

  return (
    <div>
      <Col>
        <GamePlayTopbarView
          model={props.model}
          time={StopWatchCB(props.model.getTotalSeconds())}
          genre={props.model.getGenre()}
          //updateTimer={function updateTimerACB(secondsToAdd) {return props.model.getTotalSeconds(secondsToAdd);}}

          questionCounter={questionCounter}
          //whenGameEnd={props.model.setTotalSeconds(props.time)}
        ></GamePlayTopbarView>
      </Col>
      {/*<Col>
        <ResultView
        whenGameEnd={props.model.setTotalSeconds(time)}
        ></ResultView>
    </Col>*/}
    </div>
  );
}
