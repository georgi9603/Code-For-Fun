import React, { useState, useEffect } from 'react';
import "../styles/Row.css";
import axiosInstance from '../requests/axios';
import '../styles/Row.css'

function Row({ title, fetchURL, isNetflixOriginals }) {
    const [movies, setMovies] = useState([]);
    const baseURL = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            const response = await axiosInstance.get(fetchURL);
            setMovies(response.data.results)
        }
        fetchData()
    }, [fetchURL])

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

                    />
                ))}
            </div>
        </div>
    )
}

export default Row
