import React from "react";
import "./index.css";
import {Link} from "react-router-dom";

const NavigationSidebar = ({active = 'home'}) => {
    return (
        <div className="list-group">
            <div className="list-group-item">Tuiter</div>
            <div className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                <a href={'/tuiter/'} className={`a${active === 'home'?'active':''}`}>Home</a>
            </div>
            <div className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                <Link className={`a${active === 'explore'?'active':''}`} to="/tuiter/explore"> Explore </Link>
            </div>
            <div className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <a href={'/tuiter/'} className={`a${active === 'notifications'?'active':''}`}>Notifications</a>
            </div>
            <div className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <a href={'/tuiter/'} className={`a${active === 'messages'?'active':''}`}>Messages</a>
            </div>
            <div className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <a href={'/tuiter/'} className={`a${active === 'bookmarks'?'active':''}`}>Bookmarks</a>
            </div>
            <div className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <a href={'/tuiter/'} className={`a${active === 'lists'?'active':''}`}>Lists</a>
            </div>
            <div className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                <a href={'/tuiter/'} className={`a${active === 'profile'?'active':''}`}>Profile</a>
            </div>
            <div className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <a href={'/tuiter/'} className={`a${active === 'more'?'active':''}`}>More</a>
            </div>
        </div>
    );
};
export default NavigationSidebar;