import React, { useState } from "react";
import SearchForm from "./comp/SearchForm";
import MovieList from "./comp/MovieList";
import movies from "./data/movies";
import "./styles/styles.css";

function MovieComp() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredMovies = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="app">
      <h1 className="title">Movie Search</h1>
      <SearchForm onSearch={handleSearch} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default MovieComp;
