/*Använd dessa test-objekt istället för att fetcha från API om ni kan så sparar vi på requests */
const testobject = {
  tt0330373: {
    title: {
      "@type": "imdb.api.title.title",
      id: "/title/tt0330373/",
      image: {
        height: 443,
        id: "/title/tt0330373/images/rm436509952",
        url: "https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_.jpg",
        width: 300,
      },
      runningTimeInMinutes: 157,
      title: "Harry Potter and the Goblet of Fire",
      titleType: "movie",
      year: 2005,
    },
    ratings: {
      "@type": "imdb.api.title.ratings",
      id: "/title/tt0330373/",
      title: "Harry Potter and the Goblet of Fire",
      titleType: "movie",
      year: 2005,
      bottomRank: 8692,
      canRate: true,
      rating: 7.7,
      ratingCount: 626872,
      topRank: 787,
    },
    metacritic: {
      "@type": "imdb.api.title.metacritic",
      id: "/title/tt0330373/",
      metaScore: 81,
      metacriticUrl:
        "https://www.metacritic.com/movie/harry-potter-and-the-goblet-of-fire?ftag=MCD-06-10aaa1c",
      reviewCount: 38,
      userRatingCount: 1226,
      userScore: 7.8,
    },
    releaseDate: "2005-11-18",
    popularity: {
      "@type": "imdb.api.title.rank",
      currentRank: 624,
      id: "/title/tt0330373/",
      image: {
        height: 443,
        id: "/title/tt0330373/images/rm436509952",
        url: "https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_.jpg",
        width: 300,
      },
      title: "Harry Potter and the Goblet of Fire",
      titleType: "movie",
      year: 2005,
    },
    waysToWatch: {
      "@type": "imdb.api.watch.watchoptions",
      id: "/title/tt0330373/",
      optionGroups: [
        {
          displayName: "WATCH NOW",
          watchOptions: [
            {
              link: {
                platform: "amzn1.imdb.w2w.platform.web",
                uri: "https://play.hbomax.com/feature/urn:hbo:feature:GXssOeAtVmlVGwwEAAABR",
              },
              primaryText: "HBO Max",
              provider: {
                providerId: "amzn1.imdb.w2w.provider.hbo_max",
                providerTypeId: "amzn1.imdb.w2w.provider-type.svod",
                refPart: "hbomax",
              },
              secondaryText: "with subscription",
            },
            {
              link: {
                platform: "amzn1.imdb.w2w.platform.web",
                uri: "https://www.peacocktv.com",
              },
              primaryText: "Peacock",
              provider: {
                providerId: "amzn1.imdb.w2w.provider.peacock",
                providerTypeId: "amzn1.imdb.w2w.provider-type.svod",
                refPart: "peacock",
              },
              secondaryText: "with subscription",
            },
          ],
        },
        {
          displayName: "RENT/BUY",
          watchOptions: [
            {
              link: {
                platform: "amzn1.imdb.w2w.platform.web",
                uri: "https://www.amazon.com/s?i=movies-tv&k=Harry+Potter+and+the+Goblet+of+Fire",
              },
              primaryText: "Amazon",
              provider: {
                providerId: "amzn1.imdb.w2w.provider.amazon",
                providerTypeId: "amzn1.imdb.w2w.provider-type.physical",
                refPart: "amazon",
              },
              secondaryText: "search for Blu-ray and DVD",
            },
            {
              link: {
                platform: "amzn1.imdb.w2w.platform.web",
                uri: "https://www.amazon.com/gp/video/detail/amzn1.dv.gti.bea9f7a1-b9a7-7bdf-ee75-c2561550fd3d",
              },
              primaryText: "Prime Video",
              provider: {
                providerId: "amzn1.imdb.w2w.provider.prime_video",
                providerTypeId: "amzn1.imdb.w2w.provider-type.tvod",
                refPart: "pvt_aiv",
              },
              secondaryText: "rent/buy from $3.99",
            },
          ],
        },
      ],
    },
    genres: ["Adventure", "Family", "Fantasy", "Mystery"],
    certificate: "PG-13",
  },
  tt10954600: {
    title: {
      "@type": "imdb.api.title.title",
      id: "/title/tt10954600/",
      image: {
        height: 2500,
        id: "/title/tt10954600/images/rm2331313921",
        url: "https://m.media-amazon.com/images/M/MV5BNDgyNGM4NTYtN2M3MS00YTY2LTk0OWUtZmIzYjg3MmQ0OGM4XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
        width: 1688,
      },
      title: "Ant-Man and the Wasp: Quantumania",
      titleType: "movie",
      year: 2023,
    },
    ratings: {
      "@type": "imdb.api.title.ratings",
      id: "/title/tt10954600/",
      title: "Ant-Man and the Wasp: Quantumania",
      titleType: "movie",
      year: 2023,
      canRate: false,
    },
    metacritic: {
      "@type": "imdb.api.title.metacritic",
      id: "/title/tt10954600/",
      reviewCount: 0,
      userRatingCount: 0,
    },
    releaseDate: "2023-02-17",
    popularity: {
      "@type": "imdb.api.title.rank",
      currentRank: 632,
      id: "/title/tt10954600/",
      image: {
        height: 2500,
        id: "/title/tt10954600/images/rm2331313921",
        url: "https://m.media-amazon.com/images/M/MV5BNDgyNGM4NTYtN2M3MS00YTY2LTk0OWUtZmIzYjg3MmQ0OGM4XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
        width: 1688,
      },
      title: "Ant-Man and the Wasp: Quantumania",
      titleType: "movie",
      year: 2023,
    },
    waysToWatch: {
      "@type": "imdb.api.watch.watchoptions",
      id: "/title/tt10954600/",
    },
    genres: ["Action", "Adventure", "Comedy", "Mystery", "Sci-Fi", "Thriller"],
    certificate: null,
  },
  tt0499549: {
    title: {
      "@type": "imdb.api.title.title",
      id: "/title/tt0499549/",
      image: {
        height: 1536,
        id: "/title/tt0499549/images/rm371527425",
        url: "https://m.media-amazon.com/images/M/MV5BNjA3NGExZDktNDlhZC00NjYyLTgwNmUtZWUzMDYwMTZjZWUyXkEyXkFqcGdeQXVyMTU1MDM3NDk0._V1_.jpg",
        width: 1037,
      },
      runningTimeInMinutes: 162,
      title: "Avatar",
      titleType: "movie",
      year: 2009,
    },
    ratings: {
      "@type": "imdb.api.title.ratings",
      id: "/title/tt0499549/",
      title: "Avatar",
      titleType: "movie",
      year: 2009,
      bottomRank: 9051,
      canRate: true,
      rating: 7.8,
      ratingCount: 1257189,
      topRank: 532,
    },
    metacritic: {
      "@type": "imdb.api.title.metacritic",
      id: "/title/tt0499549/",
      metaScore: 83,
      metacriticUrl:
        "https://www.metacritic.com/movie/avatar?ftag=MCD-06-10aaa1c",
      reviewCount: 38,
      userRatingCount: 3446,
      userScore: 7.5,
    },
    releaseDate: "2009-12-18",
    popularity: {
      "@type": "imdb.api.title.rank",
      currentRank: 52,
      id: "/title/tt0499549/",
      image: {
        height: 1536,
        id: "/title/tt0499549/images/rm371527425",
        url: "https://m.media-amazon.com/images/M/MV5BNjA3NGExZDktNDlhZC00NjYyLTgwNmUtZWUzMDYwMTZjZWUyXkEyXkFqcGdeQXVyMTU1MDM3NDk0._V1_.jpg",
        width: 1037,
      },
      title: "Avatar",
      titleType: "movie",
      year: 2009,
    },
    waysToWatch: {
      "@type": "imdb.api.watch.watchoptions",
      id: "/title/tt0499549/",
      optionGroups: [
        {
          displayName: "RENT/BUY",
          watchOptions: [
            {
              link: {
                platform: "amzn1.imdb.w2w.platform.web",
                uri: "https://www.amazon.com/s?i=movies-tv&k=Avatar",
              },
              primaryText: "Amazon",
              provider: {
                providerId: "amzn1.imdb.w2w.provider.amazon",
                providerTypeId: "amzn1.imdb.w2w.provider-type.physical",
                refPart: "amazon",
              },
              secondaryText: "search for Blu-ray and DVD",
            },
            {
              link: {
                platform: "amzn1.imdb.w2w.platform.web",
                uri: "https://www.amazon.com/gp/video/detail/amzn1.dv.gti.0aa9f75c-48cb-f9bb-6ba3-59f1d159e027",
              },
              primaryText: "Prime Video",
              provider: {
                providerId: "amzn1.imdb.w2w.provider.prime_video",
                providerTypeId: "amzn1.imdb.w2w.provider-type.tvod",
                refPart: "pvt_aiv",
              },
              secondaryText: "rent/buy from $3.99",
            },
          ],
        },
      ],
    },
    genres: ["Action", "Adventure", "Fantasy", "Sci-Fi"],
    certificate: "PG-13",
  },
  tt11866324: {
    title: {
      "@type": "imdb.api.title.title",
      disambiguation: "I",
      id: "/title/tt11866324/",
      image: {
        height: 3000,
        id: "/title/tt11866324/images/rm4094888705",
        url: "https://m.media-amazon.com/images/M/MV5BMDBlMDYxMDktOTUxMS00MjcxLWE2YjQtNjNhMjNmN2Y3ZDA1XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg",
        width: 2025,
      },
      runningTimeInMinutes: 100,
      title: "Prey",
      titleType: "movie",
      year: 2022,
    },
    ratings: {
      "@type": "imdb.api.title.ratings",
      disambiguation: "I",
      id: "/title/tt11866324/",
      title: "Prey",
      titleType: "movie",
      year: 2022,
      bottomRank: 6700,
      canRate: true,
      rating: 7.2,
      ratingCount: 187749,
      topRank: 2041,
    },
    metacritic: {
      "@type": "imdb.api.title.metacritic",
      id: "/title/tt11866324/",
      metaScore: 71,
      metacriticUrl:
        "https://www.metacritic.com/movie/prey-2022?ftag=MCD-06-10aaa1c",
      reviewCount: 43,
      userRatingCount: 597,
      userScore: 6.3,
    },
    releaseDate: "2022-08-05",
    popularity: {
      "@type": "imdb.api.title.rank",
      currentRank: 469,
      disambiguation: "I",
      id: "/title/tt11866324/",
      image: {
        height: 3000,
        id: "/title/tt11866324/images/rm4094888705",
        url: "https://m.media-amazon.com/images/M/MV5BMDBlMDYxMDktOTUxMS00MjcxLWE2YjQtNjNhMjNmN2Y3ZDA1XkEyXkFqcGdeQXVyMTM1MTE1NDMx._V1_.jpg",
        width: 2025,
      },
      title: "Prey",
      titleType: "movie",
      year: 2022,
    },
    waysToWatch: {
      "@type": "imdb.api.watch.watchoptions",
      id: "/title/tt11866324/",
      optionGroups: [
        {
          displayName: "WATCH NOW",
          watchOptions: [
            {
              link: {
                platform: "amzn1.imdb.w2w.platform.web",
                uri: "http://www.hulu.com?d=Amazon",
              },
              primaryText: "Hulu",
              provider: {
                providerId: "amzn1.imdb.w2w.provider.hulu",
                providerTypeId: "amzn1.imdb.w2w.provider-type.svod",
                refPart: "hulu",
              },
              secondaryText: "on Hulu.com and the Hulu app",
            },
          ],
        },
      ],
    },
    genres: ["Action", "Adventure", "Drama", "Horror", "Sci-Fi", "Thriller"],
    certificate: "R",
  },
};

