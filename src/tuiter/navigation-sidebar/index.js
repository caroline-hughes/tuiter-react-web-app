import React from "react";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div className="list-group">
            <div className="list-group-item">Tuiter</div>
            <div className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                Home
            </div>
            <div className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                Explore
            </div>
            <div className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                Notifications
            </div>
            <div className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                Messages
            </div>
            <div className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                Bookmarks
            </div>
            <div className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                Lists
            </div>
            <div className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                Profile
            </div>
            <div className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                More
            </div>
        </div>
    );
};
export default NavigationSidebar;