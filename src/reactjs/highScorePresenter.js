import HighScoreView from "../views/highScoreView.js";

export default function HighScore(props) {
  function sortGames(aGame, bGame) {
    if (aGame.points < bGame.points) {
      return 1;
    }
    if (aGame.points > bGame.points) {
      return -1;
    }
  }
  function getPrevious() {
    if (props.model.getPreviousGames() <= 10) {
      return [...props.model.getPreviousGames()].sort(sortGames);
    } else {
      return [...props.model.getPreviousGames()].sort(sortGames).slice(0, 10);
    }
  }
  //borde inte behöva passa model nedan
  return (
    <HighScoreView
      previousGames={
        props.model.getPreviousGames() ? getPrevious() : "No previous"
      }
    />
  );
}
