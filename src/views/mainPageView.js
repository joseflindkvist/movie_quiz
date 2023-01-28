import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import Offcanvas from "react-bootstrap/Offcanvas";
import React from "react";
import { Link } from "react-router-dom";

function MainPageView() {
  return (
    <div>
      <h1 className="guidetitle">Welcome to Film Quiz!</h1>
      <div>
        <div className="guidecard">
          <Card className="individualcard" bg="dark">
            <Card.Img
              variant="top"
              src="https://media.proprofs.com/images/QM/user_images/2503852/New%20Project%20(40)(188).jpg"
            />
            <Card.Body>
              <div className="startalign">
                <Card.Title className="carouseltext">
                  Let's get started!
                </Card.Title>
                <Card.Text className="carouseltext">
                  Press the button below to choose genre and start playing Film
                  Quiz!
                </Card.Text>
                <Link to="/genre">
                  <Button className="startbutton" variant="warning">
                    Start Playing!
                  </Button>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div>
        <div className="guideaccordion">
          <Accordion defaultActiveKey="0" padding-bottom={100}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Start here!</Accordion.Header>
              <Accordion.Body>
                <p className="guidetext">
                  In this game, your goal is to figure out what film we are
                  thinking about!
                  <br />
                  You will get options to reveal more clues, for example some
                  trivia about the film or who directed it.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Da Rulez</Accordion.Header>
              <Accordion.Body>
                <p className="guidetext">
                  Each round, you get to choose however many clues that you
                  need.
                  <br />
                  For each clue recieved, the amount of points you get for a
                  correct answer are reduced.
                  <br />
                  So you better figure it out quickly!
                  <br />
                  <br />
                  <strong>
                    If you answer incorrectly, you get no points for that
                    question.
                  </strong>
                  <br />
                  <br />
                  When you have answered 5 questions, the game is over.
                  <br />
                  Hopefully you will have a lot of points by then, unless our
                  quiz is too hard for you... :\
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>The winner takes it all...</Accordion.Header>
              <Accordion.Body>
                <p className="guidetext">
                  This isn't meant to be a competition, so just go at your own
                  pace and have fun!
                  <br />
                  <strong>BUT</strong>, if you feel like competing against
                  yourself you can head over to the "High Score"-page.
                  <br />
                  You can navigate there using the menu up top, and there you'll
                  find your ten most recent games.
                  <br />
                  <br />
                  <strong>Maybe it'll help you sharpen your game?</strong>
                  <br />
                  <br />{" "}
                  <Link to="/genre">
                    <Button className="startbutton" variant="warning">
                      START QUIZ!
                    </Button>
                  </Link>
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default MainPageView;
