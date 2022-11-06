import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
const TuitItem = ({tuit}) => {
    const verifiedIcon = <FontAwesomeIcon icon={faCircleCheck} color="#0d6efd"/>
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-1 pe-0">
                    <img alt="source" width='100%' className="rounded-circle" src={`/images/${tuit.image}`}/>
                </div>

                <div className="col-11">
                    <div className="row float-left">
                        <div className="col-2 fw-bold pe-0">{tuit.userName}</div>
                        <div className="col-1 p-0">{verifiedIcon}</div>
                        <div className="col-2 p-0">{tuit.handle}</div>
                        <div className="col-1 p-0">{tuit.time}</div>

                    </div>
                    <div className="row float-left">
                        <div className="col-12">
                            {tuit.tuit}
                        </div>
                    </div>
                </div>

            </div>
        </li>


    );
};
export default TuitItem;