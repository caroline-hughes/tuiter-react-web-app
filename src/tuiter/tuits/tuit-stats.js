import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faRepeat } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { faShareNodes } from '@fortawesome/free-solid-svg-icons'

const TuitStats = ({replies, retuits, likes, liked}) => {
    const hearticon = <FontAwesomeIcon icon={faHeart} color={liked ? "red" : "black"}/>
    const retuiticon = <FontAwesomeIcon icon={faRepeat}/>
    const replyicon = <FontAwesomeIcon icon={faComment}/>
    const shareicon = <FontAwesomeIcon icon={faShareNodes}/>
    return(
        <div className="row">
            <div className="col-3">
                {replyicon} {replies}
            </div>
            <div className="col-3">
                {retuiticon} {retuits}
            </div>
            <div className="col-3">
                {hearticon} {likes}
            </div>
            <div className="col-3">
                {shareicon}
            </div>
        </div>
    );
};
export default TuitStats;