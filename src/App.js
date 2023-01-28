import { Routes, Route } from "react-router-dom";
import MainPage from "./reactjs/mainPagePresenter";
import Genre from "./reactjs/genrePresenter";
import Result from "./reactjs/resultPresenter";
import HighScore from "./reactjs/highScorePresenter";
import GamePlay from "./reactjs/gamePlayInputPresenter";
import Login from "./views/loginView";
import TopBar from "./views/menuBarView";
import Signup from "./views/signupView";
import UpdateProfile from "./views/UpdateProfile";
import GameTopBar from "./reactjs/gamePlayTopBarPresenter";
import { PrivateRoute } from "./reactjs/PrivateRoute";
import "./App.css";
import "./index.css";

function App(props) {
  return (
    <div className="fullheight">
      <Routes>
        <Route path="/" element={<Signup model={props.model} />} />
        <Route path="/login" element={<Login model={props.model} />} />
        <Route
          path="/mainpage"
          element={
            <PrivateRoute>
              <TopBar model={props.model} />
              <MainPage />
            </PrivateRoute>
          }
        />
        <Route path="/update" element={<UpdateProfile />} />
        <Route
          path="/genre"
          element={
            <PrivateRoute>
              <div className="app">
                <TopBar model={props.model} />
                <Genre model={props.model} />
              </div>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/result"
          element={
            <PrivateRoute>
              <div className="app">
                <TopBar model={props.model} />
                <Result model={props.model} />
              </div>
            </PrivateRoute>
          }
        />
        <Route
          path="/quiz"
          element={
            <PrivateRoute>
              <div className="app">
                <TopBar model={props.model} />
                <GameTopBar model={props.model} />
                <GamePlay model={props.model} />
              </div>
            </PrivateRoute>
          }
        />
        <Route
          path="/highscore"
          element={
            <PrivateRoute>
              <div className="app">
                <TopBar model={props.model} />
                <HighScore model={props.model} />
              </div>
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
