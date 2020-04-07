import React from 'react'

import "./Sidebar.css"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="icon">
                {/* TODO: add icon */}
            </div>

            <div className="home option">
                <div className="icon"></div>
                <div className="text">
                    <span>HOME</span>
                </div>
            </div>

            <div className="personal option">
                <div className="icon"></div>
                <div className="text">
                    <span>Own Page</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
