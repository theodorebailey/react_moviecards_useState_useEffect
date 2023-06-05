import React from 'react';
// import darkKnightImage from './dark-knight.png';
// import inceptionImage from './inception.png';

import './../styles/styles.css';

// {require("./dark-knight.png")} alt={{movie.title}}

function MovieCard({ movie }) {
  return (
    <div className="movie-card movie-card-container">
      <img src={movie.poster} alt={movie.title} />
      {/* <img src={require("./dark-knight.png")} alt={movie.title} /> */}
      <h2 className="movie-title">{movie.title}</h2>
      <p className="movie-release-date">Release Date: {movie.releaseDate}</p>
      <p className="movie-overview">{movie.overview}</p>
    </div>
  );
}

export default MovieCard;
