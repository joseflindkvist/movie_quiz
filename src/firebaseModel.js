import MovieModel from "./movieModel.js";
import { getTestMovies, getTestClues } from "./testObjects";
import { getDatabase, ref, child, get, set, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";
import { app } from "./firebaseConfig.js";

const database = getDatabase(app);

function getUserID() {
  if (getAuth(app).currentUser) {
    const user = getAuth(app).currentUser;
    const userID = user.uid;
    return userID;
  } else {
    const userID = "no-user";
    return userID;
  }
}

function getFirebaseData(id) {
  const userID = id;
  async function makeBigPromiseACB(firebaseData) {
    let genre = firebaseData.child("genre").val()
      ? firebaseData.child("genre").val()
      : "adventure";
    let round = firebaseData.child("round").val()
      ? firebaseData.child("round").val()
      : 1;
    let moviePromiseArray = firebaseData.child("movies").val()
      ? firebaseData.child("movies").val()
      : {};
    let score = firebaseData.child("score").val()
      ? firebaseData.child("score").val()
      : 0;
    let time = firebaseData.child("time").val()
      ? firebaseData.child("time").val()
      : 0;
    let usedIDs = firebaseData.child("usedIDs").val()
      ? firebaseData.child("usedIDs").val()
      : [];
    let titles = firebaseData.child("titles").val()
      ? firebaseData.child("titles").val()
      : [];
    let movieIDs = firebaseData.child("movieIDs").val()
      ? firebaseData.child("movieIDs").val()
      : [];
    let topmovies = firebaseData.child("topmovies").val()
      ? firebaseData.child("topmovies").val()
      : [];
    let previousgames = firebaseData.child("previousgames").val()
      ? firebaseData.child("previousgames").val()
      : [];
    let clues = firebaseData.child("clues").val()
      ? firebaseData.child("clues").val()
      : [];

    function createModelACB() {
      const new_model = new MovieModel(
        genre,
        previousgames,
        round,
        moviePromiseArray,
        score,
        time,
        clues,
        usedIDs,
        titles,
        movieIDs,
        topmovies
      );
      return new_model;
    }
    return await Promise.all(
      genre,
      previousgames,
      round,
      moviePromiseArray,
      score,
      time,
      clues,
      usedIDs,
      titles,
      movieIDs,
      topmovies
    ).then(createModelACB);
  }

  return get(child(ref(database), "/film-quiz-92db7/users/" + userID)).then(
    makeBigPromiseACB
  );
}

function updateFirebaseFromModel(model) {
  if(getUserID() === "no-user"){
    return
  }
  const userID = getUserID();
  const REF = "/film-quiz-92db7/users/" + userID;
  function callback(payload) {
    if (!payload) {
      return;
    }

    if (payload.genreProp) {
      set(ref(database, REF + "/genre"), model.currentGenre);
    }

    if (payload.previousGamesProp) {
      set(ref(database, REF + "/previousgames"), payload.previousGamesProp);
    }

    if (payload.questionCounterProp) {
      set(ref(database, REF + "/round"), model.questionCounter);
    }

    if (payload.moviesProp) {
      set(ref(database, REF + "/movies"), model.movies);
    }

    if (payload.scoreProp) {
      set(ref(database, REF + "/score"), model.totalScore);
    }

    if (payload.timeProp) {
      set(ref(database, REF + "/time"), model.totalSeconds);
    }

    if (payload.cluesProp) {
      set(ref(database, REF + "/clues"), model.clues);
    }

    if (payload.usedIDsProp) {
      set(ref(database, REF + "/usedIDs"), model.usedMovieIDs);
    }

    if (payload.titlesProp) {
      set(ref(database, REF + "/titles"), model.movieTitles);
    }

    if (payload.movieIDsProp) {
      set(ref(database, REF + "/movieIDs"), model.movieIDs);
    }

    if (payload.topMoviesProp) {
      set(ref(database, REF + "/topMovies"), model.topMovies);
    }
  }

  if (model) {
    model.addObserver(callback);
  }
}

function updateModelFromFirebase(model) {
  if(getUserID() === "no-user"){
    return
  }
  const userID = getUserID();
  const REF = "/film-quiz-92db7/users/" + userID;
  if (!model) {
    return;
  }
  onValue(ref(database, REF + "/genre"), (firebaseData) => {
    if (firebaseData.exists()) {
      model.setGenre(firebaseData.val().genre);
    }
  });
  onValue(ref(database, REF + "/round"), (firebaseData) => {
    if (firebaseData.exists()) {
      model.setQuestionCounter(firebaseData.val());
    }
  });

  onValue(ref(database, REF + "/movies"), (firebaseData) => {
    if (firebaseData.exists()) {
      model.setMovies(firebaseData.val());
    }
  });
  onValue(ref(database, REF + "/points"), (firebaseData) => {
    if (firebaseData.exists()) {
      model.setScore(firebaseData.val());
    }
  });
  onValue(ref(database, REF + "/time"), (firebaseData) => {
    if (firebaseData.exists()) {
      model.setTime(firebaseData.val());
    }
  });

  onValue(ref(database, REF + "/previousgames"), (firebaseData) => {
    if (firebaseData.exists()) {
      model.setPreviousGames(firebaseData.val());
    }
  });

  onValue(ref(database, REF + "/clues"), (firebaseData) => {
    if (firebaseData.exists()) {
      model.setClues(firebaseData.val());
    }
  });
  onValue(ref(database, REF + "/usedIDs"), (firebaseData) => {
    if (firebaseData.exists()) {
      model.setUsedMovieIDs(firebaseData.val());
    }
  });
  onValue(ref(database, REF + "/movieTitles"), (firebaseData) => {
    if (firebaseData.exists()) {
      model.setMovieTitles(firebaseData.val());
    }
  });
  onValue(ref(database, REF + "/movieIDs"), (firebaseData) => {
    if (firebaseData.exists()) {
      model.setMovieIDs(firebaseData.val());
    }
  });
  onValue(ref(database, REF + "/topMovies"), (firebaseData) => {
    if (firebaseData.exists()) {
      model.setTopMovies(firebaseData.val());
    }
  });
}

export { getFirebaseData, updateFirebaseFromModel, updateModelFromFirebase };
