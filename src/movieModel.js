import { toHaveFocus } from "@testing-library/jest-dom/dist/matchers";
import {
  getBaseFromID,
  getImagesFromID,
  getPlotFromID,
  getGernesFromID,
  getQuotesFromID,
  getTopMoviesFromGenre,
} from "./getData";
import { updateFirebaseFromModel } from "./firebaseModel";
import resolvePromise from "./resolvePromise";
import { getTestClues, getTestMovies, testMovies1 } from "./testObjects";
export default class MovieModel {
  constructor(
    genre,
    previousgames,
    round,
    moviePromiseArray,
    score,
    time,
    clues,
    usedIDs = [],
    titles,
    movieIDs = [],
    topmovies = []
  ) {
    this.currentGenre = genre;
    this.questionCounter = round;
    this.movies = moviePromiseArray; //array med filmer. Första plats i array är den filmen som är rätt svar.
    this.totalScore = score;
    this.totalSeconds = time;
    this.previousgames = previousgames;
    this.clues = clues; //ska vara {}
    this.usedMovieIDs = usedIDs;
    this.movieTitles = titles;
    this.movieIDs = movieIDs;
    this.topMovies = topmovies;
    this.observers = [];
  }

  // Används av firebaseModel:
  //Behöver lite mer arbete!
  addGameToArray(new_game) {
    function checkGamesCB(game) {
      return new_game !== game;
    }
    this.previousgames = this.previousgames.filter(checkGamesCB);
    this.previousgames = [...this.previousgames, new_game];
    this.notifyObservers({ previousGamesProp: this.previousgames });
    return this.previousgames;
  }
  setGenre(genre) {
    if (genre !== this.currentGenre && genre) {
      this.currentGenre = genre;
      this.notifyObservers({ genreProp: genre });
    }
  }

  setQuestionCounter(count) {
    if (count) {
      this.questionCounter = count;
      this.notifyObservers({ questionCounterProp: count });
    }
  }

  setMovies(movies) {
    if (movies) {
      this.movies = movies;
      this.notifyObservers({ moviesProp: movies });
    }
  }

  setScore(score) {
    if (score) {
      this.totalScore = score;
      this.notifyObservers({ scoreProp: score });
    }
  }

  setTime(time) {
    if (time) {
      this.totalSeconds = time;
      this.notifyObservers({ timeProp: time });
    }
  }

  setPreviousGames(previousgames) {
    if (previousgames) {
      this.previousgames = previousgames;
      this.notifyObservers({ previousGamesProp: previousgames });
    }
  }

  getPreviousGames() {
    return this.previousgames;
  }

  setClues(clues) {
    if (clues) {
      this.clues = clues;
      this.notifyObservers({ cluesProp: clues });
    }
  }

  setUsedMovieIDs(movieids) {
    if (movieids) {
      this.usedMovieIDs = movieids;
      this.notifyObservers({ usedIDsProp: movieids });
    }
  }

  setMovieIDs(movieids) {
    if (movieids) {
      this.movieIDs = movieids;
      this.notifyObservers({ movieIDsProp: movieids });
    }
  }

  setTopMovies(topmovies) {
    if (topmovies) {
      this.topMovies = topmovies;
      this.notifyObservers({ topMoviesProp: topmovies });
    }
  }

  setUser(user) {
    if (user) {
      this.user = user;
      this.notifyObservers({ userProp: user });
    }
  }

  getMovieIDs() {
    return this.movieIDs;
  }

  setTotalScore(scoreToAdd) {
    this.totalScore = this.totalScore + scoreToAdd;
  }

  getTotalScore() {
    return this.totalScore;
  }

  resetTotalScore() {
    this.totalScore = 0;
  }
  getQuestionCounter() {
    return this.questionCounter;
  }

  setTotalSeconds(secondsToAdd) {
    this.totalSeconds = this.totalSeconds + secondsToAdd;
  }
  getTotalSeconds() {
    return this.totalSeconds;
  }

  setFinalTime(time) {
    this.finalTime = time;
  }

  addObserver(callback) {
    this.observers = [...this.observers, callback];
  }

  removeObserver(callback) {
    function removeCB(observer) {
      return callback !== observer;
    }
    this.observers = [...this.observers.filter(removeCB)];
  }

  notifyObservers(payload) {
    try {
      this.observers?.forEach(function invokeObserverCB(obs) {
        obs(payload);
      });
    } catch (err) {
      console.error(err);
    }
  }

