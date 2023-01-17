import React from "react";

import MoviesList from "./components/MoviesList";

function App() {
  const dummyMovies = [
    {
      id: 1,
      title: "A New Hope",
      openingText: "This is the opening text of the movie",
      releaseDate: "1978-07-21",
    },
    {
      id: 2,
      title: "The Phantom Menace",
      openingText: "This is the second opening text of the movie",
      releaseDate: "1999, 05-19",
    },
  ];

  return (
    <React.Fragment>
      <section>
        <button>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={dummyMovies} />
      </section>
    </React.Fragment>
  );
}

export default App;
