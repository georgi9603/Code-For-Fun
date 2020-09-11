import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import './VideoSidebar.css';

function VideoSidebar() {
    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
                <FavoriteIcon className="videoSidebar__buttonLike" fontSize="large" />
                <p>1000</p>
            </div>
            <div className="videoSidebar__button">
                <MessageIcon className="videoSidebar__buttonMessage" fontSize="large" />
                <p>250</p>
            </div>
            <div className="videoSidebar__button">
                <ShareIcon className="videoSidebar__buttonShare" fontSize="large" />
                <p>20</p>
            </div>
        </div>
    )
}

export default VideoSidebar
