import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

function ResultView(props) {
  const totallTime = props.whenGameEnd;
  const totalTime = (
    ("0" + Math.floor((totallTime / 60000) % 60)).slice(-2) +
    ":" +
    "0" +
    Math.floor((totallTime / 1000) % 60)
  ).slice(-2);
  return (
    <div className="resultmessage">
      <div className="resultbackground">
        <Carousel margin-top={10} className="resultcarousel" pause="hover">
          <Carousel.Item>
            <img
              margin-top={10}
              className="d-block w-100"
              src="https://wallpaperaccess.com/full/38119.jpg"
              alt="First slide"
            />
            <Carousel.Caption margin-top={10}>
              {/*<h1 className="resulttitle">Congratulations!</h1>*/}
              <h3 className="carouseltitle">
                {props.totalScore < 30 ? "Well..." : "Congratulations!"}
              </h3>
              <p className="carouseltext">
                You earned {props.totalScore} points this round.
              </p>
              <div className="resultsmargin1"></div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://wallpaperaccess.com/full/38119.jpg"
              alt="Second slide"
            />

            <Carousel.Caption margin-top={10}>
              <h3 className="carouseltitle">
                {"Do you think you can beat this score?"}
              </h3>
              <p className="carouseltext">{"Click below to try again"}</p>
              <Link to="/genre">
                <Button variant="warning">Play again!</Button>
              </Link>
              <div className="resultsmargin2"></div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Card className="replaycard" bg="dark">
          <Card.Body>
            <Card.Title>Wanna give it another shot?</Card.Title>
            <Card.Text>
              {props.totalScore < 30
                ? "I mean, it couldn't go worse... Right?"
                : "Maybe this is your true calling in life!"}
            </Card.Text>
            <Link to="/genre">
              <Button variant="warning">Play again!</Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default ResultView;
