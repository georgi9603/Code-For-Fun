import React, { useState, useRef } from 'react';
import './VideoSidebar';
import './VideoFooter';

import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video({ videoURL, likes, messages, shares, profile, description, tickerSong }) {
    const videoRef = useRef(null)
    const [shoutPlay, setShouldPlay] = useState(false)

    const handleClickOnVideo = () => {
        if (shoutPlay) {
            videoRef.current.pause();
            setShouldPlay(false)
        } else {
            videoRef.current.play();
            setShouldPlay(true)
        }
    }

    return (
        <div className="video">
            <video
                className="video__player"
                onClick={handleClickOnVideo}
                loop
                ref={videoRef}
                src={videoURL}
            >
            </video>
            <VideoFooter
                profile={profile}
                description={description}
                tickerSong={tickerSong}
            />
            <VideoSidebar
                likes={likes}
                messages={messages}
                shares={shares}
            />
        </div>
    )
}

export default Video
