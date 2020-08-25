import React from 'react';
import '../styles/RowPoster.css';

function RowPoster({ imgURL, title }) {
    return (
        <img className="rowPoster" src={imgURL} alt={title} />
    )
}

export default RowPoster
