import React from 'react';

// CSS
import './topNav.css';

// Components

function TopNav() {

    // States


    return (
        <div className='topnav-wrapper'>
            <div className='topnav-content-wrapper'>
                <span className='topnav-content-username'> Username </span>
                <div className='topnav-content-buttons'>
                    <button className='topnav-content-button'> Save </button>
                    <button className='topnav-content-button'> Logout </button>
                </div>
            </div>
        </div>
    );
}

export default TopNav;