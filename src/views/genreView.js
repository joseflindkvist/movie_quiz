import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function GenreView(props) {
  function updateGenreACB(e) {
    props.onGenreUpdated(e.target.id);
    props.resetQuestionCounter();
  }
  return (
    <div>
      <div className="genretop">
        <Link to="/">
          <div className="returnbutton">
            <Button variant="warning">Go back</Button>
          </div>
        </Link>
        <h1 className="guidetitle">Choose a genre:</h1>
      </div>
      <table className="genrecards">
        <tbody>
          <tr>
            <td>
              <Card
                className="individualcard"
                style={{ width: "13rem" }}
                bg="dark"
              >
                <Card.Img
                  variant=""
                  src="https://images.bauerhosting.com/legacy/empire-images/features/5857b3431eed4b23059f64e7/commando4.jpg?format=jpg&quality=80&width=960&height=540&ratio=16-9&resize=aspectfill"
                />
                <Card.Body>
                  <Card.Title className="genretext">Action</Card.Title>
                  <Link to="/quiz">
                    <Button
                      id="action"
                      variant="warning"
                      onClick={updateGenreACB}
                    >
                      Choose
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </td>

            <td>
              <Card
                className="individualcard"
                style={{ width: "13rem" }}
                bg="dark"
              >
                <Card.Img
                  variant="top"
                  src="https://unitingartists.org/wp-content/uploads/2020/06/Adventure-Genre-800x445.jpg"
                />
                <Card.Body>
                  <Card.Title className="genretext">Adventure</Card.Title>
                  <Link to="/quiz">
                    <Button
                      id="adventure"
                      variant="warning"
                      onClick={updateGenreACB}
                    >
                      Choose
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </td>

            <td>
              <Card
                className="individualcard"
                style={{ width: "13rem" }}
                bg="dark"
              >
                <Card.Img
                  variant="top"
                  src="https://www.hollywoodreporter.com/wp-content/uploads/2011/12/hangover_2_elevator_2011_a_l.jpg"
                />
                <Card.Body>
                  <Card.Title className="genretext">Comedy</Card.Title>
                  <Link to="/quiz">
                    <Button
                      id="comedy"
                      variant="warning"
                      onClick={updateGenreACB}
                    >
                      Choose
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </td>

            <td>
              <Card
                className="individualcard"
                style={{ width: "13rem" }}
                bg="dark"
              >
                <Card.Img
                  variant="center"
                  src="https://cdn-free.tv2i.dk/e/d/i/editorial/d/5/7/d57514e8-2105-4876-a890-9f2e1521ac5d?ixlib=js-3.2.1&w=1280&h=720&q=60&auto=format&fit=crop&rect64=MCwwLDc5OSw0NDk&s=7b1fa664a1608c6d072ddaed9b7fbe7f"
                />
                <Card.Body>
                  <Card.Title className="genretext">Drama</Card.Title>
                  <Link to="/quiz">
                    <Button
                      id="drama"
                      variant="warning"
                      onClick={updateGenreACB}
                    >
                      Choose
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </td>

            <td>
              <Card
                className="individualcard"
                style={{ width: "13rem" }}
                bg="dark"
              >
                <Card.Img
                  variant="top"
                  src="https://medias.spotern.com/spots/w640/219/219064-1564325091.jpg"
                />
                <Card.Body>
                  <Card.Title className="genretext">Fantasy</Card.Title>
                  <Link to="/quiz">
                    <Button
                      id="fantasy"
                      variant="warning"
                      onClick={updateGenreACB}
                    >
                      Choose
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </td>
          </tr>

          <tr>
            <td>
              <Card
                className="individualcard"
                style={{ width: "13rem" }}
                bg="dark"
              >
                <Card.Img
                  variant="top"
                  src="https://statehornet.com/wp-content/uploads/2022/03/Scream.jpg"
                />
                <Card.Body>
                  <Card.Title className="genretext">Horror</Card.Title>
                  <Link to="/quiz">
                    <Button
                      id="horror"
                      variant="warning"
                      onClick={updateGenreACB}
                    >
                      Choose
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </td>

            <td>
              <Card
                className="individualcard"
                style={{ width: "13rem" }}
                bg="dark"
              >
                <Card.Img
                  variant="top"
                  src="https://media.gq-magazine.co.uk/photos/637e0770b8f9bde9029b7fcf/master/pass/love_actually_0002_MCDLOAC_EC030.jpeg"
                />
                <Card.Body>
                  <Card.Title className="genretext">Romance</Card.Title>
                  <Link to="/quiz">
                    <Button
                      id="romance"
                      variant="warning"
                      onClick={updateGenreACB}
                    >
                      Choose
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </td>

            <td>
              <Card
                className="individualcard"
                style={{ width: "13rem" }}
                bg="dark"
              >
                <Card.Img
                  variant="top"
                  src="https://i.pcmag.com/imagery/lineups/02EQzmxBV28b44npfNsg5ly-6.fit_lim.size_1200x630.v1620053617.jpg"
                />
                <Card.Body className="individualcard">
                  <Card.Title className="genretext">Sci-Fi</Card.Title>
                  <Link to="/quiz">
                    <Button
                      id="sci-fi"
                      variant="warning"
                      onClick={updateGenreACB}
                    >
                      Choose
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </td>

            <td>
              <Card
                className="individualcard"
                style={{ width: "13rem" }}
                bg="dark"
              >
                <Card.Img
                  variant="top"
                  src="https://www.slashfilm.com/img/gallery/shutter-island-ending-explained/l-intro-1631889373.jpg"
                />
                <Card.Body>
                  <Card.Title className="genretext">Thriller</Card.Title>
                  <Link to="/quiz">
                    <Button
                      id="thriller"
                      variant="warning"
                      onClick={updateGenreACB}
                    >
                      Choose
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </td>

            <td>
              <Card
                style={{ width: "13rem" }}
                bg="dark"
                className="individualcard"
              >
                <Card.Img
                  variant="top"
                  src="https://www.slashfilm.com/img/gallery/clint-eastwoods-14-best-roles-ranked/intro-1631904618.jpg"
                />
                <Card.Body>
                  <Card.Title className="genretext">Western</Card.Title>
                  <Link to="/quiz">
                    <Button
                      id="western"
                      variant="warning"
                      onClick={updateGenreACB}
                    >
                      Choose
                    </Button>
                  </Link>
                </Card.Body>
              </Card>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="randomcard">
        <Card bg="dark" className="individualcard">
          <Card.Body>
            <Card.Title className="genretext">Randomize!</Card.Title>
            <Card.Text className="genretext">
              Play a random genre! We pick from the ones above, but also an
              additional 17 others!
            </Card.Text>
            <Link to="/quiz">
              <Button
                id="randomized"
                variant="warning"
                onClick={updateGenreACB}
              >
                Choose
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default GenreView;