const testMovies1 = [
  "Iron Man 3",
  "Inglourious Basterds",
  "National Lampoon's Vacation",
  "Indiana Jones and the Kingdom of the Crystal Skull",
  "Dune",
];
const testMovies5 = [
  {
    id: "/title/tt1300854/",
    image: {
      height: 1100,
      id: "/title/tt1300854/images/rm520987392",
      url: "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_.jpg",
      width: 770,
    },
    title: "Iron Man 3",
    titleType: "movie",
    year: 2013,
  },
  {
    id: "/title/tt0361748/",
    image: {
      height: 3000,
      id: "/title/tt0361748/images/rm3163035648",
      url: "https://m.media-amazon.com/images/M/MV5BOTJiNDEzOW…OWVmZDQ2OWJhXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg",
      width: 2025,
    },
    title: "Inglourious Basterds",
    titleType: "movie",
    year: 2009,
  },
  {
    id: "/title/tt0085995/",
    image: {
      height: 864,
      id: "/title/tt0085995/images/rm4205253632",
      url: "https://m.media-amazon.com/images/M/MV5BMmViMGQ4ZD…N2FhNjhjNDVjXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_.jpg",
      width: 568,
    },
    title: "National Lampoon's Vacation",
    titleType: "movie",
    year: 1983,
  },
  {
    id: "/title/tt0367882/",
    image: {
      height: 1185,
      id: "/title/tt0367882/images/rm3047756033",
      url: "https://m.media-amazon.com/images/M/MV5BZmY5ZTk3ZD…OTkxMGYxMjRlXkEyXkFqcGdeQXVyMjM4MzQ4OTQ@._V1_.jpg",
      width: 800,
    },
    title: "Indiana Jones and the Kingdom of the Crystal Skull",
    titleType: "movie",
    year: 2008,
  },
  {
    id: "/title/tt1160419/",
    image: {
      height: 755,
      id: "/title/tt1160419/images/rm2910452737",
      url: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNW…MGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      width: 509,
    },
    title: "Dune",
    titleType: "movie",
    year: 2021,
  },
];

