import React, { useState, useEffect } from 'react';
import "../styles/Row.css";
import axiosInstance from '../requests/axios';
import RowPoster from '../components/RowPoster';

function Row({ title, fetchURL }) {
    const [movies, setMovies] = useState([]);
    const baseURL = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            const response = await axiosInstance.get(fetchURL);
            setMovies(response.data.results)
        }
        fetchData()
    }, [fetchURL])

    console.log(movies)

    return (
        <div className="row">
            <h2 className="">{title}</h2>
            <div className="row_posters">
                {movies.map(movie => (
                    <RowPoster key={movie.id} title={movie.name} imgURL={baseURL + movie.poster_path} title={movie.name} />
                ))}
            </div>
        </div>
    )
}

export default Row
