import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faRepeat } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { faShareNodes } from '@fortawesome/free-solid-svg-icons'
import { updateTuitThunk } from "../../services/tuits-thunks";
import { useDispatch } from "react-redux";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const dislikeicon = 
            <i 
            onClick={() => dispatch(updateTuitThunk({
            ...tuit,
            dislikes: tuit.disliked ? tuit.dislikes - 1 : tuit.dislikes + 1,
            disliked: !tuit.disliked
            }))}>
                <FontAwesomeIcon icon={faThumbsDown} color={tuit.disliked ? "blue" : "black"}/>
            </i>
    const hearticon = 
            <i 
            onClick={() => dispatch(updateTuitThunk({
            ...tuit,
            likes: tuit.liked ? tuit.likes - 1 : tuit.likes + 1,
            liked: !tuit.liked
            }))}>
                <FontAwesomeIcon icon={faHeart} color={tuit.liked ? "red" : "black"}/>
            </i>
    const retuiticon = <FontAwesomeIcon icon={faRepeat}/>
    const replyicon = <FontAwesomeIcon icon={faComment}/>
    const shareicon = <FontAwesomeIcon icon={faShareNodes}/>
    return(
        <div className="row">
            <div className="col">
                {replyicon} {tuit.replies}
            </div>
            <div className="col">
                {retuiticon} {tuit.retuits}
            </div>
            <div className="col">
                {hearticon} {tuit.likes}
            </div>
            <div className="col">
                {dislikeicon} {tuit.dislikes}
            </div>
            <div className="col">
                {shareicon}
            </div>
        </div>
    );
};
export default TuitStats;