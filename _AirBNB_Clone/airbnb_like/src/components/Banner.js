import React from 'react';
import { Button } from '@material-ui/core';

import './Banner.css'

function Banner() {
    return (
        <div className="banner">
            <div className="banner__info">
                <h1>Get out and strech your imagination</h1>
                <h4>Wherever you go, go with all your heart</h4>
                <Button>Explore nearby</Button>
            </div>
        </div>
    )
}

export default Banner