const testClues1 = {
  genres: ["Action", "Adventure", "Sci-Fi"],
  id: "tt1300854",
  image:
    "https://m.media-amazon.com/images/M/MV5BOWY4Y2U5ZjAtNjg1OS00NWVlLTlhNGItMzNmZGM0ZTdlYjE3XkEyXkFqcGdeQXVyMjI3NzE4MTM@._V1_.jpg",
  plot: "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
  quote: [
    "I thought things couldn't get any worse... then I turned on the TV. That's when he happened.",
    "Tony Stark",
  ],
  year: "2021",
};

function getTestMovies() {
  return testMovies1;
}
function getTestClues() {
  return testClues1;
}

const testClues2 = {
  image:
    "https://m.media-amazon.com/images/M/MV5BN2VkY2M5MDEtOWNkNC00MjhhLWExM2YtMmY5OWU3MjZjNzczXkEyXkFqcGdeQXVyMjA3OTMwODg@._V1_.jpg",
  plot: "You either win or you die. In the mythical continent of Westeros, nine families of higher nobility scramble bitterly to gain power over the seven kingdoms and the Iron throne.",
  genres: ["Fantasy", "Action", "Drama"],
  year: "2011",
  quote: [
    "Any man who must say, 'I am the king,' is no true king. I'll make sure you understand that when I've won your war for you.",
    "Patriarch Tywin Lannister",
  ],
};
const testMovies2 = [
  { title: "Game of Thrones", id: 1 },
  { title: "Ironman", id: 2 },
  { title: "Mamma Mia", id: 3 },
  { title: "Lord of the Ring", id: 4 },
  { title: "Barbie", id: 1 },
];

function getTestMovies2() {
  return testMovies2;
}
function getTestClues2() {
  return testClues2;
}

const testMovies3 = [
  { title: "The Batman", id: 1 },
  { title: "Avengers", id: 2 },
  { title: "Mamma Mia", id: 3 },
  { title: "The Hobbit", id: 4 },
  { title: "Lion King", id: 1 },
];

const testClues3 = {
  image:
    "https://m.media-amazon.com/images/M/MV5BMDU2MDIwNDQtYzUzZS00ZDAxLWJjNWMtYWU5NTM1MDJkNDcyXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1280_.jpg",
  plot: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
  genres: ["Action", "Crime", "Drama"],
  year: "2022",
  quote: [
    "What the hell is this? Good cop, *bat-shit* cop?",
    "Oswald Cobblepot",
  ],
};

function getTestMovies3() {
  return testMovies3;
}
function getTestClues3() {
  return testClues3;
}

export {
  getTestClues,
  getTestMovies,
  getTestMovies2,
  getTestClues2,
  getTestMovies3,
  getTestClues3,
};
