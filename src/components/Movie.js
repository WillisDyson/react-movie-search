const Movie = ({ movie }) => {
    return (
        <div class="movie">
            <h2 class="movie-title">{movie.original_title}</h2>
            {movie.poster_path && (
                <img class="movie-img"
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                />
            )}
        </div>
    );
};

export default Movie;