  setMovieTitles(array) {
    function returnTitlesCB(objects) {
      return objects.title;
    }
    if (array) {
      this.movieTitles = array.map(returnTitlesCB);
      this.notifyObservers({ titlesProp: this.movieTitles });
      return this.movieTitles;
    }
  }
  getMovieTitles() {
    return this.movieTitles;
  }
  getCurrentDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();
    today = mm + "/" + dd + "/" + yyyy;
    return today;
  }

  getGenre() {
    return this.currentGenre;
  }
  addMovieToArray(movieToAdd) {
    function findMovieCB(movie) {
      return movieToAdd.id === movie.id;
    }
    if (!this.dishes.find(findMovieCB)) {
      this.movies = [...this.movies, movieToAdd];
      this.notifyObservers({ movieProp: movieToAdd });
    }
  }

  removeMovieFromArray(movieToRemove) {
    function findMovieCB(movie) {
      return movieToRemove.id === movie.id;
    }

    function hasSameIdCB(movie) {
      return movieToRemove.id !== movie.id;
    }

    if (this.movies.find(findMovieCB)) {
      this.movies = [...this.movies.filter(hasSameIdCB)];
      this.notifyObservers({ movieRemovedProp: movieToRemove });
    }
  }
  clearMovieIDs() {
    this.movieIDs = [];
  }
  clearMovieArray() {
    this.movies = [];
  }
  stripID(id) {
    //"trimmar" id till rätt format
    if (id.includes("/title/")) {
      return id.slice(7).slice(0, -1);
    } else return id;
  }
  getMovieArrayByGenre(top100) {
    var numberArray = [];
    var newMoviesArray = [];
    var topMoviesAmount = 100;
    var topMovs = top100;
    const arrayLength = 5; //number of generated movies
    while (numberArray.length < arrayLength) {
      var num = Math.floor(Math.random() * topMoviesAmount) + 1;
      if (
        numberArray.indexOf(num) === -1 &&
        !this.usedMovieIDs.includes(topMovs[numberArray[num]])
      ) {
        numberArray.push(num);
        topMoviesAmount -= 1;
      }
      var topMovs2 = topMovs.filter((e) => {
        if (e !== topMovs[num]) {
          return e;
        }
      });
    }
    for (let i = 0; i < numberArray.length; i++) {
      //lägger till random filmer i array
      newMoviesArray = [...newMoviesArray, topMovs2[numberArray[i]]];
      this.usedMovieIDs = [...this.usedMovieIDs, topMovs2[numberArray[i]]];
    }
    this.setMovieIDs(newMoviesArray.map(this.stripID)); //Ä
  }

  getMovieArray() {
    return this.movies;
  }
  getUsedMoviesIDs() {
    return this.usedMovieIDs;
  }
  getCurrentMovieCoverURL() {
    return this.movies[0]?.image.url;
  }

  getPlotCB(object) {
    return object.plots[0].text;
  }

  getQuotesCB(quoteObject) {
    // var quoteObject = resolvePromise(
    //   getQuotesFromID(id),
    //   this.getQuotesFromIDPromiseState,
    //   this.notifyObservers(this)
    // );
    const len = quoteObject.quotes.length;
    //var randLen = Math.floor(Math.random() * len);
    if (quoteObject.quotes) {
      //if line[0] has characters OR (stageDirection AND characters)
      if (
        quoteObject.quotes[0].lines[0].characters ||
        (quoteObject.quotes[0].lines[0].stageDirection &&
          quoteObject.quotes[0].lines[0].characters)
      ) {
        var characterName =
          quoteObject.quotes[0].lines[0].characters[0].character;
        var quoteStr = quoteObject.quotes[0].lines[0].text;
      }
      if (
        quoteObject.quotes[0].lines[0].stageDirection &&
        !quoteObject.quotes[0].lines[0].characters
      ) {
        var characterName =
          quoteObject.quotes[0].lines[1].characters[0].character;
        var quoteStr = quoteObject.quotes[0].lines[1].text;
      }
    }
    return [quoteStr, characterName];
  }
  getImageCB(object) {
    var len = object.images.length;
    const imgURL = object.images[Math.floor(Math.random() * len)].url;
    return imgURL;
  }

  getMovieClues() {
    return this.clues;
  }
}
