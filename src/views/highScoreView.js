import {
  Container,
  Table,
  Row,
  Col,
  Button,
  Tooltip,
  OverlayTrigger,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function HighScoreView(props) {
  function renderRowsCB(row, i) {
    return (
      <tr key={row.date + row.points + row.genre}>
        <td>{row.date}</td>
        <td>{row.points}</td>
        <td>{row.genre}</td>
      </tr>
    );
  }
  return (
    <div className="bg-image">
      <div className="bg-blur">
        <Container className=" login">
          <Row>
            <Col>
              <div>
                <h1 className="guidetitle">High Scores</h1>
                <p className="score">
                  Here's is a list of your best runs. Think you can beat it?
                </p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="highscoretable">
              {props.previousGames == "No previous" ? (
                "You haven't played any games yet..."
              ) : (
                <Table striped bordered hover variant="dark">
                  <thead>
                    <tr className="same-col-widths">
                      <th>Date</th>
                      <th>Points</th>
                      <th>Genre</th>
                    </tr>
                  </thead>
                  <tbody>{props.previousGames.map(renderRowsCB)}</tbody>
                </Table>
              )}
              <div>
                <br />
              </div>
              <Link to="/genre">
                <OverlayTrigger
                  placement="top"
                  delay={{ show: 10, hide: 0 }}
                  overlay={<Tooltip>Go play!</Tooltip>}
                >
                  <Button className="clue-btn glow btn-lg" variant="warning">
                    Beat that High Score!
                  </Button>
                </OverlayTrigger>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default HighScoreView;
