import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = (url) => {
    const [state, setState] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(url)
            setState(result.data)
        }
        fetchData();

    }, [url])

    return [state];
};