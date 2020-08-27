import React, { useState, useEffect } from 'react';
import axiosInstance from '../requests/axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import { netflixOriginals, fallBackUrls } from '../data/data';
import '../styles/Banner.css';

function Banner() {
    const [movie, setMovie] = useState([]);
    const [trailerURL, setTrailerURL] = useState("");
    const baseURL = "https://image.tmdb.org/t/p/original";
    const options = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1
        }
    }

    useEffect(() => {
        async function fetchData() {
            const response = await axiosInstance.get(netflixOriginals.fetchUrl);

            setMovie(
                response
                    .data
                    .results[Math.floor(
                        (Math.random() * response?.data?.results?.length - 1))]
            )
        }
        fetchData()
    }, []);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    const handleClick = (movie) => {
        trailerURL
            ? setTrailerURL("")
            : movieTrailer(movie?.name || "")
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerURL(urlParams.get('v'));
                })
                .catch(err => {
                    const indexOfMovieInFallBack = fallBackUrls.map(e => e.name).indexOf(movie?.name);

                    if (indexOfMovieInFallBack !== -1) {
                        let urlParams = new URLSearchParams(new URL(fallBackUrls[indexOfMovieInFallBack].url).search)
                        setTrailerURL(urlParams.get("v"))
                    } else {
                        console.log(movie?.name)
                        alert(err.messsage === undefined
                            ? "The Movie is blocket for your country!"
                            : err.messsage
                        );
                    }
                })
    }

    return (
        <header
            className="banner"
            style={{ backgroundImage: `url("${baseURL + movie?.backdrop_path}")` }}
        >
            {trailerURL && <YouTube className="banner__trailer" videoId={trailerURL} opts={options} />}

            <div className="banner__content">
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button" onClick={() => handleClick(movie)}>Play</button>
                    <button className="banner__button">Review</button>
                </div>
                <h1 className="banner__overview">
                    {truncate(movie?.overview, 200)}
                </h1>
            </div>

            <div className="banner--fadeBottom"></div>
        </header>
    )
}

export default Banner
