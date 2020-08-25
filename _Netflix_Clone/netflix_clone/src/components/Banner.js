import React, { useState, useEffect } from 'react';
import '../styles/Banner.css';
import requests from '../requests/requests';
import axiosInstance from '../requests/axios';

function Banner() {
    const [movie, setMovie] = useState([]);
    const baseURL = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            const response = await axiosInstance.get(requests.fetchNetflixOriginals);

            setMovie(
                response
                    .data
                    .results[Math.floor(
                        (Math.random() * response?.data?.results?.length - 1) + 0)]
            )
        }
        fetchData()
    }, [requests.fetchNetflixOriginals])

    console.log(movie)

    return (
        <div className="banner">
            <img
                className="banner__image"
                src={baseURL + movie?.backdrop_path}
                alt={movie.name}
            />
            <div className="banner__buttons">
                <button>Play</button>
                <button>Review</button>
            </div>
            <div className="banner__overview">
                {movie.overview}
            </div>
        </div>
    )
}

export default Banner
