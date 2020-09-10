import React, { useState, useRef } from 'react';
import './Video.css';

function Video() {
    const videoRef = useRef(null)
    const [shoutPlay, setShouldPlay] = useState(false)

    const handleClickOnVideo = () => {
        if (shoutPlay) {
            setShouldPlay(false)
        } else {
            setShouldPlay(true)
        }
    }

    return (
        <div className="video">
            <video
                className="video__mainVideo"
                onClick={handleClickOnVideo}
                loop
                ref={videoRef}
                src="https://v16m.tiktokcdn.com/6f2eb2ae7ef2c2749f3078bf9bb1fbaf/5f5ab2f2/video/tos/alisg/tos-alisg-pv-0037/51dde7afaa8e4569bf9bf8d89deebd6b/?a=1180&amp;br=7472&amp;bt=3736&amp;cr=0&amp;cs=0&amp;cv=1&amp;dr=3&amp;ds=6&amp;er=&amp;l=20200910171240010190219222440705A0&amp;lr=tiktok&amp;mime_type=video_mp4&amp;qs=13&amp;rc=amc4ZjtweG11dzMzOzgzM0ApZnV2aTg2aXU7ZTMzNDU6eWdgb3BjMjBjbzVfLS0uLzRzc2RhMmA1anJnb3EtLTUyLS06Yw%3D%3D&amp;vl=&amp;vr="
            >
            </video>
        </div>
    )
}

export default Video
