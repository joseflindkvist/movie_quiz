import ResultView from "../views/resultView.js";
import React from "react";

export default function Result(props) {
  React.useEffect(() => {
    var today = new Date();
    const new_game = {
      date:
        String(today.getDate()).padStart(2, "0") +
        "/" +
        String(today.getMonth() + 1).padStart(2, "0") +
        "/" +
        today.getFullYear(),
      points: props.model.getTotalScore(),
      genre: props.model.getGenre(),
    };
    function filterGamesCB(game) {
      return (
        new_game.date === game.date &&
        new_game.points === game.points &&
        new_game.genre === game.genre
      );
    }
    if (props.model.getPreviousGames()) {
      if (!props.model.getPreviousGames().find(filterGamesCB)) {
        props.model.addGameToArray(new_game);
      }
    }
  });
  return (
    <ResultView model={props.model} totalScore={props.model.getTotalScore()} />
  );
}
