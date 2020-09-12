import React from 'react';
import Ticker from 'react-ticker';
import MusicIcon from '@material-ui/icons/MusicNote'


import './VideoFooter.css';


function VideoFooter({ profile, description, tickerSong }) {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@{profile}</h3>
                <p>{description}</p>
                <div className="videoFooter__ticker">
                    <MusicIcon className="videoFooter__icon" />
                    <Ticker mode="smooth">
                        {({ index }) => (
                            <>
                                <p>{tickerSong}!</p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
            <img
                className="videoFooter__recordAnimation"
                src="https://static.thenounproject.com/png/934821-200.png"
                alt=""
            >
            </img>
        </div>
    )
}

export default VideoFooter
