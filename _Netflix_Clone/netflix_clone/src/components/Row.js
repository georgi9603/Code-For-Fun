import React, { useState, useEffect } from 'react';
import axiosInstance from '../requests/axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import "../styles/Row.css";

function Row({ title, fetchURL, isNetflixOriginals }) {
    const [movies, setMovies] = useState([]);
    const [trailerURL, setTrailerURL] = useState("");
    const baseURL = "https://image.tmdb.org/t/p/original/";
    const options = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1
        }
    }

    useEffect(() => {
        async function fetchData() {
            const response = await axiosInstance.get(fetchURL);
            setMovies(response.data.results)
        }
        fetchData()
    }, [fetchURL])

    const handleClick = (movie) => {
        trailerURL
            ? setTrailerURL("")
            : movieTrailer(movie?.name || "")
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerURL(urlParams.get('v'));
                })
                .catch(err =>
                    alert(err.messsage === undefined
                        ? "The Movie is blocket for your country!"
                        : err.messsage
                    ))
    }

    return (
        <div className="row">
            <h2 className="row__title">{title}</h2>
            <div className={`row_posters`}>
                {movies?.map(movie => (
                    <img
                        key={movie.id}
                        className={`row__poster ${isNetflixOriginals && "row__posterLarge"}`}
                        src={isNetflixOriginals
                            ? baseURL + movie?.poster_path
                            : baseURL + movie?.backdrop_path}
                        alt={movie?.name}
                        onClick={() => handleClick(movie)}
                    />
                ))}
            </div>
            {trailerURL && <YouTube videoId={trailerURL} opts={options} />}
        </div>
    )
}

export default Row
