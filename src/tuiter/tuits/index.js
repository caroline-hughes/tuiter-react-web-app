import React, { useEffect } from "react";
import {useDispatch, useSelector}
  from "react-redux";
import TuitItem from "./tuit-item";
import {findTuitsThunk} from "../../services/tuits-thunks";

const TuitsList = () => {
    // grab tuits and loading flag from reducer
    const {tuits, loading} = useSelector(state => state.tuitsData)

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(findTuitsThunk())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])   

    return(
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }

            {
                !loading &&
                tuits.map(tuit =>
                    <TuitItem key={tuit._id} tuit={tuit}/> )
            }
        </ul>
    );
};
export default TuitsList;