const movieCards = movies.map((movie) => {
    let imageSrc;
    if (movie.title === 'The Dark Knight') {
      imageSrc = darkKnightImage;
    } else if (movie.title === 'Inception') {
      imageSrc = inceptionImage;
    }
    // Add more conditions for other movies if needed
  
    return (
      <div key={movie.id}>
        <h2>{movie.title}</h2>
        <img src={imageSrc} alt={movie.title} />
        <p>{movie.overview}</p>
        <p>Release Date: {movie.releaseDate}</p>
      </div>
    );
  });
  