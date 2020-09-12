import React from 'react';
import Ticker from 'react-ticker';
import MusicIcon from '@material-ui/icons/MusicNote'


import './VideoFooter.css';


function VideoFooter() {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@lotterlive</h3>
                <p>Description</p>
                <div className="videoFooter__ticker">
                    <MusicIcon className="videoFooter__icon" />
                    <Ticker mode="smooth">
                        {({ index }) => (
                            <>
                                <p>This is the Headline of element #{index}!</p>
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
