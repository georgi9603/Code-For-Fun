import React, { useState, useEffect } from 'react';
import "../styles/Row.css";
import axiosInstance from '../requests/axios';
import requests from '../requests/requests';

function Row({ title, fetchURL }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        async function fetchData() {
            const request = await axiosInstance.get(fetchURL);
            console.log(requests)
        }

        fetchData()

        return () => {
        }
    }, [])

    return (
        <div>
            <h2>{title}</h2>
        </div>
    )
}

export default Row
