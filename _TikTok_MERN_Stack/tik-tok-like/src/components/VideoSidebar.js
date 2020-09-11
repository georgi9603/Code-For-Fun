import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import './VideoSidebar.css';

function VideoSidebar({ likes, messages, shares }) {
    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
                <FavoriteIcon className="videoSidebar__buttonLike" fontSize="large" />
                <p>{likes}</p>
            </div>
            <div className="videoSidebar__button">
                <MessageIcon className="videoSidebar__buttonMessage" fontSize="large" />
                <p>{messages}</p>
            </div>
            <div className="videoSidebar__button">
                <ShareIcon className="videoSidebar__buttonShare" fontSize="large" />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar
