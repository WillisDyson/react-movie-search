import { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./components/Movie";

const MovieSearchPage = () => {
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const handleMovieSearch = (e) => {
        e.preventDefault();
        axios
            .get("https://api.themoviedb.org/3/search/movie", {
                params: {
                    api_key: process.env.REACT_APP_API_KEY,
                    query: searchQuery,
                },
            })
            .then((response) => {
                setMovies(response.data.results);
            });
    };

    return (
        <div class="wrapper">
            <h1>Movie search page</h1>
            <form onSubmit={handleMovieSearch}>
                <input
                    class="search"
                    type="text"
                    placeholder="Enter movie name"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            <div class="movies">
                {movies.map((movie) => (
                    <Movie key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default MovieSearchPage;