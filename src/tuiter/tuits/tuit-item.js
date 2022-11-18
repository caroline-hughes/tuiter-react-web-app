import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";

const TuitItem = ({tuit}) => {
    const verifiedIcon = <FontAwesomeIcon icon={faCircleCheck} color="#0d6efd"/>
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-1 pe-0">
                    <img alt="source" width='100%' className="rounded-circle" src={`/images/${tuit.image}`}/>
                </div>

                <div className="col-11">
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(tuit._id)}></i>
                    <div className="row float-left">
                        <div className="col-12 p-0"><div className="fw-bold d-inline pe-1">{tuit.userName}</div>
                            {verifiedIcon} {tuit.handle} {tuit.time}</div>
                    </div>
                    <div className="row float-left pb-2">
                        <div className="col-12">
                            {tuit.tuit}
                        </div>
                    </div>
                    <TuitStats replies={tuit.replies} retuits={tuit.retuits} likes={tuit.likes} liked={tuit.liked}/>
                </div>

            </div>
        </li>


    );
};
export default TuitItem;