async function getTopMoviesFromGenre(genre, amount) {
  const limit = amount;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "cec86edc91msh4a3b46408546164p1b6501jsnea9460095cc8",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };
  return await fetch(
    `https://imdb8.p.rapidapi.com/title/v2/get-popular-movies-by-genre?genre=${genre}&limit=${limit}`,
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
}

async function getBaseFromID(id) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "cec86edc91msh4a3b46408546164p1b6501jsnea9460095cc8",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  return await fetch(
    `https://imdb8.p.rapidapi.com/title/get-base?tconst=${id}`,
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
}

async function getImagesFromID(id) {
  const limit = "5";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "cec86edc91msh4a3b46408546164p1b6501jsnea9460095cc8",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };
  return await fetch(
    `https://imdb8.p.rapidapi.com/title/get-images?tconst=${id}&limit=${limit}`,
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
}

async function getPlotFromID(id) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "cec86edc91msh4a3b46408546164p1b6501jsnea9460095cc8",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };
  return await fetch(
    `https://imdb8.p.rapidapi.com/title/get-plots?tconst=${id}`,
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
}

async function getMoviesFromID(idArray) {
  const url = new URL(
    "https://online-movie-database.p.rapidapi.com/title/get-meta-data?"
  );
  let params = new URLSearchParams(url.search);

  idArray.forEach((id) => params.append("ids", id));
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "cec86edc91msh4a3b46408546164p1b6501jsnea9460095cc8",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  return await fetch(
    `https://online-movie-database.p.rapidapi.com/title/get-meta-data?${params.toString()}`,
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
}

async function getGernesFromID(id) {
  function checkifData(obj) {
    if (obj === undefined) {
      return ["no genres, undefined"];
    }
    // if (obj.message) {
    //   return ["no genres, pga. message"];
    // }
    return obj;
  }
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "cec86edc91msh4a3b46408546164p1b6501jsnea9460095cc8",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  const resp = await fetch(
    `https://imdb8.p.rapidapi.com/title/get-genres?tconst=${id}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      return checkifData(response);
    })
    .catch((err) => console.error(err));
  return resp;
}

async function getQuotesFromID(id) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "cec86edc91msh4a3b46408546164p1b6501jsnea9460095cc8",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };
  async function checkifData(object) {
    if (!object.base) {
      return await fetch(
        `https://imdb8.p.rapidapi.com/title/get-base?tconst=${id}`,
        options
      )
        .then((response) => response.json())
        .then((obj) => {
          return {
            id: obj.id,
            base: obj,
            quotes: [
              {
                lines: [
                  { characters: [{ character: "None" }], text: "No quote" },
                  { characters: [{ character: "None" }], text: "No quote" },
                ],
              },
            ],
          };
        })
        .catch((err) => console.error(err));
    }
    return object;
  }

  return await fetch(
    `https://imdb8.p.rapidapi.com/title/get-quotes?tconst=${id}`,
    options
  )
    .then((response) => response.json())
    .then((response) => checkifData(response))
    .catch((err) => console.error(err));
}

export {
  getBaseFromID,
  getImagesFromID,
  getPlotFromID,
  getGernesFromID,
  getQuotesFromID,
  getTopMoviesFromGenre,
  getMoviesFromID,
};
