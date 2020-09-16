import React, { useState } from 'react';
import Calendar from './Calendar';
import { Button } from '@material-ui/core';

import './Banner.css'

function Banner() {
    const [isCalendarOpen, setisCalendarOpen] = useState(false)

    return (
        <div className="banner">
            <div className="banner__dateSearch">
                <Button
                    onClick={() => setisCalendarOpen(!isCalendarOpen)}
                    className="banner__dateSearchButton"
                    variant="outlined"
                >
                    {isCalendarOpen ? " Hide" : "Show"} calendar
                </Button>
                {isCalendarOpen && <Calendar />}
            </div>
            {!isCalendarOpen && <div className="banner__info">
                <h1>Get out and strech your imagination</h1>
                <h4>Wherever you go, go with all your heart</h4>
                <Button>Explore nearby</Button>
            </div>}
        </div>
    )
}

export default Banner
