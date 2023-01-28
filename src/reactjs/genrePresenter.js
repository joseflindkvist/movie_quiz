import GenreView from "../views/genreView.js";
import React from "react";

export default function Genre(props) {
  const [genreState, copyGenre] = React.useState(props.model.getGenre());

  function observerACB() {
    copyGenre(props.model.getGenre());
  }

  function componentWasCreatedACB() {
    props.model.addObserver(observerACB);

    function isTakenDownACB() {
      props.model.removeObserver(observerACB);
    }
    return isTakenDownACB;
  }

  function updateGenreCB(genre) {
    return props.model.setGenre(genre);
  }
  function updateCounterCB() {
    return props.model.setQuestionCounter(1);
  }

  React.useEffect(componentWasCreatedACB, []);

  return (
    <GenreView
      onGenreUpdated={updateGenreCB}
      resetQuestionCounter={updateCounterCB}
    />
  );
}
