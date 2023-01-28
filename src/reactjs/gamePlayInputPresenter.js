import GamePlayInputView from "../views/gamePlayInputView";
import { Col, Row, Container } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { PromiseNoData } from "../views/promiseNoData";
import resolvePromise from "../resolvePromise";
import {
  getTopMoviesFromGenre,
  getQuotesFromID,
  getPlotFromID,
  getImagesFromID,
  getMoviesFromID,
} from "../getData";
import ClueView from "../views/clueView";
import GamePlayTopbar from "../views/gamePlayTopbarView";

export default function GamePlay(props) {
  const [genre, copyGenre] = React.useState();
  const [, reRender] = React.useState();
  const [totalScore, setTotalScore] = React.useState();
  const [questionCounter, setQuestionCounter] = React.useState(
    props.model.questionCounter
  );

  const [totalSeconds, setTotalSeconds] = React.useState();
  const [score, setScore] = React.useState(10); // VIEW
  const [clueQuoteActivated, activateClueQuote] = React.useState(false); // VIEW
  const [cluePlotActivated, activateCluePlot] = React.useState(false); // VIEW
  const [clueImageActivated, activateClueImage] = React.useState(false); // VIEW
  const [clueYearActivated, activateClueYear] = React.useState(false); // VIEW

  const [movieOptionsPromiseState, setMovieOptionsPromiseState] =
    React.useState({});

  const [correctMoviePromiseState, setCorrectMoviePromiseState] =
    React.useState({});
  const [topMoviesPromiseState, settopMoviesPromiseState] = React.useState({});
  const [plotPromiseState, setplotPromiseState] = React.useState({});
  const [imagePromiseState, setimagePromiseState] = React.useState({});
  const [plot, setPlot] = useState(null);
  const [image, setImage] = useState(null);

  React.useEffect(() => {
    if (!topMoviesPromiseState.promise) {
      resolvePromise(
        getTopMoviesFromGenre(props.model.getGenre(), 100), //siffran bestämmer hur många filmer vi hämtar
        topMoviesPromiseState,
        notifyACB
      );
      props.model.resetTotalScore();
      setTotalScore(0);
      setCorrectMoviePromiseState({});
      setMovieOptionsPromiseState({});
      setplotPromiseState({});
      setimagePromiseState({});
      props.model.clearMovieIDs();
      notifyACB();
    }
  });

  React.useEffect(() => {
    if (topMoviesPromiseState.data) {
      if (props.model.getMovieIDs().length === 0) {
        //Ä
        props.model.getMovieArrayByGenre(topMoviesPromiseState.data);
      }
    }
  }, [topMoviesPromiseState.data, questionCounter]);

  React.useEffect(() => {
    if (props.model.getMovieIDs().length !== 0) {
      if (!correctMoviePromiseState.promise) {
        resolvePromise(
          getQuotesFromID(props.model.getMovieIDs()[0]),
          correctMoviePromiseState,
          notifyACB
        );
      }
    }
  }, [props.model.movieIDs, topMoviesPromiseState.data]);

  React.useEffect(() => {
    if (props.model.getMovieIDs().length !== 0) {
      if (!movieOptionsPromiseState.promise) {
        resolvePromise(
          getMoviesFromID([
            props.model.getMovieIDs()[1],
            props.model.getMovieIDs()[2],
            props.model.getMovieIDs()[3],
            props.model.getMovieIDs()[4],
          ]),
          movieOptionsPromiseState,
          notifyACB
        );
      }
    }
  }, [
    props.model,
    props.model.movieIDs,
    questionCounter,
    movieOptionsPromiseState,
    correctMoviePromiseState.data,
  ]);

  function notifyACB() {
    reRender(new Object());
  }
  function stateObserver() {
    copyGenre(props.model.getGenre());
    setTotalScore(props.model.getTotalScore());
    setQuestionCounter(props.model.getQuestionCounter());
    setTotalSeconds(props.model.getTotalSeconds());
  }
  React.useEffect(function componentWasCreatedACB() {
    stateObserver();
    props.model.addObserver(stateObserver);
    function isTakenDownACB() {
      props.model.removeObserver(stateObserver);
    }
    return isTakenDownACB;
  }, []);
  function clueReset() {
    activateCluePlot(false);
    activateClueImage(false);
    activateClueQuote(false);
    activateClueYear(false);
  }
  React.useEffect(function componentWasCreatedACB() {
    stateObserver();
    props.model.addObserver(stateObserver);
    function isTakenDownACB() {
      props.model.removeObserver(stateObserver);
    }
    return isTakenDownACB;
  }, []);

  function updateDataACB() {
    //nollställer Promisestates så att vi söker efter nya movies o clues
    setQuestionCounter(questionCounter + 1);
    setCorrectMoviePromiseState({});
    setMovieOptionsPromiseState({});
    setplotPromiseState({});
    setimagePromiseState({});
    props.model.clearMovieIDs();
    setScore(10);
    props.model.setQuestionCounter(questionCounter + 1);
    notifyACB();
  }

  useEffect(() => {
    if (cluePlotActivated) {
      resolvePromise(
        getPlotFromID(
          props.model.stripID(correctMoviePromiseState.data.base.id)
        ),
        plotPromiseState,
        notifyACB
      );
    }
  }, [cluePlotActivated]);

  useEffect(() => {
    if (clueImageActivated) {
      resolvePromise(
        getImagesFromID(
          props.model.stripID(correctMoviePromiseState.data.base.id)
        ),
        imagePromiseState,
        notifyACB
      );
    }
  }, [clueImageActivated, imagePromiseState]);

  useEffect(() => {
    if (plotPromiseState.data) {
      setPlot(props.model.getPlotCB(plotPromiseState.data));
    }
    if (imagePromiseState.data) {
      setImage(props.model.getImageCB(imagePromiseState.data));
    }
  }, [
    plotPromiseState.promise,
    plotPromiseState.data,
    imagePromiseState.promise,
    imagePromiseState.data,
  ]);

  function imageClueACB() {
    if (imagePromiseState.data) {
      setImage(props.model.getImageCB(imagePromiseState.data));
    }
  }
  function plotClueACB() {
    if (plotPromiseState.data) {
      setPlot(props.model.getPlotCB(plotPromiseState.data));
    }
  }

  return (
    <div className="gamePlay">
      {PromiseNoData(topMoviesPromiseState) ||
        PromiseNoData(correctMoviePromiseState) ||
        PromiseNoData(movieOptionsPromiseState) || (
          <Container>
            <Row>
              <Col>
                <ClueView
                  quoteClue={props.model.getQuotesCB(
                    correctMoviePromiseState.data
                  )}
                  yearClue={correctMoviePromiseState.data.base.year}
                  imageClue={
                    imagePromiseState.promise
                      ? props.model.getImageCB(imagePromiseState.data)
                      : "loading"
                  }
                  plotClue={
                    plotPromiseState.promise
                      ? props.model.getPlotCB(plotPromiseState.data)
                      : "loading"
                  }
                  score={score}
                  setScore={(score) => {
                    setScore(score);
                  }}
                  imageHook={clueImageActivated}
                  quoteHook={clueQuoteActivated}
                  plotHook={cluePlotActivated}
                  yearHook={clueYearActivated}
                  plotClueACB={() => {
                    plotClueACB();
                  }}
                  imageClueACB={() => {
                    imageClueACB();
                  }}
                  activateImage={() => activateClueImage(true)}
                  activateQuote={() => activateClueQuote(true)}
                  activatePlot={() => activateCluePlot(true)}
                  activateYear={() => activateClueYear(true)}
                ></ClueView>
              </Col>
              <Col>
                <GamePlayInputView
                  clueReset={clueReset}
                  model={props.model}
                  score={score}
                  totalScore={totalScore}
                  updateTotalScore={function updateTotalACB(scoreToAdd) {
                    return props.model.setTotalScore(scoreToAdd);
                  }}
                  questionCounter={questionCounter}
                  onNextQuestion={function nextQuestionACB(count) {
                    return () => {
                      clueReset();
                    };
                  }}
                  possibleAnswers={[
                    // movie0PromiseState.data.base.title,
                    correctMoviePromiseState.data.base.title,
                    movieOptionsPromiseState.data[
                      props.model.stripID(props.model.getMovieIDs()[1])
                    ].title.title,
                    movieOptionsPromiseState.data[
                      props.model.stripID(props.model.getMovieIDs()[2])
                    ].title.title,
                    movieOptionsPromiseState.data[
                      props.model.stripID(props.model.getMovieIDs()[3])
                    ].title.title,
                    movieOptionsPromiseState.data[
                      props.model.stripID(props.model.getMovieIDs()[4])
                    ].title.title,
                  ]}
                  correct={correctMoviePromiseState.data.base.title}
                  updateQuestion={updateDataACB}
                  updateTimer={function updateTimerACB(secondsToAdd) {
                    return props.model.setTotalSeconds(secondsToAdd);
                  }}
                />
              </Col>
            </Row>
          </Container>
        )}
    </div>
  );
}
